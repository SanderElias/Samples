import {
  afterNextRender,
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  signal,
  type WritableSignal
} from '@angular/core';

import { GaugeComponent } from '../../metered-view/gauge/gauge.component';
import { zigbeePrefixes, type ZigbeePrefixes } from '../mqtt.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { ZigbeeService } from '../zigbee.service';

import { debouncedComputed } from '@se-ng/signal-utils';
import {
  MqttDeviceSettingsService,
  type MqttDeviceSetting
} from '../mqtt-device-settings.service';
import { PowerMeterDialogComponent } from './dialog/power-meter-dialog.component';
import { splitName } from './dialog/split-name';

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
    @if (options()?.allowPowerControl) {
      <se-toggle [value]="isPoweredOn()" (valueChange)="toggle()" />
    }
    <power-meter-dialog [ieeeAddress]="ieeeAddress()" [(show)]="dialogOpen" />
  `,
  styleUrl: './power-meter.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ToggleComponent, PowerMeterDialogComponent, GaugeComponent]
})
export class PowerMeterComponent {
  readonly ieeeAddress = input.required<string>();

  protected readonly z2m = inject(ZigbeeService);
  protected readonly setting = inject(MqttDeviceSettingsService);

  readonly dialogOpen = signal(false, { debugName: 'PowerMeterDialogOpen' });
  readonly optionsRef = this.setting.read(this.ieeeAddress);
  readonly options = this.setting.optionsFromDevResource(this.optionsRef);
  readonly __ = afterRenderEffect(async () => {
    if (this.ieeeAddress() === 'unknown' || !this.ieeeAddress()) return;
    const splitName = this.splitName();
    if (!splitName.name) return;
    const notFound = this.optionsRef.error()?.['status'] === 404;
    if (notFound) {
      console.log('not found, creating default setting');
      await this.setting.create({
        id: this.ieeeAddress(),
        friendlyName: this.friendlyName(),
        maxPower: this.maxUsedPower()
      });
      return;
    }
    if (this.optionsRef.hasValue()) {
      const opt = this.optionsRef.value() as MqttDeviceSetting;
      if (!opt?.id) return;
      if (
        opt.friendlyName !== this.friendlyName() || // update friendly name if it has changed
        (opt.maxPower || 0) < this.maxUsedPower() // update max power if current max is higher than stored max
      ) {
        await this.setting.update({
          ...opt,
          friendlyName: this.friendlyName(),
          maxPower: this.maxUsedPower()
        });
      }
    }
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
  maxUsedPower: WritableSignal<number> = linkedSignal(() => {
    const optionsMax = this.optionsRef.hasValue()
      ? this.optionsRef.value()?.maxPower || 0
      : 0;
    return Math.max(optionsMax, this.currentPower() || 0);
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
    let tries = 0;
    const randomDelay = () => Math.random() * 2000 + 1500; // 1500ms to 3500ms
    const attemptRefresh = () => {
      if (tries >= 15) {
        console.log(`Max refresh attempts reached for ${this.name()}. Giving up.`);
        return; // Give up after 5 tries
      }
      if (!this.deviceLoading()) {
        return;
      }
      tries++;
      this.refresh();
      // console.log(`Attempt ${tries}: Refreshing device status for ${this.name()}`);
      setTimeout(attemptRefresh, randomDelay());
    };
    // trigger initial state fetch
    attemptRefresh();
  });
}

// create function to extract the prefix from the name
export function extractPrefix(name: string): ZigbeePrefixes {
  const match = name.match(new RegExp(`^(${zigbeePrefixes.join('|')})`));
  return match && match[0]
    ? (match[0] as ZigbeePrefixes)
    : ('' as ZigbeePrefixes);
}
