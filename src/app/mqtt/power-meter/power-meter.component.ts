import { afterNextRender, Component, computed, inject, input, signal } from '@angular/core';
import { zigbeePrefixes, type ZigbeePrefixes } from '../mqtt.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { ZigbeeService } from '../zigbee.service';
import { PowerMeterDialogComponent } from './dialog/power-meter-dialog.component';

@Component({
  selector: 'power-meter',
  template: `
    <h4>{{ prefix() }}{{ prefix() ? '/' : '' }}{{ name() }} <button (click)="dialogOpen.set(true)">🖉</button></h4>
    @if (!deviceLoading()) {
      power: {{ deviceStatus()?.power }} W<br />
      voltage: {{ deviceStatus()?.voltage }} V<br />
      current: {{ deviceStatus()?.current }} A<br />
      energy: {{ deviceStatus()?.energy }} kWh<br />
      <!-- <input type="checkbox" switch [checked]="isPoweredOn()" (change)="isPoweredOn() ? toggleOff() : toggleOn()" /> -->
    } @else {
      <span>Loading...</span><br />
      <button (click)="refresh()">Refresh</button>
    }
    @if (!name().includes('Computer')) {
      <se-toggle [value]="isPoweredOn()" (valueChange)="toggle()" />
    }
    <power-meter-dialog [ieeeAddress]="ieeeAddress()" [(open)]="dialogOpen" />
  `,
  styleUrl: './power-meter.component.css',
  imports: [ToggleComponent, PowerMeterDialogComponent]
})
export class PowerMeterComponent {
  readonly dialogOpen = signal(false);
  protected readonly z2m = inject(ZigbeeService);
  readonly ieeeAddress = input.required<string>();
  readonly #deviceResource = this.z2m.getDeviceStatus(this.ieeeAddress);
  readonly deviceLoading = this.#deviceResource.isLoading;
  readonly deviceStatus = this.#deviceResource.value;
  readonly #deviceInfo = this.z2m.getDeviceInfo(this.ieeeAddress);

  readonly name = computed(() => (this.#deviceInfo()?.friendly_name || this.ieeeAddress()).split('/').pop() || '');
  readonly prefix = computed(() => extractPrefix(this.#deviceInfo()?.friendly_name || this.ieeeAddress()));
  readonly isPoweredOn = computed(() => this.deviceStatus()?.state === 'ON');

  refresh = () => {
    this.z2m.publish(`zigbee2mqtt/${this.ieeeAddress()}/get`, { state: '' });
  };

  toggle = () => {
    const state = this.isPoweredOn() ? 'OFF' : 'ON';
    this.z2m.publish(`zigbee2mqtt/${this.ieeeAddress()}/set`, { state });
  };

  readonly _ = afterNextRender(() => {
    // trigger initial state fetch
    this.refresh();
  });
}

// create function to extract the prefix from the name
export function extractPrefix(name: string): ZigbeePrefixes {
  const match = name.match(new RegExp(`^(${zigbeePrefixes.join('|')})`));
  return match && match[0] ? (match[0] as ZigbeePrefixes) : ('' as ZigbeePrefixes);
}
