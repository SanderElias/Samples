import { randomInt } from 'node:crypto';

import { generateCodeWord } from './codeWordGenerator.ts';

type DemoStatus = 'new' | 'active' | 'paused' | 'closed';
type DemoRegion = 'EMEA' | 'APAC' | 'AMER';

export type DemoRow = {
  id: string;
  code: string;
  customerName: string;
  status: DemoStatus;
  amount: number;
  quantity: number;
  region: DemoRegion;
  priority: number;
  updatedAt: string;
};

export type DemoPatch = {
  id: string;
  changes: Partial<Omit<DemoRow, 'id'>>;
};

const customerFirstNames = [
  'Alex',
  'Avery',
  'Charlie',
  'Dakota',
  'Emerson',
  'Harper',
  'Jordan',
  'Kai',
  'Logan',
  'Milan',
  'Noel',
  'Parker',
  'Quinn',
  'Reese',
  'Sawyer',
  'Taylor',
];
const customerLastNames = [
  'Anderson',
  'Bennett',
  'Campbell',
  'Dawson',
  'Ellis',
  'Foster',
  'Gray',
  'Hayes',
  'Ingram',
  'Jensen',
  'Keller',
  'Lane',
  'Morris',
  'Nguyen',
  'Owens',
  'Parker',
];
const statuses: DemoStatus[] = ['new', 'active', 'paused', 'closed'];
const regions: DemoRegion[] = ['EMEA', 'APAC', 'AMER'];
const patchableKeys: Array<keyof Omit<DemoRow, 'id'>> = [
  'status',
  'amount',
  'quantity',
  'region',
  'priority',
  'updatedAt',
];

function pickRandom<T>(items: readonly T[]): T {
  return items[randomInt(items.length)];
}

function randomAmount(): number {
  return Number((Math.random() * 9900 + 100).toFixed(2));
}

function createDemoRows(count: number): DemoRow[] {
  const now = Date.now();
  return Array.from({ length: count }, (_, i) => {
    const offsetMinutes = randomInt(14 * 24 * 60);
    return {
      id: `row-${String(i + 1).padStart(3, '0')}`,
      code: generateCodeWord().code,
      customerName: `${pickRandom(customerFirstNames)} ${pickRandom(customerLastNames)}`,
      status: pickRandom(statuses),
      amount: randomAmount(),
      quantity: randomInt(1, 250),
      region: pickRandom(regions),
      priority: randomInt(1, 6),
      updatedAt: new Date(now - offsetMinutes * 60_000).toISOString(),
    };
  });
}

function randomChangedValue<K extends keyof Omit<DemoRow, 'id'>>(
  key: K,
  row: DemoRow
): DemoRow[K] {
  if (key === 'status') {
    let next = pickRandom(statuses);
    while (next === row.status) {
      next = pickRandom(statuses);
    }
    return next as DemoRow[K];
  }

  if (key === 'amount') {
    let next = randomAmount();
    while (next === row.amount) {
      next = randomAmount();
    }
    return next as DemoRow[K];
  }

  if (key === 'quantity') {
    let next = randomInt(1, 250);
    while (next === row.quantity) {
      next = randomInt(1, 250);
    }
    return next as DemoRow[K];
  }

  if (key === 'region') {
    let next = pickRandom(regions);
    while (next === row.region) {
      next = pickRandom(regions);
    }
    return next as DemoRow[K];
  }

  if (key === 'updatedAt') {
    return new Date().toISOString() as DemoRow[K];
  }

  let next = randomInt(1, 6);
  while (next === row.priority) {
    next = randomInt(1, 6);
  }
  return next as DemoRow[K];
}

const demoRows = createDemoRows(10);

export function getDemoRows(): DemoRow[] {
  return demoRows;
}

export function buildDemoPatches(): DemoPatch[] {
  const patchCount = randomInt(1, 6);
  const shuffledRows = [...demoRows].sort(() => Math.random() - 0.5);
  const targetRows = shuffledRows.slice(0, patchCount);

  return targetRows.map(row => {
    const fieldCount = randomInt(1, 3);
    const shuffledKeys = [...patchableKeys].sort(() => Math.random() - 0.5);
    const selectedKeys = shuffledKeys.slice(0, fieldCount);
    const changes: DemoPatch['changes'] = {};

    for (const key of selectedKeys) {
      changes[key] = randomChangedValue(key, row);
    }

    const updatedRow = { ...row, ...changes };
    Object.assign(row, updatedRow);

    return {
      id: row.id,
      changes,
    };
  });
}
