import { httpResource } from '@angular/common/http';
import { Component, DestroyRef, effect, inject, Service } from '@angular/core';

import { injectIntervalSignal, IntervalStatus } from './inject-interval-signal';

@Component({
  imports: [],
  selector: 'se-poll-sample',
  styleUrl: './poll-sample.component.css',
  templateUrl: 'poll-sample.component.html'
})
export class PollSampleComponent {
  readonly IntervalStatus = IntervalStatus;
  trigger = injectIntervalSignal(120 * 1000, 30*1000);

  code = httpResource<string>(
    () => (this.trigger() ? 'http://localhost:3000/generate' : undefined),
    {
      parse: (resp: unknown) => (resp as CodeResponse).code
    }
  );

  ds = inject(DemoPolling);
}

@Service()
class DemoPolling {
  des = inject(DestroyRef);
  dataRes = httpResource<DemoRows[]>(
    () => 'http://localhost:3000/api/demo/rows'
  );

  changesRes = httpResource<DemoPatches[]>(() =>
    this.dataRes.hasValue() // only start polling after we have values
      ? 'http://localhost:3000/api/demo/patches'
      : undefined
  );

  constructor() {
    let int = setInterval(() => {
      console.log('Interval tick');
      this.changesRes.reload();
    }, 10 * 1000);
    this.des.onDestroy(() => clearInterval(int));

    effect(() => {
      const changes = this.changesRes.hasValue() ? this.changesRes.value() : [];
      if (changes.length > 0) {
        console.log('Applying changes to rows');
        const rows = [...(this.dataRes.hasValue() ? this.dataRes.value() : [])];
        for (const change of changes) {
          console.log('Processing change:', change);
          const row = rows.find(r => r.id === change.id);
          if (row) {
            Object.assign(row, change.changes);
          }
          console.log(row);
        }
        this.dataRes.value.set(rows);
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
