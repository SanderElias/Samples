import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZigbeeService } from './zigbee.service';
import type { Z2MDevice } from './mqtt.types';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Zigbee Devices</h2>
    <table>
      <thead>
        <tr>
          <th>Friendly Name</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let device of devices()">
          <td>{{ device.friendly_name }}</td>
          <td>{{ device.definition?.description }}</td>
          <td>{{ exposes(device) }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class DeviceListComponent {
  private zigbee = inject(ZigbeeService);
  devices = computed(() =>
    this.zigbee
      .devices()
      .filter(d => d.definition?.options?.some(o => o.name === 'state_action'))
      .sort((a, b) => a.friendly_name.localeCompare(b.friendly_name))
  );

  exposes(d: Z2MDevice): string[] {
    console.dir(d.definition?.options);
    return d.definition?.options?.map(e => e.name ?? 'unknown') || [];
  }
}
