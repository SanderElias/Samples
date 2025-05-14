import { map, Observable, take, timer } from 'rxjs';
import { signal, effect, computed, Signal } from './signals/index.js';

interface invoiceRow {
  price: number;
  quantity: number;
  vat: number;
  total: number;
}

let count = 0;

const fromObservable = <T>(obs: Observable<T>): Signal<T> => {
  const sig = signal(undefined as T);
  obs.subscribe(value => sig.set(value));
  return sig;
};

const tick = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));

function createInvoiceRow(price: number, quantity: number, vat: number): Signal<invoiceRow> {
  const row = signal({ price, quantity, vat } as invoiceRow);
  const total = computed(() => Math.floor(100 * row().price * row().quantity * (1 + row().vat / 100)) / 100);
  row.update(row => ({ ...row, total: total() }));
  return row;
}

const randomRow = () =>
  createInvoiceRow(Math.floor(Math.random() * 10000) / 100, Math.floor(Math.random() * 30), Math.random() > 0.5 ? 21 : 9);

const lastRow = signal(randomRow());

/**
 * a signal to hold all the rows signals
 */
const rows = seededComputed([] as Signal<invoiceRow>[], rows => {
  // add a new row when the last row changes
  const newRow = lastRow();
  rows.push(newRow);
  return rows;
});

/**
 * a variable to hold the running totals
 */
const totals = seededComputed(
  {
    accumulatedQuantity: 0,
    average: 0,
    sum: 0,
    vat: new Map<number, number>() // [vat, total]
  },
  totals => {
    const { vat, total, price, quantity } = lastRow()();
    console.log(++count);
    const vatAmount = Math.floor((total - price * quantity) * 100) / 100;
    const rowCount = rows().length;
    totals.sum += total;
    totals.accumulatedQuantity += quantity;
    totals.average = Math.floor((100 * totals.sum) / rowCount) / 100;
    totals.vat.set(vat, (totals.vat.get(vat) || 0) + vatAmount);
    return totals;
  }
);

/** display grand total: */
effect(() => {
  const tots = totals();
  let vatText = '';
  tots.vat.forEach(
    (total, vat) =>
      (vatText += `
  vat ${vat}: €${total}`)
  );
  console.log(`
  ${++count} Totals: €${tots.sum}  for:${tots.accumulatedQuantity} items, Average line ammount: €${tots.average} ${vatText} `);
});

for (let i = 0; i < 10; i++) {
  lastRow.set(randomRow());
  await tick();
}

export function seededComputed<T>(seed: T, fn: (seed: T) => T): Signal<T> {
  return computed(() => fn(seed));
}
