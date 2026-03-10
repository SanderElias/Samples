import type { Signal } from '@angular/core';
import { computed, effect, inject, Injectable, Injector } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { deepEqual } from '@se-ng/signal-utils';
import {
  combineLatest,
  filter,
  map,
  NEVER,
  type Observable,
  of,
  shareReplay,
  startWith
} from 'rxjs';

import { MqttService } from './mqtt.service';
import type { Z2MDevice } from './mqtt.types';
import { MqttDeviceSettingsService } from './mqtt-device-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ZigbeeService {
  mqtt = inject(MqttService);
  #settings = inject(MqttDeviceSettingsService);
  injector = inject(Injector);

  devices: Signal<Z2MDevice[]> = toSignal(
    <any>this.mqtt.listenFor('bridge/devices'),
    <any>{ initialValue: [], debugName: 'ZigbeeServiceDevices' }
  ) as Signal<Z2MDevice[]>;

  deviceSubgroups = computed(
    () => {
      const list = this.devices().map(d => d.friendly_name.split('/'));
      const subGroups: Record<string, string[]> = {};
      for (const dev of list) {
        if (dev.length <= 2) continue;
        const prefix = dev[0].toLowerCase() as 'e&m' | 's&m' | 'zaak' | 'kamp';
        const subGroup = dev[1];
        subGroups[prefix] ??= [];
        if (!subGroups[prefix].includes(subGroup)) {
          subGroups[prefix].push(subGroup);
          subGroups[prefix] = [
            ...subGroups[prefix].sort((a, b) => a.localeCompare(b))
          ];
        }
      }
      // console.log(JSON.stringify({ subGroups }, null, 2));
      return subGroups;
    },
    { debugName: 'DeviceSubGroups', equal: deepEqual }
  );

  getDeviceInfo = (ieeeAddress: Signal<string>) =>
    computed(() => this.#getDevice(ieeeAddress()), { equal: deepEqual });

  getDeviceStatus = (ieeeAddress: Signal<string>) =>
    rxResource({
      params: () => this.#getDevice(ieeeAddress()),
      stream: ({ params }) => {
        if (params && params.friendly_name) {
          return this.mqtt.listenFor(
            `zigbee2mqtt/${params.friendly_name}`
          ) as Observable<Record<string, unknown>>;
        }
        return NEVER as Observable<Record<string, unknown>>;
      },
      injector: this.injector
    });

  getStatus = (topic: string | Signal<string>) =>
    rxResource({
      params: () =>
        undefinedWhenEmpty(typeof topic === 'string' ? topic : topic()),
      stream: ({ params }) =>
        this.mqtt.listenFor(params) as Observable<Record<string, unknown>>,
      injector: this.injector
    });

  getMultipleStatuses = (topics: Signal<string[]>) =>
    rxResource({
      params: () => undefinedWhenEmpty(topics()),
      stream: ({ params }) => {
        if (!params || params.length === 0) {
          return of([]);
        }
        return combineLatest(
          params.map(topic => this.mqtt.listenFor(topic).pipe(startWith(null)))
        ).pipe(
          map(statuses => {
            return statuses.map((status, index) => {
              if (typeof status !== 'object' || status === null) {
                // console.warn(`Invalid status for topic ${params[index]}:`, status);
                return {
                  friendly_name: params[index],
                  ieeeAddress: undefined,
                  power: 0,
                  energy: 0,
                  current: 0
                };
              } else {
                return {
                  friendly_name: params[index],
                  ieeeAddress: <string>status['ieee_address'] ?? undefined,
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
        [
          'permit_join',
          'zh:ember: [stack status] network',
          'disabling joining new devices'
        ].some(s => log.message.toLowerCase().includes(s))
    ),
    map(checkJoinAllowed),
    // tap(log => console.log('Join allowed:', log)),
    shareReplay(1) // Cache the latest value
  );

  joinAllowed: Signal<{
    pairingAllowed: boolean;
    device?: string;
    time?: number;
  }> = toSignal(this.#joinAllowed$, {
    initialValue: { pairingAllowed: false }
  });

  publish = async (
    topic: string,
    payload: Record<string, unknown> | string
  ) => {
    if (typeof payload !== 'string') {
      payload = JSON.stringify(payload);
    }
    const client = await this.mqtt.client;
    return client.publishAsync(topic, <string>payload);
  };

  #getDevice = (ieeeAddress: string) =>
    this.devices().find(
      d => d.ieee_address === ieeeAddress || d.friendly_name === ieeeAddress
    );
}

//Calling Request API: bridge/request/device/rename
export const renameDevice = (from: string, to: string) => ({
  payload: { from, to, homeassistant_rename: true }
});

function checkJoinAllowed(log: Record<string, string>): {
  pairingAllowed: boolean;
  device?: string;
  time?: number;
} {
  const lowerLog = log.message?.toLowerCase();
  const parts = lowerLog?.split(`payload '`);
  if (parts && parts.length > 1) {
    try {
      const json = JSON.parse(parts[1].split(`'`)[0]);
      const time = json?.data?.time ?? 0;
      const device = json?.data?.device ?? 'unknown';
      if (typeof time === 'number' && time > 0) {
        return { pairingAllowed: true, device, time };
      } else {
        return { pairingAllowed: false };
      }
    } catch (error) {
      return { pairingAllowed: false };
    }
  }
  if (lowerLog.includes('open'))
    return { pairingAllowed: true, device: 'unknown', time: 120 };
  // return false for all remaining cases
  return { pairingAllowed: false };
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
