import { computed, inject, Injectable, Signal, untracked } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { filter, map, NEVER, tap, type Observable } from 'rxjs';
import { deepEqual } from '../../utils/objects/deep-equal';
import { MqttService, type Z2MDevice } from './mqtt.service';
import type { Packet } from 'mqtt';

@Injectable({
  providedIn: 'root'
})
export class ZigbeeService {
  mqtt = inject(MqttService);

  devices: Signal<Z2MDevice[]> = toSignal(<any>this.mqtt.listenFor('bridge/devices'), <any>{ initialValue: [] }) as Signal<
    Z2MDevice[]
  >;

  getDeviceInfo = (ieeeAddress: Signal<string>) => computed(() => this.#getDevice(ieeeAddress()), { equal: deepEqual });

  getDeviceStatus = (ieeeAddress: Signal<string>) =>
    rxResource({
      params: () => this.#getDevice(ieeeAddress()),
      stream: ({ params }) => {
        if (params && params.friendly_name) {
          return this.mqtt.listenFor(`zigbee2mqtt/${params.friendly_name}`) as Observable<Record<string, unknown>>;
        }
        return NEVER as Observable<Record<string, unknown>>;
      }
    });

  getStatus = (topic: string | Signal<string>) =>
    rxResource({
      params: () => (typeof topic === 'string' ? topic : topic()),
      stream: ({ params }) => {
        return this.mqtt.listenFor(params) as Observable<Record<string, unknown>>;
      }
    });

  joinAllowed: Signal<boolean> = toSignal(
    this.mqtt.listenFor('bridge/logging').pipe(
      filter(
        (log: any) =>
          log &&
          log.level === 'info' &&
          typeof log.message === 'string' &&
          ['zh:ember: [stack status] network', 'z2m: zigbee: disabling joining new devices'].some(s =>
            log.message.toLowerCase().includes(s)
          )
      ),
      tap(log => console.log('Join allowed:', log.message)),
      map(log => (log.message.includes('open') ? true : false))
    ),
    { initialValue: false }
  );

  jointime: Signal<number> = toSignal(this.mqtt.listenFor('bridge/response/permit_join').pipe(
    filter((r: any) => r && r.data && r.data.time !== undefined),
    tap(r => console.log('Jointime response:', r)),
    map((r: any) => r.data.time || 0),
  ));

  publish = (topic: string, payload: Record<string, unknown> | string) => {
    return new Promise<Packet | undefined>((resolve, reject) => {
      if (typeof payload !== 'string') {
        payload = JSON.stringify(payload);
      }
      this.mqtt.client.then(client => {
        client.publish(topic, <string>payload, undefined, (error, packet) => {
          if (error) {
            console.error('Error publishing to MQTT:', error);
            reject(error);
          } else {
            resolve(packet);
          }
        });
      });
    });
  };

  #getDevice = (ieeeAddress: string) =>
    untracked(this.devices).find(d => d.ieee_address === ieeeAddress || d.friendly_name === ieeeAddress);
}

//Calling Request API: bridge/request/device/rename
export const renameDevice = (from: string, to: string) => ({
  payload: { from, to, homeassistant_rename: true }
});

const upReq = { from: 'WerkPaneel', to: 'werkplaats/WerkPaneel', homeassistant_rename: true, last: undefined };
const r = {
  topic: 'bridge/request/device/rename',
  payload: { from: 'WerkPaneel', to: 'werkplaats/WerkPaneel', homeassistant_rename: true, last: null, transaction: 'r8q70-3' }
};
