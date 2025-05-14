/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { untracked, WritableSignal } from '@angular/core';
import { SIGNAL } from '@angular/core/primitives/signals';

const RESOLVE = Symbol('RESOLVE');

export function deepSignal<S, D>(source: WritableSignal<S>, navFn: (value: S) => D): WritableSignal<D> {
  const handler: ProxyHandler<NavRecord> = {
    get({ value, keys }: NavRecord, prop: PropertyKey) {
      if (prop === RESOLVE) {
        return keys;
      }
      if (!value || typeof value !== 'object') {
        throw new Error(`Cannot navigate to key ${String(prop)} of non-object`);
      }
      const childValue = (value as Record<PropertyKey, unknown>)[prop];
      return new Proxy(
        {
          value: childValue,
          keys: [...keys, prop]
        },
        handler
      );
    }
  };

  const root = new Proxy<NavRecord>(
    {
      value: source(),
      keys: []
    },
    handler
  );

  const keys = navFn(root as S) as PropertyKey[];

  const read: WritableSignal<D> = (() => {
    let value: unknown = source();
    for (const key of keys) {
      value = (value as Record<PropertyKey, unknown>)[key];
    }
    return value as D;
  }) as WritableSignal<D>;

  read[SIGNAL] = source[SIGNAL];
  read.set = (value: D) => {
    source.update(current => valueForWrite(current, value, [...keys].reverse()) as S);
  };

  read.update = (fn: (current: D) => D) => {
    read.set(fn(untracked(read)));
  };
  read.asReadonly = () => read;

  return read;
}

interface NavRecord {
  value: unknown;
  keys: PropertyKey[];
}

function valueForWrite(parentValue: unknown, leafValue: unknown, path: PropertyKey[]): unknown {
  if (path.length === 0) {
    return leafValue;
  }

  const prop = path.pop()!;
  const oldChildValue = (parentValue as any)[prop];
  const newChildValue = valueForWrite(oldChildValue, leafValue, path);

  if (parentValue instanceof Array) {
    parentValue = [...parentValue];
    (parentValue as any)[prop] = newChildValue;
  } else {
    parentValue = { ...(parentValue as object), [prop]: newChildValue };
  }

  return parentValue;
}
