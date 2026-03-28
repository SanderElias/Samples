import {
  afterNextRender,
  afterRenderEffect,
  Component,
  computed,
  inject,
  input,
  signal,
  type WritableSignal,
  ChangeDetectionStrategy
} from '@angular/core';

import { GaugeComponent } from '../../metered-view/gauge/gauge.component';
import { type ZigbeePrefixes, zigbeePrefixes } from '../mqtt.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { persistentLinkedSignal } from '../util/idbstorage';
import { ZigbeeService } from '../zigbee.service';

import { PowerMeterDialogComponent } from './dialog/power-meter-dialog.component';
import { splitName } from './dialog/split-name';
import {
  MqttDeviceSettingsService,
  type MqttDeviceSetting
} from '../mqtt-device-settings.service';

@Component({
  selector: 'power-meter',
  template: `
    <h5 (click)="dialogOpen.set(true)">
      {{ name() }}
      <svg role="img" aria-label="Pencil">
        <use href="#icon-pencil"></use>
      </svg>
    </h5>
    @if (!deviceLoading()) {
      <se-gauge [value]="currentPower()" [maxVal]="maxUsedPower()" />
      <ul>
        <li>
          <span>group:</span><span>{{ splitName().prefix }}</span>
        </li>
        @if (splitName().subGroup) {
          <li>
            <span>subgroup:</span><span>{{ splitName().subGroup }}</span>
          </li>
        }
        <li>
          <span>power:</span><span>{{ currentPower() }} W</span>
        </li>
        <li>
          <span>voltage:</span><span>{{ deviceStatus()?.voltage }} V</span>
        </li>
        <li>
          <span>current:</span><span>{{ deviceStatus()?.current }} A</span>
        </li>
        <li>
          <span>energy:</span><span>{{ deviceStatus()?.energy }} kWh</span>
        </li>
      </ul>
      <!-- <input type="checkbox" switch [checked]="isPoweredOn()" (change)="isPoweredOn() ? toggleOff() : toggleOn()" /> -->
    } @else {
      <span>Loading...</span><br />
      <button (click)="refresh()">Refresh</button>
    }
    @if (!name().includes('Computer')) {
      <se-toggle [value]="isPoweredOn()" (valueChange)="toggle()" />
    }
    <power-meter-dialog [ieeeAddress]="ieeeAddress()" [(show)]="dialogOpen" />
  `,
  styleUrl: './power-meter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToggleComponent, PowerMeterDialogComponent, GaugeComponent]
})
export class PowerMeterComponent {
  readonly ieeeAddress = input.required<string>();

  protected readonly z2m = inject(ZigbeeService);
  protected readonly setting = inject(MqttDeviceSettingsService);

  readonly dialogOpen = signal(false, { debugName: 'PowerMeterDialogOpen' });
  readonly options = this.setting.read(this.ieeeAddress);
  readonly __ = afterRenderEffect(async () => {
    if (this.ieeeAddress() === 'unknown' || !this.ieeeAddress()) return;
    const splitName = this.splitName();
    const currentPower = this.currentPower();
    if (!splitName.name) return;
    if (currentPower > this.maxUsedPower()) {
      this.maxUsedPower.set(currentPower);
    }
    const notFound = this.options.error()?.['status'] === 404;
    if (notFound) {
      console.log('not found, creating default setting');
      await this.setting.create({
        id: this.ieeeAddress(),
        friendlyName: this.friendlyName(),
        maxPower: this.maxUsedPower()
      });
      return;
    }
    if (this.options.hasValue()) {
      const opt = this.options.value() as MqttDeviceSetting;
      if (
        opt.friendlyName !== this.friendlyName() ||
        (opt.maxPower || 0) < this.maxUsedPower()
      ) {
        console.log('friendly name changed, updating setting');
        await this.setting.update({
          ...opt,
          friendlyName: this.friendlyName(),
          maxPower: this.maxUsedPower()
        });
      }
    }
    // console.log(this.options.hasValue() && this.options.value());
  });

  readonly #deviceResource = this.z2m.getDeviceStatus(this.ieeeAddress);
  readonly deviceLoading = this.#deviceResource.isLoading;
  readonly deviceStatus = this.#deviceResource.value;
  readonly #deviceInfo = this.z2m.getDeviceInfo(this.ieeeAddress);
  readonly currentPower = computed(
    () => <number | undefined>this.deviceStatus()?.power || 0,
    {
      debugName: 'CurrentPower'
    }
  );
  maxUsedPower: WritableSignal<number> = signal(0, {
    debugName: 'MaxUsedPower'
  });
  readonly friendlyName = computed(
    () => this.#deviceInfo()?.friendly_name || this.ieeeAddress()
  );
  readonly splitName = computed(() => splitName(this.friendlyName()));

  readonly name = computed(() => this.splitName().name);
  readonly prefix = computed(() => this.splitName().prefix);
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
  return match && match[0]
    ? (match[0] as ZigbeePrefixes)
    : ('' as ZigbeePrefixes);
}
