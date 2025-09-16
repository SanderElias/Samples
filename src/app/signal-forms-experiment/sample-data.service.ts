import { Injectable, linkedSignal, type Signal } from '@angular/core';
import {
  FieldPath,
  maxError,
  maxLength,
  minLength,
  minLengthError,
  applyEach,
  patternError,
  required,
  validate
} from '@angular/forms/signals';


export interface SampleData {
  id: string;
  name: string;
  dob: Date;
  password: string;
  confirm: string;
  tags: string[];
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  contacts: SampleDataContactDetail[];
}

export enum SampleDataContactDetailType {
  Email = 'E-Mail',
  Fax = 'Fax',
  Mobile = 'Mobile',
  Phone = 'Phone'
}

export interface SampleDataContactDetail {
  type: SampleDataContactDetailType;
  value: string;
  priority: number;
}

const inMemoryDb = new Map<string, Partial<SampleData>>();
inMemoryDb.set('1', {
  id: '1',
  name: 'Sander',
  dob: new Date(1980, 1, 1),
  password: 'not secure',
  confirm: 'not secure',
  contacts: [
    { type: SampleDataContactDetailType.Email, value: 'a@b.c', priority: 0 },
    { type: SampleDataContactDetailType.Mobile, value: '+31 6123 456 789', priority: 0 }
  ],
  tags: ['developer', 'angular'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
});

const emptyData = (id: string): SampleData => ({
  id: id,
  name: '',
  dob: new Date('2000'),
  password: '',
  confirm: '',
  tags: [],
  address: { street: '', city: '', state: '', zip: '' },
  contacts: []
});

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {
  // getById = (id: string) => of(structuredClone(inMemoryDb.get(id)) as SampleData);
  getById = (id: Signal<string>) =>
    linkedSignal({
      source: id,
      computation: id => {
        const data = inMemoryDb.get(id);
        console.log('getById', id, data);
        if (!data) {
          // throw new Error(`No data found for id ${id}`);
          // we should throw an error here, but for now we just return an empty object
          return emptyData(id);
        }
        return structuredClone(data) as SampleData;
      }
    });

  getAll = () => structuredClone(Array.from(inMemoryDb.values() as unknown as SampleData[]));

  save = async (data: Partial<SampleData>) => {
    // simulate server delay
    await new Promise(res => setTimeout(res, 500));
    // Add the signalForm valiadtion stuff here once I have created it!
    inMemoryDb.set(data.id as string, data);
  };
}

const year = 365 * 24 * 60 * 60 * 1000;

export function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0;
}

export const entropy = (str: string) => {
  return [...new Set([...str])]
    .map(chr => {
      return str.match(new RegExp(chr, 'g'))?.length || 0;
    })
    .reduce((sum, frequency) => {
      let p = frequency / str.length;
      return sum + p * Math.log2(1 / p);
    }, 0);
};
