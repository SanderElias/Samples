import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { EMPTY } from 'rxjs';
import { deepEqual } from '../../utils/objects/deep-equal';
import { MqttService, type Z2MDevice } from './mqtt.service';
import { PairButtonComponent } from "./pair-button/pair-button.component";
import { PowerMeterComponent } from './power-meter/power-meter.component';
import { PrettyJson } from './pretty-json/pretty-json.component';
import { ZigbeeService } from './zigbee.service';

export const zigbeePrefixes = ['e&m', 's&m', `zaak`, 'kamp', 'test'] as const;
export type ZigbeePrefixes = (typeof zigbeePrefixes)[number];

@Component({
  selector: 'se-mqtt',
  imports: [PrettyJson, PowerMeterComponent,  PairButtonComponent],
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
  mqtt = inject(MqttService);
  z2m = inject(ZigbeeService);

  state = signal<Record<string, any>>({});
  cleanState = computed(() => cleanUp(this.state()));
  selected = linkedSignal<string | undefined>((...args) => {
    const devices = this.devices() as unknown as Z2MDevice[];
    const filter = this.filter();
    if (!devices || devices.length === 0) return undefined;
    if (filter) {
      const device = devices.find(d => d.definition?.model === filter);
      if (device) {
        return device.friendly_name || device.ieee_address;
      }
    }
    return undefined;
  }); // selected device
  filter = signal<string | undefined>(undefined);
  deviceList = computed(
    () => {
      const devices = this.devices() as unknown as Z2MDevice[];
      const filter = this.filter();
      return devices
        ?.filter(d => (filter ? d.definition?.model === filter : true))
        .map(device => {
          return { name: device.friendly_name || device.ieee_address };
        })
        .sort();
    },
    { equal: deepEqual }
  );


  deviceTypes = computed(
    () => {
      const devices = this.devices() as unknown as Z2MDevice[];
      const list = devices
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
        .sort();
      return list;
    },
    { equal: deepEqual }
  );

  powerMeters = computed(() => {
    const devices = this.devices() as unknown as Z2MDevice[];
    return devices
      ?.filter(d => d.definition?.exposes?.some(e => e.property === 'power' && e.type === 'numeric'))
      .sort((a, b) => a.friendly_name.localeCompare(b.friendly_name));
  });

  selectedDetails = computed(() => {
    const devices = this.devices() as unknown as Z2MDevice[];
    const selected = this.selected();
    if (!selected) return undefined;
    const device = devices?.find(d => d.friendly_name === selected || d.ieee_address === selected);
    if (!device) return undefined;
    return device;
  });

  devices = this.z2m.devices;
  selectedDevice = rxResource({
    params: this.selected,
    stream: args => {
      const device = args.params;
      if (!device) return EMPTY;
      console.log('selectedDevice', device);
      return this.mqtt.listenFor(device);
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
