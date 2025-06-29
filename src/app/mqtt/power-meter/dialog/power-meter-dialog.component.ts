import { Component, ElementRef, Signal, afterRenderEffect, computed, inject, input, model, viewChild } from '@angular/core';
import { zigbeePrefixes } from '../../mqtt.component';
import { ZigbeeService } from '../../zigbee.service';
import { extractPrefix } from '../power-meter.component';

@Component({
  selector: 'power-meter-dialog',
  standalone: true,
  styleUrl: './power-meter-dialog.component.css',
  template: `
    <dialog #dlg>
      <h4>{{ prefix() }} {{ name() }}</h4>
      <form (submit)="updateName($event)">
        <label>
          <span>indelen bij:</span>
          <select name="prefix" id="prefix" [value]="prefix()">
            @for (pf of zigbeePrefixes; track $index) {
              <option value="{{ pf }}" [selected]="prefix() === pf">{{ pf }}</option>
            }
            <option value="" [selected]="!prefix()">Geen</option>
          </select>
        </label>
        <label>
          <span>Naam:</span>
          <input type="text" name="name" id="name" [value]="name()" />
        </label>
        <button type="submit">Opslaan</button>
        <button type="button" (click)="closeDialog()">Annuleren</button>
      </form>
    </dialog>
  `
})
export class PowerMeterDialogComponent {
  protected readonly dialogRef: Signal<ElementRef<HTMLDialogElement>> = viewChild.required('dlg');
  protected readonly z2m = inject(ZigbeeService);

  readonly ieeeAddress = input.required<string>();
  readonly zigbeePrefixes = zigbeePrefixes;

  readonly #deviceInfo = this.z2m.getDeviceInfo(this.ieeeAddress);
  readonly baseName = computed(() => this.#deviceInfo()?.friendly_name || this.ieeeAddress());
  readonly name = computed(() => this.baseName().split('/').pop() || '');
  readonly prefix = computed(() => extractPrefix(this.baseName()));
  readonly show = model<boolean>();

  readonly _ = afterRenderEffect(() => (this.show() ? this.openDialog() : this.closeDialog()));

  updateName = (evt: SubmitEvent) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const newName = (form.elements.namedItem('name') as HTMLInputElement)?.value?.trim() ?? '';
    const newPrefix = (form.elements.namedItem('prefix') as HTMLInputElement)?.value?.trim() ?? '';
    const newBaseName = `${newPrefix}/${newName}`.trim();
    if (newPrefix && newName && newBaseName !== this.baseName()) {
      this.z2m.publish('zigbee2mqtt/bridge/request/device/rename', {
        from: this.baseName(),
        to: newBaseName,
        homeassistant_rename: true
      });
    }
    this.closeDialog();
  };

  openDialog() {
    this.dialogRef().nativeElement?.showModal();
    this.show.set(true);
  }

  closeDialog() {
    this.dialogRef().nativeElement?.close();
    this.show.set(false);
  }
}
