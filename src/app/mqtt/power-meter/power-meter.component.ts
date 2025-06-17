import { afterNextRender, Component, computed, inject, input, linkedSignal } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { ZigbeeService } from '../zigbee.service';
import type { ZigbeePrefixes } from '../mqtt.component';

@Component({
  selector: 'power-meter',
  imports: [ToggleComponent],
  template: `
    <h4>{{ prefix() }}{{ prefix() ? '/' : '' }}{{ name() }} <button (click)="dlg.showModal()">🖉</button></h4>
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
    <dialog #dlg>
      <h4>{{ prefix() }} {{ name() }}</h4>
      <form (submit)="updateName($event)">
        <label>
          <span>indelen bij:</span>
          <select name="prefix" id="prefix" [value]="prefix()">
            <option value="e&m" [selected]="prefix() === 'e&m'">E&M</option>
            <option value="s&m" [selected]="prefix() === 's&m'">S&M</option>
            <option value="zaak" [selected]="prefix() === 'zaak'">Zaak</option>
            <option value="kamp" [selected]="prefix() === 'kamp'">Kamp</option>
            <option value="" [selected]="!prefix()">Geen</option>
          </select>
        </label>
        <label>
          <span>Naam:</span>
          <input type="text" name="name" id="name" [value]="name()" />
        </label>
        <button type="submit" (click)="dlg.close()">Opslaan</button>
        <button type="button" (click)="dlg.close()">Annuleren</button>
      </form>
    </dialog>
  `,
  styleUrl: './power-meter.component.css'
})
export class PowerMeterComponent {
  z2m = inject(ZigbeeService);
  ieeeAddress = input.required<string>();

  #deviceResource = this.z2m.getDeviceStatus(this.ieeeAddress);
  deviceLoading = this.#deviceResource.isLoading;
  deviceStatus = this.#deviceResource.value;
  deviceInfo = this.z2m.getDeviceInfo(this.ieeeAddress);

  #base_name = computed(() => this.deviceInfo()?.friendly_name || this.ieeeAddress() || '');
  name = computed(() => this.#base_name().split('/').pop() || '');
  prefix = linkedSignal(() => {
    const name = this.#base_name();
    const match = name.match(/^(e&m|s&m|zaak|kamp)/);
    return match ? match[0] : ('' as ZigbeePrefixes);
  });
  isPoweredOn = computed(() => this.deviceStatus()?.state === 'ON');

  refresh = () => {
    this.z2m.publish(`zigbee2mqtt/${this.ieeeAddress()}/get`, { state: '' });
  };

  toggle = () => {
    const state = this.isPoweredOn() ? 'OFF' : 'ON';
    console.log(`Toggling power for ${this.ieeeAddress()} to ${state}`);
    this.z2m.publish(`zigbee2mqtt/${this.ieeeAddress()}/set`, { state });
  };

  updateName = (evt: SubmitEvent) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    // @ts-expect-error
    const newName = form.name?.value.trim() || '';
    // @ts-expect-error
    const newPrefix = (form.prefix?.value || '') as ZigbeePrefixes;
    const newBaseName = `${newPrefix.trim()}/${newName.trim()}`.trim();
    if (newPrefix && newName && newBaseName !== this.#base_name()) {
      console.log(`Updating name to ${newPrefix}/${newName}`);
      this.z2m.publish('zigbee2mqtt/bridge/request/device/rename', {
        from: this.#base_name(),
        to: newBaseName,
        homeassistant_rename: true
      })
    }
  };

  _ = afterNextRender(() => {
    // trigger initial state fetch
    this.refresh();
  });
}
