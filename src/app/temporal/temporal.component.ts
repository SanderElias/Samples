import { JsonPipe } from '@angular/common';
import {
  afterRenderEffect,
  Component,
  computed,
  linkedSignal,
  signal,
  untracked
} from '@angular/core';
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
        <input list="cities" [formField]="form.city" />
        <datalist id="cities">
          @for (city of cities(); track city) {
            <option [value]="city">
              {{ city }}
            </option>
          }
        </datalist>
      </label>
      <label><button type="button" (click)="add()">Add</button></label>
    </form>
    <table>
      <thead>
        <tr>
          <th>Region</th>
          <th>City</th>
          <th>Current Time</th>
        </tr>
      </thead>
      <tbody>
        @for (row of table(); track row) {
          <tr>
            <td>{{ row.region }}</td>
            <td>{{ row.city }}</td>
            <td>{{ row.time() }}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styleUrls: ['./temporal.component.css']
})
export class TemporalComponent {
  temporal = injectTemporal();
  // equal false because we want to update every second, and there is only 1 temporal.Now
  now = signal(this.temporal().Now, { equal: () => false });

  timeZones = timeZones();
  browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/');
  table = signal([
    {
      region: this.browserTimeZone[0],
      city: this.browserTimeZone[1],
      time: computed(() =>
        this.now().plainTimeISO(this.browserTimeZone.join('/'))
      )
    }
  ]);
  regions = Object.keys(this.timeZones);
  region = linkedSignal(() => this.browserTimeZone[0]);
  cities = computed(() =>
    this.timeZones[this.region()].map(({ city }) => city)
  );
  city = linkedSignal({
    source: this.region,
    computation: (
      region: string,
      previous?: { source: string; value: string }
    ) => {
      const cities = untracked(this.cities);
      // region changed?
      if (region !== previous?.source) {
        if (region === this.browserTimeZone[0]) {
          // return browser city if region matches
          return this.browserTimeZone[1];
        } else if (cities.length > 0) {
          // return first city for the region otherwise
          return cities[0];
        }
      }
      // region did not change, or no match found, return previous or first
      return previous?.value || cities[0] || '';
    }
  });
  model = linkedSignal(() => ({
    region: this.region(),
    city: this.city()
  }));
  form = form(this.model);

  _ = afterRenderEffect(clean => {
    const int = setInterval(() => {
      this.now.set(this.temporal().Now); // trigger the signal to update times
    }, 1000);
    clean(() => clearInterval(int));
  });

  add = () => {
    const region = this.form.region().value();
    const city = this.form.city().value();
    this.table.update(table => [
      ...table,
      {
        region,
        city,
        time: computed(() => this.now().plainTimeISO(`${region}/${city}`)),
        date: computed(() => this.now().plainDateISO(`${region}/${city}`))
      }
    ]);
  };
}

declare global {
  /** Typed global `Temporal` for environments with native support or after loading the polyfill */
  const Temporal: typeof import('temporal-polyfill').Temporal;
}

function injectTemporal() {
  const res = signal({} as typeof Temporal);

  // Use globalThis at runtime to avoid accidental runtime errors if Temporal is missing
  if (typeof (globalThis as any).Temporal !== 'undefined') {
    // Native Temporal is available
    res.set((globalThis as any).Temporal as typeof Temporal);
  } else {
    // Load the polyfill
    console.log('Loading Temporal polyfill...');
    import('temporal-polyfill').then(mod => {
      res.set(mod.Temporal);
      // ensure future checks for Temporal find the polyfill
      (globalThis as any).Temporal = mod.Temporal;
    });
  }

  return res;
}

const timeZones = () => {
  const zones = Intl.supportedValuesOf('timeZone').map(timeZone => {
    const parts = timeZone.split('/');
    return { timeZone, region: parts[0], city: parts[1] };
  });
  const groupedZones = Map.groupBy(zones, zone => zone.region).entries();
  return Object.fromEntries(groupedZones);
};
