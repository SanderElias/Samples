import { afterNextRender, Component, computed, inject, input } from '@angular/core';
import { MqttService } from '../mqtt.service';
import { ZigbeeService } from '../zigbee.service';
import { JsonPipe } from '@angular/common';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'power-meter',
  imports: [JsonPipe, ToggleComponent],
  template: `
    <h4>Power Meter for {{ deviceInfo()?.friendly_name }}</h4>
    power: {{ deviceStatus()?.power }} W<br />
    voltage: {{ deviceStatus()?.voltage }} V<br />
    current: {{ deviceStatus()?.current }} A<br />
    energy: {{ deviceStatus()?.energy }} kWh<br />
    <!-- <input type="checkbox" switch [checked]="isPoweredOn()" (change)="isPoweredOn() ? toggleOff() : toggleOn()" /> -->
    <se-toggle [value]="isPoweredOn()" (valueChange)="toggle()" />

  `,
  styleUrl: './power-meter.component.css'
})
export class PowerMeterComponent {
  z2m = inject(ZigbeeService);
  ieeeAddress = input.required<string>();

  deviceResource = this.z2m.getDeviceStatus(this.ieeeAddress);
  deviceStatus = this.deviceResource.value;
  deviceInfo = this.z2m.getDeviceInfo(this.ieeeAddress);

  name = computed(() => this.deviceInfo()?.friendly_name || this.ieeeAddress());
  isPoweredOn = computed(() => this.deviceStatus()?.state === 'ON');

  toggle = () => {
    const state = this.isPoweredOn() ? 'OFF' : 'ON';
    this.z2m.publish(`zigbee2mqtt/${this.name()}/set`, { state });
  };

  _ = afterNextRender(() => {
    // trigger initial state fetch
    this.z2m.publish(`zigbee2mqtt/${this.name()}/get`, { state: '' });
  });
}
