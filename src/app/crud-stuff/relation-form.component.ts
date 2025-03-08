import { Component, input, viewChild, effect, ElementRef, linkedSignal } from '@angular/core';
import { UserCard } from '../generic-services/address.service';
import { httpResource } from '@angular/common/http';
import type { FormSubmittedEvent } from '@angular/forms';

@Component({
  selector: 'relation-form',
  template: `
    <form #form (submit)="submit($event)">
      <label for="name">Name</label>
      <input id="name" name="name" required />
      <label for="username">Username</label>
      <input id="username" name="username" required />
      <button>Submit</button>
    </form>
  `,
  styleUrl: './relation-form.component.css',
})
export class RelationForm {
  id = input.required<string>();
  form = viewChild<ElementRef<HTMLFormElement>>('form');

  dataResource = httpResource<UserCard>(() => `http://localhost:3003/relations/${this.id()}`);
  flatData = linkedSignal({
    source: this.dataResource.value,
    computation: data => data && flattenRecord(data),
  });
  fields = linkedSignal({
    source: this.flatData,
    computation: data => (data && Object.keys(data)) ?? [],
  });
  submit(ev: Event) {
    ev.preventDefault();
    const form = this.form()?.nativeElement;
    if (!form) return;
    const newData: Record<string, any> = {};
    for (const field of this.fields()) {
      if (form[field]) {
        this.flatData.update(data => ({ ...data, [field]: form[field].value }));
      }
    }
    console.log(unFlattenRecord(this.flatData() as any));
  }

  _ = effect(() => {
    const data = this.flatData();
    const form = this.form()?.nativeElement;
    if (!data || !form) return;
    // update the form with incoming data
    for (const [name, value] of Object.entries(data)) {
      if (form[name]) {
        form[name].value = value;
        console.log(name, value);
      }
    }
  });
}

function flattenRecord(r: Record<string, any>, prefix = ''): Record<string, any> {
  return Object.entries(r).reduce((acc, [k, v]) => {
    if (typeof v === 'object' && v !== null) {
      return { ...acc, ...flattenRecord(v, `${prefix}${k}.`) };
    }
    return { ...acc, [`${prefix}${k}`]: v };
  }, {});
}

function unFlattenRecord(r: Record<string, any>): Record<string, any> {
  return Object.entries(r).reduce((acc, [k, v]) => {
    const path = k.split('.');
    const slot = path.pop()!;
    let obj = acc;
    for (const key of path) {
      obj = obj[key] ??= {};
    }
    obj[slot] = v;
    return acc;
  }, {});
}
