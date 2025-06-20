import { afterRenderEffect, Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { EMPTY } from 'rxjs';
import { deepEqual } from '../../utils/objects/deep-equal';
import { MqttService } from './mqtt.service';
import { PairButtonComponent } from './pair-button/pair-button.component';
import { PowerMeterComponent } from './power-meter/power-meter.component';
import { PrettyJson } from './pretty-json/pretty-json.component';
import { ZigbeeService } from './zigbee.service';

export const zigbeePrefixes = ['e&m', 's&m', `zaak`, 'kamp', 'test'] as const;
export type ZigbeePrefixes = (typeof zigbeePrefixes)[number];

@Component({
  selector: 'se-mqtt',
  imports: [PrettyJson, PowerMeterComponent, PairButtonComponent],
  template: `
    <div class="devGrid">
      <se-pair-button />

      @for (device of powerMeters(); track device.ieee_address) {
        <power-meter [ieeeAddress]="device.ieee_address" />
      }
    </div>
    <details>
      <summary>Select Device</summary>

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
      {{ selected() }}
      <div class="grid">
        <!-- selectedDevice.value()| json }}</code></pre> -->
        <pretty-json [json]="selectedDevice.value()" />
        <pretty-json [json]="selectedDetails()" />
      </div>
    </details>
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
  readonly selectedPrefixes = signal<ZigbeePrefixes[]>(['e&m', 'kamp']);

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
      return (
        devices
          .map(device => ({ name: device.friendly_name || device.ieee_address }))
          .sort() ?? []
      );
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

  _ = afterRenderEffect(() => {
    const devices = this.devices();
    const types: Map<string, number> = new Map();
    const table: any[] = [];

    for (const device of devices || []) {
      const fn = device.friendly_name || device.ieee_address;
      for (const e of device.definition?.exposes || []) {
        const type = e.type || 'unknown';
        if (types.has(type)) {
          types.set(type, types.get(type)! + 1);
        } else {
          types.set(type, 1);
        }
        if (type === 'switch') {
          for (const f of e.features || []) {
            if (f.property === 'state') {
              table.push({
                friendly_name: fn,
                property: e.property,
                type: e.type,
                feature: f.property,
              });
            } else {
              table.push({
                friendly_name: fn,
                property: e.property,
                type: e.type,
                feature: f.property
              });
            }
          }
        }
        if (e.property === 'power') {
          console.log(`Power Meter: ${fn}, Exposed Property: ${e.property}, Type: ${e.type}`);
        }
      }
    }
    console.table(Array.from(types).sort());
    console.table(table);
  });

  readonly powerMeters = computed(
    () =>
      this.devices()
        ?.filter(d => d.definition?.exposes?.some(e => e.property === 'power' && e.type === 'numeric'))
        // .filter(d => this.selectedPrefixes().some(prefix => d.friendly_name?.startsWith(prefix) || !d.friendly_name?.includes('/')))
        .sort((a, b) => a.friendly_name.localeCompare(b.friendly_name)) ?? []
  );

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
