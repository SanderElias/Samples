import {
  afterRenderEffect,
  Component,
  computed,
  inject,
  linkedSignal,
  signal
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { deepEqual } from '@se-ng/signal-utils';
import { EMPTY } from 'rxjs';

import { StackedPerComponent } from '../metered-view/stacked-per/stacked-per.component';

import { PairButtonComponent } from './pair-button/pair-button.component';
import { extractPrefix, PowerMeterComponent } from './power-meter/power-meter.component';
import { PrettyJson } from './pretty-json/pretty-json.component';
import { persistentSignal } from './util/idbstorage';
import { MqttService } from './mqtt.service';
import { ZigbeeService } from './zigbee.service';

export const zigbeePrefixes = ['e&m', 's&m', `zaak`, 'kamp', 'test'] as const;
export type ZigbeePrefixes = (typeof zigbeePrefixes)[number];

@Component({
  selector: 'se-mqtt',
  imports: [PrettyJson, PowerMeterComponent, PairButtonComponent, StackedPerComponent],
  template: `
    <details>
      <summary>Settings</summary>
      <div class="zigbee-prefixes">
        @for (pf of zigbeePrefixes; track $index) {
          <label>
            <input type="checkbox" [checked]="selectedPrefixes().includes(pf)" (change)="checkPf(pf)" />
            {{ pf }}
          </label>
        }
      </div>
      <div class="toolbar">
        <select (change)="selected.set($any($event.target).value)">
          @for (device of deviceList(); track device.name) {
            <option [value]="device.name">{{ device.name }}</option>
          }
        </select>
        <select (change)="filter.set($any($event.target).value)">
          @for (type of deviceTypes(); track type[0]) {
            <option [value]="type[0]">{{ type[1] }}</option>
          }
        </select>
        <label><input #sd type="checkbox" />show details</label>
      </div>
      <se-stacked-per [data]="powerUsage()" />
      @if (sd.checked) {
        <div class="grid">
          <!-- selectedDevice.value()| json }}</code></pre> -->
          <pretty-json [json]="selectedDevice.value()" />
          <pretty-json [json]="selectedDetails()" />
        </div>
      }
    </details>
    <div class="devGrid">
      <se-pair-button [selectedPrefixes]="selectedPrefixes()" />

      @for (device of powerMeters(); track device.ieee_address) {
        <power-meter [ieeeAddress]="device.ieee_address" />
      }
    </div>
  `,
  styleUrl: './mqtt.component.css',
  providers: [MqttService, ZigbeeService]
})
export class MqttComponent {
  readonly #mqtt = inject(MqttService);
  readonly #z2m = inject(ZigbeeService);

  readonly state = signal<Record<string, any>>({});
  readonly cleanState = computed(() => cleanUp(this.state()));
  readonly filter = signal<string | undefined>(undefined);
  readonly devices = this.#z2m.devices;

  readonly selectedPrefixes = persistentSignal<ZigbeePrefixes[]>('defaultSelectedPrefixes', ['e&m', 'kamp']);

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

  readonly deviceList = computed(
    () => {
      const devices = this.devices();
      return devices.map(device => ({ name: device.friendly_name || device.ieee_address })).sort() ?? [];
    },
    { equal: deepEqual }
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

  checkPf = (prefix: ZigbeePrefixes) => {
    const current = this.selectedPrefixes();
    if (current.includes(prefix)) {
      this.selectedPrefixes.set(current.filter(p => p !== prefix));
    } else {
      this.selectedPrefixes.set([...current, prefix]);
    }
  };

  _ = afterRenderEffect(() => {
    this.powerUse(); //
  });

  readonly powerMeters = computed(
    () =>
      this.devices()
        ?.filter(d => d.definition?.exposes?.some(e => e.property === 'power' && e.type === 'numeric'))
        .filter(d => this.selectedPrefixes().some(prefix => d.friendly_name?.startsWith(prefix) || !d.friendly_name?.includes('/')))
        .sort((a, b) => a.friendly_name.localeCompare(b.friendly_name)) ?? []
  );

  devNames = computed(() => {
    const result = this.powerMeters().map(d => d.friendly_name || d.ieee_address);
    return result;
  });

  allStates = this.#z2m.getMultipleStatuses(this.devNames);

  readonly powerUse = computed(() => {
    const allStates = this.allStates.value() ?? [];
    const result: Record<string, { power: number; energy: number; current: number }> = {};
    for (const state of allStates) {
      const prefix = extractPrefix(state.friendly_name);
      result[prefix] ??= { power: 0, energy: 0, current: 0 }; // Initialize with 0
      result[prefix].power += state.power || 0;
      result[prefix].energy += state.energy || 0;
      result[prefix].current += state.current || 0;
    }
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
    return devices?.find(d => d.friendly_name === selected || d.ieee_address === selected);
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

const cleanUp = (obj: Record<string, unknown>, path = ''): any => {
  const { value, ...rest } = obj;
  if (Object.keys(rest).length === 0) return value;
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
      // @ts-expect-error
      return [key, typeof val === 'object' ? cleanUp(val) : val];
    })
  );
};
