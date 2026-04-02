import type { ElementRef, Signal } from '@angular/core';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  model,
  signal,
  viewChild
} from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';

import { MqttDeviceSettingsService } from '../../mqtt-device-settings.service';
import { ZigbeeService } from '../../zigbee.service';
import { zigbeePrefixes } from '../../zigbee-prefixes.types';

import { splitName } from './split-name';

@Component({
  selector: 'power-meter-dialog',
  standalone: true,
  styleUrl: './power-meter-dialog.component.css',
  imports: [FormField, FormRoot],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <dialog #dlg>
      <h4>{{ model().prefix }} {{ model().name }}</h4>
      <form [formRoot]="fd">
        <label>
          <span>indelen bij:</span>
          <select id="prefix" [formField]="fd.prefix">
            @for (pf of zigbeePrefixes; track $index) {
              <option value="{{ pf }}" [selected]="model().prefix === pf">
                {{ pf }}
              </option>
            }
            <option value="" [selected]="!model().prefix">Geen</option>
          </select>
        </label>
        <label>
          <span>Subgroep:</span>
          @if (!customGroup()) {
            <select id="subGroup" [formField]="fd.subGroup">
              <option value="" [selected]="!model().subGroup">Geen</option>
              @for (sg of subGroups()[model().prefix] || []; track $index) {
                <option value="{{ sg }}" [selected]="model().subGroup === sg">
                  {{ sg }}
                </option>
              }
            </select>
            <svg
              role="button"
              aria-label="Pencil"
              (click)="customGroup.set(!customGroup())"
            >
              <use href="#icon-pencil"></use>
            </svg>
          } @else {
            <input type="text" id="subGroup" [formField]="fd.subGroup" />
          }
        </label>
        <label>
          <span>Naam:</span>
          <input type="text" id="name" [formField]="fd.name" />
        </label>
        <label>
          <input
            type="checkbox"
            id="isSubDevice"
            [formField]="fd.isSubDevice"
          />
          <span>Is sub-apparaat (tel niet mee in totalen)</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="allowPowerControl"
            [formField]="fd.allowPowerControl"
          />
          <span>Sta aan/uit commando's toe</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="alertWhenLost"
            [formField]="fd.alertWhenLost"
          />
          <span>Waarschuwen als apparaat niet meer bereikbaar is</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="alertWhenOff"
            [formField]="fd.alertWhenOff"
          />
          <span
            >Waarschuwen als apparaat uit staat terwijl het aan zou moeten
            zijn</span
          >
        </label>

        <button type="submit">Opslaan</button>
        <button type="button" (click)="closeDialog()">Annuleren</button>
      </form>
    </dialog>
  `
})
export class PowerMeterDialogComponent {
  protected readonly dialogRef: Signal<ElementRef<HTMLDialogElement>> =
    viewChild.required('dlg');
  protected readonly z2m = inject(ZigbeeService);
  protected readonly settings = inject(MqttDeviceSettingsService);
  readonly ieeeAddress = input.required<string>();
  protected readonly deviceSettings = this.settings.read(this.ieeeAddress);
  protected readonly deviceOptions = this.settings.optionsFromDevResource(
    this.deviceSettings
  );

  readonly customGroup = signal(false);

  readonly zigbeePrefixes = zigbeePrefixes.filter(p => p !== 'Alles');
  readonly subGroups = this.z2m.deviceSubgroups;

  model = linkedSignal(() => {
    return {
      ...splitName(this.baseName()),
      ...this.deviceOptions()
    };
  });

  newName = computed(() => {
    const prefix = this.model().prefix.toLocaleLowerCase().trim();
    const subGroup = this.model().subGroup.toLocaleLowerCase().trim();
    const name = this.model().name;
    return `${prefix}/${subGroup}/${name}`.replaceAll('//', '/');
  });

  fd = form(this.model, () => undefined, {
    submission: {
      action: async value => {
        const currentValue = this.model();
        if (this.baseName() !== this.newName()) {
          // update the name in the zigbee setup.
          const result = await this.z2m.publish(
            'zigbee2mqtt/bridge/request/device/rename',
            {
              from: this.baseName(),
              to: this.newName(),
              homeassistant_rename: true
            }
          );
          console.log({ result });
        }
        await this.settings.update({
          id: this.ieeeAddress(),
          friendlyName: this.newName(),
          alertWhenLost: currentValue.alertWhenLost,
          alertWhenOff: currentValue.alertWhenOff,
          allowPowerControl: currentValue.allowPowerControl,
          isSubDevice: currentValue.isSubDevice,
          maxPower: this.deviceSettings.value()?.maxPower || 0
        });
        this.closeDialog();
      }
    }
  });

  readonly #deviceInfo = this.z2m.getDeviceInfo(this.ieeeAddress);
  readonly baseName = computed(
    () => this.#deviceInfo()?.friendly_name || this.ieeeAddress()
  );
  readonly show = model<boolean>();

  readonly _ = afterRenderEffect(() =>
    this.show() ? this.openDialog() : this.closeDialog()
  );

  openDialog() {
    this.dialogRef().nativeElement?.showModal();
    this.show.set(true);
  }

  closeDialog() {
    this.dialogRef().nativeElement?.close();
    this.show.set(false);
  }
}
