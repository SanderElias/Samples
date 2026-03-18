import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Injector
} from '@angular/core';
import { debouncedComputed, deepEqual } from '@se-ng/signal-utils';

import { AuthenticadedUserOnlyComponent } from '../authenticaded-user-only/authenticaded-user-only.component';
import { StackedPerComponent } from '../metered-view/stacked-per/stacked-per.component';

import { httpResource } from '@angular/common/http';
import { MqttDeviceSettingsService } from './mqtt-device-settings.service';
import type {
  MqttDeviceOptions,
  MqttDeviceSetting
} from './mqtt-device-settings.types';
import { PairButtonComponent } from './pair-button/pair-button.component';
import {
  extractPrefix,
  PowerMeterComponent
} from './power-meter/power-meter.component';
import {
  type BulkGetResponse,
  type CouchDoc,
  type DeviceStatus,
  type DeviceWithSetting,
  type ParsedDeviceSettings,
  type SearchState
} from './mqtt.component.types';
import { zigbeePrefixes, type ZigbeePrefixes } from './zigbee-prefixes.types';
import { persistentSignal } from './util/idbstorage';
import { undefinedWhenEmpty, ZigbeeService } from './zigbee.service';

import type { HttpResourceRef } from '@angular/common/http';

@Component({
  selector: 'se-mqtt',
  imports: [
    PowerMeterComponent,
    PairButtonComponent,
    StackedPerComponent,
    AuthenticadedUserOnlyComponent
  ],
  templateUrl: './mqtt.component.html',
  styleUrl: './mqtt.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZigbeeService]
})
export class MqttComponent {
  readonly #z2m = inject(ZigbeeService);
  readonly #settings = inject(MqttDeviceSettingsService);

  readonly search = persistentSignal<SearchState>('mqttSearchFilters', {
    searchText: '',
    selectedPrefixes: ['e&m', 'kamp'],
    booleanOptions: [
      {
        name: 'allowPowerControl',
        description: 'aan-uit schakelaar',
        value: undefined
      },
      { name: 'alertWhenOff', description: 'alert when off', value: undefined },
      {
        name: 'alertWhenLost',
        description: 'alert when lost',
        value: undefined
      },
      { name: 'isSubDevice', description: 'sub device', value: undefined }
    ]
  });

  // Debounce the whole search object (text + boolean options)
  readonly searchDebounced = debouncedComputed(this.search, {
    delay: 200
  });

  setSearchText(v: string) {
    this.search.update(current => ({ ...current, searchText: v }));
  }

  setBooleanOption(name: string, val?: boolean) {
    this.search.update(current => ({
      ...current,
      booleanOptions: current.booleanOptions.map(o =>
        o.name === name ? { ...o, value: val } : o
      )
    }));
  }

  readonly selectedPrefixes = computed(() => this.search().selectedPrefixes);

  readonly zigbeePrefixes = zigbeePrefixes;

  #matchesSelectedPrefix(
    friendlyName: string | undefined,
    selectedPrefixes: ZigbeePrefixes[]
  ) {
    if (selectedPrefixes.includes('Alles')) return true;
    if (!friendlyName?.includes('/')) return true;
    return selectedPrefixes.some(prefix => friendlyName.startsWith(prefix));
  }

  togglePrefixSelection = (prefix: ZigbeePrefixes) => {
    this.search.update(current => {
      const selectedPrefixes = current.selectedPrefixes.includes(prefix)
        ? current.selectedPrefixes.filter(p => p !== prefix)
        : [...current.selectedPrefixes, prefix];

      return { ...current, selectedPrefixes };
    });
  };

  readonly powerMeters = computed(
    () =>
      this.#z2m.devices()
        ?.filter(d =>
          d.definition?.exposes?.some(
            e => e.property === 'power' && e.type === 'numeric'
          )
        )
        .filter(d => !!d.ieee_address)
        .sort((a, b) => a.friendly_name.localeCompare(b.friendly_name)) ?? []
  );

  // readonly deviceTypes = computed(
  //   () =>
  //     this.devices()
  //       ?.reduce(
  //         (acc, device) => {
  //           const model = device.definition?.model || '';
  //           if (model && !acc.find(t => t[0] === model)) {
  //             acc.push([model, device.definition?.description || '']);
  //           }
  //           return acc;
  //         },
  //         [] as [string, string][]
  //       )
  //       .sort() ?? [],
  //   { equal: deepEqual }
  // );

  readonly powerMetersFiltered = computed(() => {
    const devices = this.devicesWithSettings() ?? [];
    const searchState = this.searchDebounced();
    const searchText = (searchState.searchText ?? '')
      .toString()
      .trim()
      .toLowerCase();
    const requiredBooleanOptions = (searchState.booleanOptions ?? [])
      .filter(o => o.value === true)
      .map(o => o.name);

    return devices.filter(device => {
      const friendlyNameLower = String(device.friendly_name ?? '').toLowerCase();

      if (
        !this.#matchesSelectedPrefix(
          device.friendly_name,
          searchState.selectedPrefixes
        )
      )
        return false;

      if (requiredBooleanOptions.some(name => device.settings[name] !== true))
        return false;

      if (!searchText) return true;
      return friendlyNameLower.includes(searchText);
    });
  });

  readonly deviceStatuses = this.#z2m.getMultipleStatuses(
    computed(() =>
      this.powerMeters().map(d => d.friendly_name || (d.ieee_address as string))
    )
  );

  // CouchDB http resource: batch_get request for all devices in `powerMeters`.
  // Use `_bulk_get` with per-document `rev` where available so CouchDB can return specific revisions.
  readonly deviceSettings: HttpResourceRef<ParsedDeviceSettings | undefined> =
    httpResource(
      () => {
        const keys = this.powerMeters()
          .map(d => d.ieee_address)
          .filter(Boolean) as string[];
        if (undefinedWhenEmpty(keys) === undefined) return undefined;
        const list = this.#settings.list() ?? [];
        if (undefinedWhenEmpty(list) === undefined) return undefined;
        const docs = keys.map(k => {
          const rev = list.find(i => i[0] === k)?.[1];
          return rev ? { id: k, rev } : { id: k };
        });
        return {
          url: `${this.#settings.baseUrl()}/_bulk_get`,
          method: 'POST',
          body: { docs },
          credentials: 'include',
          mode: 'cors'
        } as any;
      },
      {
        injector: inject(Injector),
        debugName: 'powerMetersBulkGet',
        defaultValue: {},
        parse: (value: unknown): ParsedDeviceSettings => {
          const response = value as BulkGetResponse;
          const map: ParsedDeviceSettings = {};
          for (const r of response?.results ?? []) {
            const id = r.id?.toString().toLowerCase();
            const ok = r.docs?.[0]?.ok as CouchDoc | undefined;
            if (!id || !ok) continue;
            map[id] = this.#settings.extractedOptions(ok);
          }
          return map;
        }
      }
    );

  // Combine runtime statuses with device settings (attach `settings` per device)
  readonly devicesWithSettings = computed(
    (): DeviceWithSetting[] => {
      const devices = this.powerMeters();
      const statuses = (this.deviceStatuses.value() ?? []) as DeviceStatus[];
      const settingsById = this.deviceSettings.value() ?? {};
      const statusMapByFriendlyName = new Map<string, DeviceStatus>();

      for (const s of statuses) {
        const name = s.friendly_name?.toLowerCase();
        if (name) statusMapByFriendlyName.set(name, s);
      }

      return devices.map(device => {
        const ieee = device.ieee_address.toLowerCase();
        const status = statusMapByFriendlyName.get(
          device.friendly_name?.toLowerCase()
        );
        const settings = settingsById[ieee] ?? this.#settings.defaultOptions;

        return {
          friendly_name:
            status?.friendly_name ??
            device.friendly_name ??
            device.ieee_address,
          ieeeAddress: device.ieee_address,
          power: status?.power ?? 0,
          energy: status?.energy ?? 0,
          current: status?.current ?? 0,
          settings
        } as DeviceWithSetting;
      });
    },
    { equal: deepEqual }
  );

  readonly powerUseByPrefix = computed(() => {
    const selectedDevices = this.devicesWithSettings() ?? [];
    const result: Record<
      string,
      { power: number; energy: number; current: number }
    > = {};
    for (const state of selectedDevices) {
      if (state.settings?.isSubDevice) continue; // Skip sub-devices in aggregate calculations
      const prefix = extractPrefix(state.friendly_name);
      result[prefix] ??= { power: 0, energy: 0, current: 0 }; // Initialize with 0
      result[prefix].power += Math.round(state.power) || 0;
      result[prefix].energy += Math.round(state.energy) || 0;
      result[prefix].current += Math.round(state.current) || 0;
    }
    return result;
  }, { equal: deepEqual });

  readonly powerUsage = computed(() =>
    Object.entries(this.powerUseByPrefix()).map(([prefix, usage]) => ({
      name: prefix,
      value: usage.power
    }))
  );
}
