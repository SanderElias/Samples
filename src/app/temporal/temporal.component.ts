import { JsonPipe } from '@angular/common';
import { Component, computed, linkedSignal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'se-temporal',
  imports: [JsonPipe, FormField],
  template: `
    <H1>Playing with Temporal</H1>
    <form>
      <label>
        <span>Region</span>
        <select
          [formField]="form.region"
          (change)="region.set(form.region().value())"
        >
          @for (region of regions; track region) {
            <option [value]="region">
              {{ region }}
            </option>
          }
        </select></label
      >
      <label>
        <span>City</span>
        <select [formField]="form.city">
          @for (city of cities(); track city) {
            <option [value]="city">
              {{ city }}
            </option>
          }
        </select></label
      >
      <pre>{{ model() | json }}</pre>
    </form>
  `,
  styleUrls: ['./temporal.component.css']
})
export class TemporalComponent {
  timeZones = timeZones();
  regions = Object.keys(this.timeZones);
  region = linkedSignal(() => this.regions[0]);
  cities = computed(() =>
    this.timeZones[this.region()].map(({ city }) => city)
  );
  city = computed(() => this.cities()[0] ?? '');
  model = linkedSignal(() => ({
    region: this.region(),
    city: this.city()
  }));
  form = form(this.model);
}

function injectTemporal() {
  
  const { Temporal } = await import('@js-temporal/polyfill');

const timeZones = () => {
  const zones = Intl.supportedValuesOf('timeZone').map(timeZone => {
    const parts = timeZone.split('/');
    return { timeZone, region: parts[0], city: parts[1] };
  });
  const groupedZones = Map.groupBy(zones, zone => zone.region).entries();
  return Object.fromEntries(groupedZones);
};
