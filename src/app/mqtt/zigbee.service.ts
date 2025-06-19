import { computed, inject, Injectable, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import type { Packet } from 'mqtt';
import { filter, map, NEVER, of, shareReplay, switchMap, tap, type Observable } from 'rxjs';
import { deepEqual } from '../../utils/objects/deep-equal';
import { MqttService, type Z2MDevice } from './mqtt.service';

@Injectable({
  providedIn: 'root'
})
export class ZigbeeService {
  mqtt = inject(MqttService);

  devices: Signal<Z2MDevice[]> = toSignal(
    <any>this.mqtt
      .listenFor('bridge/devices')
      .pipe
      // tap(devices => console.log('Zigbee devices updated:', devices)),
      (),
    <any>{ initialValue: [] }
  ) as Signal<Z2MDevice[]>;

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

  joinAllowed$ = this.mqtt.listenFor('bridge/logging').pipe(
    filter(
      (log: any) =>
        log &&
        typeof log.message === 'string' &&
        ['permit_join', 'zh:ember: [stack status] network', 'disabling joining new devices'].some(s =>
          log.message.toLowerCase().includes(s)
        )
    ),
    map(checkJoinAllowed),
    tap(log => console.log('Join allowed:', log)),

    shareReplay(1) // Cache the latest value
  );
  joinAllowed: Signal<boolean> = toSignal(this.joinAllowed$, { initialValue: false });

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

  #getDevice = (ieeeAddress: string) => this.devices().find(d => d.ieee_address === ieeeAddress || d.friendly_name === ieeeAddress);
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

function checkJoinAllowed(log: Record<string, string>): boolean {
  const lowerLog = log.message?.toLowerCase();
  console.log({ lowerLog });
  const parts = lowerLog?.split(`payload '`);
  if (parts && parts.length > 1) {
    try {
      const json = JSON.parse(parts[1].split(`'`)[0]);
      const time = json?.data?.time ?? 0;
      if (typeof time === 'number' && time > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  if (lowerLog.includes('open')) return true;
  // return false for all remaining cases
  return false;
}
