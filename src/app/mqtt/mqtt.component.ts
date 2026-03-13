import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Injector,
  linkedSignal,
  signal
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { debouncedComputed, deepEqual } from '@se-ng/signal-utils';
import { EMPTY } from 'rxjs';

import { AuthenticadedUserOnlyComponent } from '../authenticaded-user-only/authenticaded-user-only.component';
import { StackedPerComponent } from '../metered-view/stacked-per/stacked-per.component';

import { httpResource } from '@angular/common/http';
import {
  MqttDeviceSettingsService,
  type MqttDeviceOptions,
  type MqttDeviceSetting
} from './mqtt-device-settings.service';
import { MqttService } from './mqtt.service';
import { PairButtonComponent } from './pair-button/pair-button.component';
import {
  extractPrefix,
  PowerMeterComponent
} from './power-meter/power-meter.component';
import { PrettyJson } from './pretty-json/pretty-json.component';
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

// Status shape returned by `getMultipleStatuses`
interface DeviceStatus {
  friendly_name: string;
  ieeeAddress?: string;
  power: number;
  energy: number;
  current: number;
}

// Combined shape returned to the UI: status + minimal setting
interface DeviceWithSetting extends DeviceStatus {
  settings: MqttDeviceOptions;
}

export const zigbeePrefixes = ['e&m', 's&m', `zaak`, 'kamp', 'Alles'] as const;
export type ZigbeePrefixes = (typeof zigbeePrefixes)[number];

@Component({
  selector: 'se-mqtt',
  imports: [
    PrettyJson,
    PowerMeterComponent,
    PairButtonComponent,
    StackedPerComponent,
    AuthenticadedUserOnlyComponent
  ],
  templateUrl: './mqtt.component.html',
  styleUrl: './mqtt.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MqttService, ZigbeeService]
})
export class MqttComponent {
  readonly #mqtt = inject(MqttService);
  readonly #z2m = inject(ZigbeeService);
  readonly #settings = inject(MqttDeviceSettingsService);

  readonly search = signal<{
    searchText: string;
    booleanOptions: {
      name: string;
      description?: string;
      value?: boolean | undefined;
    }[];
  }>({
    searchText: '',
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
      { name: 'subGroup', description: 'sub device', value: undefined }
    ]
  });

  // Debounce the whole search object (text + boolean options)
  readonly searchDebounced = debouncedComputed(this.search, {
    delay: 200
  });

  readonly booleanOptionsMap = computed(
    () =>
      Object.fromEntries(
        this.search().booleanOptions.map(o => [o.name, o.value])
      ) as Record<string, boolean | undefined>
  );

  setSearchText(v: string) {
    this.search.set({ ...this.search(), searchText: v });
  }

  setBooleanOption(name: string, val?: boolean) {
    const opts = this.search().booleanOptions.map(o =>
      o.name === name ? { ...o, value: val } : o
    );
    this.search.set({ ...this.search(), booleanOptions: opts });
  }
  readonly filter = signal<string | undefined>(undefined);
  readonly devices = this.#z2m.devices;

  readonly selectedPrefixes = persistentSignal<ZigbeePrefixes[]>(
    'defaultSelectedPrefixes',
    ['e&m', 'kamp']
  );

  readonly zigbeePrefixes = zigbeePrefixes;

  readonly selected = linkedSignal<string | undefined>(() => {
    const devices = this.devices();
    const filter = this.filter();
    if (!devices?.length) return undefined;
    if (filter) {
      const device = devices.find(d => d.definition?.model === filter);
      if (device) return device.friendly_name || device.ieee_address;
    }
    return undefined;
  });

  checkPf = (prefix: ZigbeePrefixes) => {
    const current = this.selectedPrefixes();
    if (current.includes(prefix)) {
      this.selectedPrefixes.set(current.filter(p => p !== prefix));
    } else {
      this.selectedPrefixes.set([...current, prefix]);
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
        .filter(d =>
          this.selectedPrefixes().includes('Alles')
            ? true
            : this.selectedPrefixes().some(
                prefix =>
                  d.friendly_name?.startsWith(prefix) ||
                  !d.friendly_name?.includes('/')
              )
        )
        .sort((a, b) => a.friendly_name.localeCompare(b.friendly_name)) ?? []
  );

  readonly deviceTypes = computed(
    () =>
      this.devices()
        ?.reduce(
          (acc, device) => {
            const model = device.definition?.model || '';
            if (model && !acc.find(t => t[0] === model)) {
              acc.push([model, device.definition?.description || '']);
            }
            return acc;
          },
          [] as [string, string][]
        )
        .sort() ?? [],
    { equal: deepEqual }
  );

  readonly deviceList = computed(
    () => {
      const devices = this.devices();
      return (
        devices
          .map(device => ({
            name: device.friendly_name || device.ieee_address
          }))
          .sort((a, b) => a.name.localeCompare(b.name)) ?? []
      );
    },
    { equal: deepEqual }
  );

  readonly powerMetersFiltered = computed(() => {
    const list = this.powerMeters();
    const q = (this.searchDebounced()?.searchText ?? '')
      .toString()
      .trim()
      .toLowerCase();

    // Build a settings map from devicesWithSettings (already attaches parsed settings)
    const settingsMap = new Map<string, any>();
    const withSettings = this.devicesWithSettings() ?? [];
    for (const s of withSettings) {
      const key = (s.ieeeAddress ?? s.friendly_name)?.toString().toLowerCase();
      if (key) settingsMap.set(key, s.settings);
      const fname = s.friendly_name?.toString().toLowerCase();
      if (fname) settingsMap.set(fname, s.settings);
    }

    // Use debounced boolean options so toggles are respected after debounce
    const debounced = this.searchDebounced() ?? { booleanOptions: [] };
    const opts = Object.fromEntries(
      (debounced.booleanOptions ?? []).map((o: any) => [o.name, o.value])
    ) as Record<string, boolean | undefined>;
    const needAllow = opts.allowPowerControl === true;
    const needAlertOff = opts.alertWhenOff === true;
    const needAlertLost = opts.alertWhenLost === true;
    const needSubGroup = opts.subGroup === true;

    return list.filter(d => {
      const ieee = String(d.ieee_address ?? '').toLowerCase();
      const fname = String(d.friendly_name ?? '').toLowerCase();
      const settings = settingsMap.get(ieee) ?? settingsMap.get(fname);

      if (needAllow && !(settings && settings.allowPowerControl === true))
        return false;
      if (needAlertOff && !(settings && settings.alertWhenOff === true))
        return false;
      if (needAlertLost && !(settings && settings.alertWhenLost === true))
        return false;
      if (needSubGroup && !(settings && settings.isSubDevice === true))
        return false;

      if (!q) return true;
      return fname.includes(q);
    });
  });

  devNames = computed(() => {
    const result = this.powerMeters().map(
      d => d.friendly_name || d.ieee_address
    );
    return result;
  });

  allStates = this.#z2m.getMultipleStatuses(this.devNames);

  // CouchDB http resource: batch_get request for all devices in `powerMeters`.
  // Use `_bulk_get` with per-document `rev` where available so CouchDB can return specific revisions.
  readonly deviceSettings: HttpResourceRef<BulkGetResponse | undefined> =
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
      { injector: inject(Injector), debugName: 'powerMetersBulkGet' }
    );

  // Combine runtime statuses with device settings (attach `settings` per device)
  readonly devicesWithSettings = computed(
    (): DeviceWithSetting[] => {
      const statuses = (this.allStates.value() ?? []) as DeviceStatus[];
      const bulk = this.deviceSettings.value();
      const settingsMap = new Map<string, MqttDeviceOptions>();
      if (bulk?.results) {
        for (const r of bulk.results) {
          const id = r.id?.toString().toLowerCase();
          const firstDoc = r.docs?.[0];
          const ok = firstDoc?.ok as CouchDoc | undefined;
          if (id && ok)
            settingsMap.set(id, this.#settings.extractedOptions(ok));
        }
      }
      return statuses.map(s => {
        let rawKey = s.ieeeAddress ?? s.friendly_name;
        if (!s.ieeeAddress) {
          const dev = this.devices()?.find(
            d => d.friendly_name === s.friendly_name
          );
          if (dev?.ieee_address) rawKey = dev.ieee_address;
        }
        const key = rawKey?.toString().toLowerCase();
        return {
          ...s,
          settings:
            (key && settingsMap.get(key)) ?? this.#settings.defaultOptions
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

  readonly selectedDetails = computed(() => {
    const devices = this.devices();
    const selected = this.selected();
    if (!selected) return undefined;
    return devices?.find(
      d => d.friendly_name === selected || d.ieee_address === selected
    );
  });

  readonly selectedDevice = rxResource({
    params: this.selected,
    stream: args => {
      const device = args.params;
      if (!device) return EMPTY;
      return this.#mqtt.listenFor(device);
    }
  });
}
