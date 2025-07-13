import { computed, inject, Injectable, Injector, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import type { Packet } from 'mqtt';
import { combineLatest, filter, map, NEVER, of, shareReplay, startWith, tap, type Observable } from 'rxjs';
import { deepEqual } from '../../utils/objects/deep-equal';
import { MqttService, type Z2MDevice } from './mqtt.service';

@Injectable({
  providedIn: 'root'
})
export class ZigbeeService {
  mqtt = inject(MqttService);
  injector = inject(Injector);

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
      },
      injector: this.injector
    });

  getStatus = (topic: string | Signal<string>) =>
    rxResource({
      params: () => undefinedWhenEmpty(typeof topic === 'string' ? topic : topic()),
      stream: ({ params }) => this.mqtt.listenFor(params) as Observable<Record<string, unknown>>,
      injector: this.injector
    });

  getMultipleStatuses = (topics: Signal<string[]>) =>
    rxResource({
      params: () => undefinedWhenEmpty(topics()),
      stream: ({ params }) => {
        if (!params || params.length === 0) {
          return of([]);
        }
        return combineLatest(params.map(topic => this.mqtt.listenFor(topic).pipe(startWith(null)))).pipe(
          map(statuses => {
            return statuses.map((status, index) => {
              if (typeof status !== 'object' || status === null) {
                // console.warn(`Invalid status for topic ${params[index]}:`, status);
                return { friendly_name: params[index], power: 0, energy: 0, current: 0 };
              } else {
                return {
                  friendly_name: params[index],
                  power: <number>status['power'] ?? 0,
                  energy: <number>status['energy'] ?? 0,
                  current: <number>status['current'] ?? 0
                };
              }
            });
          })
        );
      },
      injector: this.injector,
      equal: deepEqual
    });

  #joinAllowed$ = this.mqtt.listenFor('bridge/logging').pipe(
    filter(
      (log: any) =>
        log &&
        typeof log.message === 'string' &&
        ['permit_join', 'zh:ember: [stack status] network', 'disabling joining new devices'].some(s =>
          log.message.toLowerCase().includes(s)
        )
    ),
    map(checkJoinAllowed),
    // tap(log => console.log('Join allowed:', log)),
    shareReplay(1) // Cache the latest value
  );
  
  joinAllowed: Signal<boolean> = toSignal(this.#joinAllowed$, { initialValue: false });

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

/**
 * Returns `undefined` for empty, null, or invalid values; otherwise, returns the value itself.
 *
 * The function returns `undefined` if:
 *   - The value is an empty array
 *   - The value is `null`
 *   - The value is an empty object (no own properties)
 *   - The value is a string that is empty or only whitespace
 *   - The value is a number that is `NaN` or `0`
 * Otherwise, it returns the original value.
 *
 * @template T - The type of the input value.
 * @param value - The value to check for emptiness or invalidity.
 * @returns The original value if not empty/invalid, or `undefined` if it is.
 */
export const undefinedWhenEmpty = <T>(value: T): T | undefined => {
  if (Array.isArray(value) && value.length === 0) {
    return undefined;
  }
  if (value === null) {
    return undefined;
  }
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return undefined;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return undefined;
  }
  if (typeof value === 'number' && (isNaN(value) || value === 0)) {
    return undefined;
  }
  return value;
};
