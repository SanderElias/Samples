import { httpResource } from '@angular/common/http';
import {
  afterRenderEffect,
  Component,
  computed,
  DestroyRef,
  inject,
  Service,
  signal,
  untracked,
  type WritableSignal
} from '@angular/core';

import { injectIntervalSignal, IntervalStatus } from './inject-interval-signal';

@Component({
  imports: [],
  selector: 'se-poll-sample',
  styleUrl: './poll-sample.component.css',
  templateUrl: 'poll-sample.component.html'
})
export class PollSampleComponent {
  readonly IntervalStatus = IntervalStatus;
  trigger = injectIntervalSignal(5 * 1000, 5 * 1000);

  code = httpResource(
    () => (this.trigger() ? 'http://localhost:3000/generate' : undefined),
    {
      parse: resp => (resp as CodeResponse).code
    }
  );

  ds = inject(DemoPolling);
  demoRows = computed(() => {
    const m = this.ds.dataRes.hasValue()
      ? this.ds.dataRes.value()
      : new Map<string, WritableSignal<DemoRows>>();
    return [...m.values()];
  });
}

@Service()
class DemoPolling {
  des = inject(DestroyRef);

  dataRes = httpResource(() => 'http://localhost:3000/api/demo/rows', {
    defaultValue: new Map<string, WritableSignal<DemoRows>>(),
    parse: resp => {
      // transform the array of DemoRows into a Map keyed by the row id
      const data = resp as DemoRows[];
      const result = new Map<string, WritableSignal<DemoRows>>();
      for (const row of data) {
        // note we make a signal for each row so that it can be individually reactive
        result.set(row.id, signal(row));
      }
      return result;
    }
  });

  changesRes = httpResource<DemoPatches[]>(() =>
    this.dataRes.hasValue() // only start polling after we have values
      ? 'http://localhost:3000/api/demo/patches'
      : undefined
  );

  constructor() {
    let interval = setInterval(() => this.changesRes.reload(), 2 * 1000);
    // make sure we stop the interval when the service is destroyed
    this.des.onDestroy(() => clearInterval(interval));

    afterRenderEffect(() => {
      // trigger when there are changes.
      const changes = this.changesRes.hasValue() ? this.changesRes.value() : [];
      if (changes.length > 0) {
        //untracked, because we don't want to trigger this effect when updating individual rows
        untracked(() => {
          const rowMap = this.dataRes.value();
          for (const change of changes) {
            const row = rowMap.get(change.id);
            if (row) {
              // update the signal holding the row with the incoming changes
              row.update(r => ({ ...r, ...change.changes }));
            }
          }
        });
      }
    });
  }
}

export interface DemoPatches {
  id: string;
  changes: Partial<DemoRows>;
}

export interface DemoRows {
  id: string;
  code: string;
  customerName: string;
  status: Status;
  amount: number;
  quantity: number;
  region: Region;
  priority: number;
  updatedAt: Date;
}

export enum Region {
  Amer = 'AMER',
  Apac = 'APAC',
  Emea = 'EMEA'
}

export enum Status {
  Active = 'active',
  Closed = 'closed',
  New = 'new',
  Paused = 'paused'
}

export interface CodeResponse {
  code: string;
  length: number;
  alphabet: string;
  generatedAt: Date;
}
