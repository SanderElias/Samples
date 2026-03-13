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
import {
  MqttDeviceSettingsService,
  type MqttDeviceOptions,
  type MqttDeviceSetting
} from './mqtt-device-settings.service';
import { PairButtonComponent } from './pair-button/pair-button.component';
import {
  extractPrefix,
  PowerMeterComponent
} from './power-meter/power-meter.component';
import { persistentSignal } from './util/idbstorage';
import { undefinedWhenEmpty, ZigbeeService } from './zigbee.service';

import type { HttpResourceRef } from '@angular/common/http';

// Types for CouchDB `_bulk_get` response for mqtt device docs
// Each `docs` entry can be `{ ok: <doc> }` or contain `missing`/`error`.
// CouchDB `_bulk_get` types matching the example response
type CouchDoc = MqttDeviceSetting & { _id?: string; _rev?: string };

interface BulkGetDoc {
  ok?: CouchDoc;
  missing?: boolean;
  error?: { id?: string; rev?: string; reason?: string } | any;
}

interface BulkGetResult {
  id: string;
  docs: BulkGetDoc[];
}

type BulkGetResponse = { results?: BulkGetResult[] };
type ParsedDeviceSettings = Record<string, MqttDeviceOptions>;

// Status shape returned by `getMultipleStatuses`
interface DeviceStatus {
  friendly_name: string;
  ieeeAddress: string;
  power: number;
  energy: number;
  current: number;
}

// Combined shape returned to the UI: status + minimal setting
interface DeviceWithSetting extends DeviceStatus {
  ieeeAddress: string;
  settings: MqttDeviceOptions;
}

interface SearchState {
  searchText: string;
  selectedPrefixes: ZigbeePrefixes[];
  booleanOptions: {
    name:
      | 'allowPowerControl'
      | 'alertWhenOff'
      | 'alertWhenLost'
      | 'isSubDevice';
    description?: string;
    value?: boolean | undefined;
  }[];
}

export const zigbeePrefixes = ['e&m', 's&m', `zaak`, 'kamp', 'Alles'] as const;
export type ZigbeePrefixes = (typeof zigbeePrefixes)[number];

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
    this.search.set({ ...this.search(), searchText: v });
  }

  setBooleanOption(name: string, val?: boolean) {
    const opts = this.search().booleanOptions.map(o =>
      o.name === name ? { ...o, value: val } : o
    );
    this.search.set({ ...this.search(), booleanOptions: opts });
  }

  readonly selectedPrefixes = computed(() => this.search().selectedPrefixes);
  readonly devices = this.#z2m.devices;

  readonly zigbeePrefixes = zigbeePrefixes;

  #matchesSelectedPrefix(
    friendlyName: string | undefined,
    selectedPrefixes: ZigbeePrefixes[]
  ) {
    if (selectedPrefixes.includes('Alles')) return true;
    if (!friendlyName?.includes('/')) return true;
    return selectedPrefixes.some(prefix => friendlyName.startsWith(prefix));
  }

  checkPf = (prefix: ZigbeePrefixes) => {
    const current = this.search().selectedPrefixes;
    if (current.includes(prefix)) {
      this.search.set({
        ...this.search(),
        selectedPrefixes: current.filter(p => p !== prefix)
      });
    } else {
      this.search.set({
        ...this.search(),
        selectedPrefixes: [...current, prefix]
      });
    }
  };

  readonly powerMeters = computed(
    () =>
      this.devices()
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
    const list = this.devicesWithSettings() ?? [];
    const search = this.searchDebounced();
    const selectedPrefixes = search.selectedPrefixes;
    const searchText = (search.searchText ?? '').toString().trim().toLowerCase();
    const activeBooleanFilters = (search.booleanOptions ?? [])
      .filter(o => o.value === true)
      .map(o => o.name);

    console.log(activeBooleanFilters);

    return list.filter(device => {
      const fname = String(device.friendly_name ?? '').toLowerCase();
      const settings = device.settings;

      if (!this.#matchesSelectedPrefix(device.friendly_name, selectedPrefixes))
        return false;

      if (activeBooleanFilters.some(name => settings[name] !== true))
        return false;

      if (!searchText) return true;
      return fname.includes(searchText);
    });
  });

  devNames = computed(() => {
    const result = this.powerMeters().map(d => d.ieee_address as string);
    return result;
  });

  allStates = this.#z2m.getMultipleStatuses(this.devNames);

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
      const statuses = (this.allStates.value() ?? []) as DeviceStatus[];
      const settingsById = this.deviceSettings.value() ?? {};
      const statusMap = new Map<string, DeviceStatus>();

      for (const s of statuses) {
        const ieee = s.ieeeAddress.toLowerCase();
        if (ieee) statusMap.set(ieee, s);
      }

      return devices.map(device => {
        const ieee = device.ieee_address.toLowerCase();
        const status = statusMap.get(ieee);
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

  readonly powerUse = computed(() => {
    const selectedDevices = this.devicesWithSettings() ?? [];
    const result: Record<
      string,
      { power: number; energy: number; current: number }
    > = {};
    for (const state of selectedDevices) {
      if (state.settings?.isSubDevice) continue; // Skip sub-devices in aggregate calculations
      const prefix = extractPrefix(state.friendly_name);
      result[prefix] ??= { power: 0, energy: 0, current: 0 }; // Initialize with 0
      result[prefix].power += state.power || 0;
      result[prefix].energy += state.energy || 0;
      result[prefix].current += state.current || 0;
    }
    console.table(result);
    return result;
  });

  readonly powerUsage = computed(() => {
    const powerUse = this.powerUse();
    return Object.entries(powerUse).map(([prefix, usage]) => ({
      name: prefix,
      value: usage.power
    }));
  });
}
