import { Component, effect, ElementRef, inject, input, linkedSignal, output, viewChild } from '@angular/core';
import { RelationsService } from '../relations.service';
import { deepEqual } from '@se-ng/signal-utils';
import type { UserCard } from '../../generic-services/address.service';
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
  done = output<void>();
  form = viewChild<ElementRef<HTMLFormElement>>('form');
  rs = inject(RelationsService);

  relation = this.rs.read(this.id);
  // dataResource = httpResource<UserCard | undefined>(() => 'http://localhost:3003/relations/' + this.id());
  flatData = linkedSignal({
    source: () => this.relation()?.value(),
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
    if (!deepEqual(this.flatData(), newData)) {
      // if the data is the same, we don't need to update the server.
      const newUser: UserCard = unFlattenRecord(newData) as UserCard;
      console.log('newData', newUser);
      if (await this.rs.update(newUser)) {
        this.done.emit();
      } else {
        // logging to the console is probably not the best way to handle errors.
        // You might want to show a message to the user or handle it in a different way.
        console.error('Error updating the user');
      }
    } else {
      this.done.emit(); // no changes, just close the dialog
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
