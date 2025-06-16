import { computed, inject, Injectable, Signal, untracked } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { NEVER, type Observable } from 'rxjs';
import { deepEqual } from '../../utils/objects/deep-equal';
import { MqttService, type Z2MDevice } from './mqtt.service';

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

  publish = (topic: string, payload: Record<string, unknown> | string) => {
    return new Promise<void>((resolve, reject) => {
      if (typeof payload !== 'string') {
        payload = JSON.stringify(payload);
      }
      this.mqtt.client.then(client => {
        client.publish(topic, <string>payload, undefined, args => {
          if (args) {
            console.error('Error publishing to MQTT:', args);
            reject(args);
          } else {
            resolve();
          }
        });
      });
    });
  };

  #getDevice = (ieeeAddress: string) =>
    untracked(this.devices).find(d => d.ieee_address === ieeeAddress || d.friendly_name === ieeeAddress);
}

//Calling Request API: bridge/request/device/rename
const renameDevice = (from: string, to: string) => ({
  topic: 'bridge/request/device/rename',
  payload: { from, to, homeassistant_rename: true }
});

const upReq = { from: 'WerkPaneel', to: 'werkplaats/WerkPaneel', homeassistant_rename: true, last: undefined };
const r = {
  topic: 'bridge/request/device/rename',
  payload: { from: 'WerkPaneel', to: 'werkplaats/WerkPaneel', homeassistant_rename: true, last: null, transaction: 'r8q70-3' }
};
