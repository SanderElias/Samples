import { Component, effect, ElementRef, inject, input, linkedSignal, output, viewChild } from '@angular/core';
import { RelationsService } from '../relations.service';
import { isObject, isIntegerString } from '@se-ng/signal-utils';
import type { UserCard } from '../../generic-services/address.service';

@Component({
  selector: 'relation-form',
  template: `
    <form #form (submit)="submit($event)">
      <label for="name">Name</label>
      <input id="name" name="name" required />
      <label for="username">Username</label>
      <input id="username" name="username" required />
      <label for="email">Email</label>
      <input id="email" name="email" required />
      <fieldset>
        <legend>Address</legend>
        <label for="street">Street</label>
        <input id="street" name="address.street" required />
        <label for="suite">Suite</label>
        <input id="suite" name="address.suite" />
        <label for="city">City</label>
        <input id="city" name="address.city" required />
        <label for="zipcode">Zipcode</label>
        <input id="zipcode" name="address.zipcode" required />
        <fieldset>
          <legend>Geo</legend>
          <label for="lat">Latitude</label>
          <input id="lat" name="address.geo.lat" required />
          <label for="lng">Longitude</label>
          <input id="lng" name="address.geo.lng" required />
        </fieldset>
      </fieldset>
      <button>Submit</button>
    </form>
  `,
  styleUrl: './relation-form.component.css',
})
export class RelationForm {
  id = input.required<string>();
  done = output<void>();
  form = viewChild<ElementRef<HTMLFormElement>>('form');
  rs = inject(RelationsService);

  relation = this.rs.read(this.id);
  // dataResource = httpResource<UserCard | undefined>(() => 'http://localhost:3003/relations/' + this.id());
  flatData = linkedSignal({
    source: this.relation,
    computation: data => data && flattenRecord(data),
  });
  fields = linkedSignal({
    source: this.flatData,
    computation: data => (data && Object.keys(data)) ?? [],
  });
  submit(ev: SubmitEvent) {
    ev.preventDefault();
    const form:HTMLFormElement = ev.target as HTMLFormElement;
    if (!form) return;
    const newData = {...this.flatData()}; // copy of originals
    for (const field of this.fields()) {
      if (form[field]) {
        newData[field] = form[field].value; // update with the edited values
      }
    }
    console.log('newData', unFlattenRecord(newData));
    this.rs.update(newData as unknown as UserCard);
    this.done.emit();
  }

  _ = effect(() => {
    const data = this.flatData();
    const form = this.form()?.nativeElement;
    if (!data || !form) return;
    // update the form with incoming data
    for (const [name, value] of Object.entries(data)) {
      if (form[name]) {
        form[name].value = value;
      }
    }
  });
}

function flattenRecord(r: Record<string, any>, prefix = ''): Record<string, any> {
  return Object.entries(r).reduce((acc, [k, v]) => {
    if (isObject(v)) {
      return { ...acc, ...flattenRecord(v, `${prefix}${k}.`) };
    }
    if (Array.isArray(v)) {
      return { ...acc, ...flattenArray(v, `${prefix}${k}.`) };
    }
    return { ...acc, [`${prefix}${k}`]: v };
  }, {});
}

function flattenArray(a: any[], prefix = '') {
  return a.reduce((acc, v, i) => {
    if (isObject(v)) {
      return { ...acc, ...flattenRecord(v, `${prefix}${i}.`) };
    }
    if (Array.isArray(v)) {
      return { ...acc, ...flattenArray(v, `${prefix}${i}.`) };
    }
    return { ...acc, [`${prefix}${i}`]: v };
  }, {});
}

function unFlattenRecord(r: Record<string, any>): Record<string, any> {
  return Object.entries(r).reduce((acc, [k, v]) => {
    const path = k.split('.');
    const slot = path.pop()!;
    let obj = acc;
    for (let idx = 0; idx < path.length; idx++) {
      const key = path[idx];
      const nextKey = path[idx + 1] ?? slot;
      obj = obj[key] ??= isIntegerString(nextKey) ? [] : {};
    }
    obj[slot] = v;
    return acc;
  }, {});
}

const noUndefinedProps = <T extends Record<string, unknown>>(obj: T) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as T;
