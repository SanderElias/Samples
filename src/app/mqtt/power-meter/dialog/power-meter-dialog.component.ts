import type { ElementRef, Signal } from '@angular/core';
import {
  afterRenderEffect,
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
import { deepEqual } from '@se-ng/signal-utils';
import { zigbeePrefixes } from '../../mqtt.component';
import { ZigbeeService } from '../../zigbee.service';
import { extractPrefix } from '../power-meter.component';
import { splitName } from './split-name';

@Component({
  selector: 'power-meter-dialog',
  standalone: true,
  styleUrl: './power-meter-dialog.component.css',
  imports: [FormField, FormRoot],
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

  readonly customGroup = signal(false);

  readonly ieeeAddress = input.required<string>();
  readonly zigbeePrefixes = zigbeePrefixes.filter(p => p !== 'Alles');
  readonly subGroups = computed(
    () => {
      const list = this.z2m.devices().map(d => d.friendly_name.split('/'));
      const subGroups: Record<string, string[]> = {};
      for (const dev of list) {
        if (dev.length <= 2) continue;
        const prefix = dev[0] as 'e&m' | 's&m' | 'zaak' | 'kamp';
        const subGroup = dev[1];
        if (!this.zigbeePrefixes.includes(prefix) || !subGroup) continue;
        subGroups[prefix] ??= [];
        if (!subGroups[prefix].includes(subGroup)) {
          subGroups[prefix].push(subGroup);
        }
      }
      return subGroups;
    },
    { debugName: 'SubGroups', equal: deepEqual }
  );

  model = linkedSignal(() => splitName(this.baseName()));

  newName = computed(() => {
    const prefix = this.model().prefix.toLocaleLowerCase().trim();
    const subGroup = this.model().subGroup.toLocaleLowerCase().trim();
    const name = this.model().name;
    return `${prefix}/${subGroup}/${name}`.replaceAll('//', '/');
  });

  fd = form(this.model, () => undefined, {
    submission: {
      action: async value => {
        if (this.baseName() !== this.newName()) {
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
