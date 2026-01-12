import type { ElementRef } from '@angular/core';
import { Component, effect, inject, input, linkedSignal, output, signal, viewChild } from '@angular/core';

import type { UserCard } from '../../generic-services/address.service';
import { RelationsService } from '../relations.service';
import { flattenRecord } from '../utils/flatten-record';
import { unFlattenRecord } from '../utils/un-flattenRecord';

@Component({
  selector: 'relation-form',
  template: `
    <form #form (submit)="submit($event)">
      <label for="name">Name</label>
      <input id="name" name="name" required />
      <label for="username">Username</label>
      <input id="username" name="username" required />
      <label for="email">Email</label>
      <input id="email" name="email" required type="email" />
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
          <input id="lat" name="address.geo.lat" required min="-90" max="90" type="number" step="0.0001" />
          <label for="lng">Longitude</label>
          <input id="lng" name="address.geo.lng" required min="-180" max="180" type="number" step="0.0001" />
        </fieldset>
      </fieldset>
      <button>Submit</button>
    </form>
  `,
  styleUrl: './relation-form.component.css'
})
export class RelationForm {
  id = input.required<string>();
  rev = input.required<string>();
  done = output<void>();
  form = viewChild<ElementRef<HTMLFormElement>>('form');
  rs = inject(RelationsService);

  relation = this.rs.read(this.id, this.rev);
  // dataResource = httpResource<UserCard | undefined>(() => 'http://localhost:3003/relations/' + this.id());
  flatData = linkedSignal({
    source: () => this.relation.value(),
    computation: data => flattenRecord(data ?? {})
  });
  fields = linkedSignal({
    source: this.flatData,
    computation: data => Object.keys(data)
  });

  async submit(ev: SubmitEvent) {
    ev.preventDefault();
    const form: HTMLFormElement = ev.target as HTMLFormElement;
    if (!form) return;
    const newData = { ...this.flatData() }; // copy of originals
    for (const field of this.fields()) {
      if (form[field]) {
        const type = typeof newData[field];
        if (type === 'string') {
          newData[field] = form[field].value; // update with the edited values
        }
        if (type === 'number') {
          newData[field] = Number(form[field].value);
        }
        if (type === 'boolean') {
          newData[field] = form[field].checked;
        }
      }
    }
    const newUser = unFlattenRecord(newData) as UserCard;
    const { result, rev, user } = await this.rs.update(newUser);
    if (result === 'conflict') {
      console.log('Conflict detected, please reload the user data');
      this.relation.value.set(user!); //
    }
    if (result === 'error') {
      console.log('Error updating the user');
      console.error('Error updating the user');
    }
    if (result === 'ok' || result === 'noChange') {
      console.log('User updated successfully');
      this.relation.reload();
      this.done.emit();
    }
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

const noUndefinedProps = <T extends Record<string, unknown>>(obj: T) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as T;
