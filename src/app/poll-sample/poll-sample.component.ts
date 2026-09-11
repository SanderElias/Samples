import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import {
    afterRenderEffect,
    Component,
    computed,
    inject,
    Service,
    signal,
    type WritableSignal
} from '@angular/core';

import { FlashCellComponent } from '../flash-cell/flash-cell.component';

import { injectIntervalSignal, IntervalStatus } from './inject-interval-signal';
import { intervalResource } from './interval-resource';

@Component({
  imports: [FlashCellComponent, JsonPipe],
  selector: 'se-poll-sample',
  styleUrl: './poll-sample.component.css',
  templateUrl: 'poll-sample.component.html'
})
export class PollSampleComponent {
  readonly IntervalStatus = IntervalStatus;
  trigger = injectIntervalSignal(5 * 1000, 5 * 1000);
  ir = intervalResource(2 * 1000);

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

  since = (id: DemoId) => {
    const row = this.ds.dataRes.value().get(id);
    return Math.floor(row ? since(row().updatedAt) : 0);
  };
}

@Service()
class DemoPolling {
  enablePolling = signal(true);

  dataRes = httpResource(() => 'http://localhost:3000/api/demo/rows', {
    defaultValue: new Map<DemoId, WritableSignal<DemoRows>>(),
    parse: resp => {
      // transform the array of DemoRows into a Map keyed by the row id
      const data = resp as DemoRows[];
      const result = new Map<DemoId, WritableSignal<DemoRows>>();
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

  _ = afterRenderEffect(onCleanup => {
    if (!this.enablePolling() || !this.changesRes.hasValue()) {
      return; // exit early if changes are not ready
    }
    this.mergePatches(this.changesRes.value());
    const timeout = setTimeout(() => this.changesRes.reload(), 2 * 1000);
    onCleanup(() => clearTimeout(timeout));
  });

  mergePatches(demoPatches: DemoPatches[]) {
    /// this is safe, because we only call mergePatches when dataRes has a value
    const rowMap = this.dataRes.value();
    for (const change of demoPatches) {
      const row = rowMap.get(change.id);
      if (row) {
        row.update(r => ({ ...r, ...change.changes }));
      } else {
        // this demo does not handle adding new rows, so we just ignore it for now
      }
    }
  }
}

const since = (d: Date | string) => {
  d = typeof d === 'string' ? d : d.toISOString();
  const now = Temporal.Now.instant();
  const old = Temporal.Instant.from(d);
  return now.since(old).total({ unit: 'second' });
};

export interface DemoPatches {
  id: DemoId;
  changes: Partial<DemoRows>;
}

type DemoId = string & { __brand: 'DemoId' };

export interface DemoRows {
  id: DemoId;
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
