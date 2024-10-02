/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {computed, effect, signal, Signal, untracked} from '@angular/core';

export interface Resource<T> {
  readonly value: Signal<T | undefined>;
  readonly error: Signal<unknown | undefined>;
  readonly state: Signal<ResourceState>;
  refresh(): void;
}

export interface MutableResource<T, R> extends Resource<T> {
  mutate(
    fn: (req: R, oldValue: T | undefined, setValue: (value: T) => void) => Promise<T>,
  ): Promise<void>;
}

export enum ResourceState {
  Loading,
  Settled,
  Optimistic,
  Error,
}

export function resource<T, R>(
  request: () => R,
  project: (req: R, abort: AbortSignal) => Promise<T>,
): MutableResource<T, R> {
  return new ResourceImpl(request, project);
}

export class ResourceImpl<T, R, U> implements MutableResource<T, R> {
  private readonly _value = signal<T | undefined>(undefined);
  private readonly _error = signal<unknown | undefined>(undefined);
  private readonly _state = signal(ResourceState.Loading);
  private readonly _refresh = signal(0);
  private request: R | undefined = undefined;

  readonly value = this._value.asReadonly();
  readonly error = this._error.asReadonly();
  readonly state = this._state.asReadonly();

  private serialize = true;
  private pendingPromise: Promise<unknown> | undefined = undefined;

  constructor(request: () => R, project: (req: R, abort: AbortSignal) => Promise<T>) {
    const memoRequest = computed(request);
    effect(
      async (onCleanup) => {
        this._state.set(ResourceState.Loading);
        this._refresh();
        this.request = memoRequest();

        if (this.serialize) {
          try {
            await this.pendingPromise;
          } catch {
            return;
          }
        }

        this.pendingPromise = untracked(async () => {
          const abortController = new AbortController();
          onCleanup(() => abortController.abort());

          try {
            const res = await project(this.request!, abortController.signal);
            // Q: what does this return when it aborts?

            this._state.set(ResourceState.Settled);
            this._value.set(res);
            this._error.set(undefined);
          } catch (e) {
            if (!abortController.signal.aborted) {
              this._state.set(ResourceState.Error);
              this._value.set(undefined);
              this._error.set(e);
            }
          }
        });

        await this.pendingPromise;
      },
      {allowSignalWrites: true},
    );
  }

  async mutate(
    updateFn: (req: R, oldValue: T | undefined, setValue: (value: T) => void) => Promise<T>,
  ): Promise<void> {
    if (this.request === undefined) {
      throw new Error('Mutate before fetch');
    }

    let oldValue: T | undefined = undefined;
    if (this.state() === ResourceState.Settled || this.state() === ResourceState.Optimistic) {
      oldValue = this.value();
    }

    this._state.set(ResourceState.Loading);
    this._error.set(undefined);

    if (this.serialize) {
      try {
        await this.pendingPromise;
      } catch {
        return;
      }
    }

    try {
      const updatePromise = updateFn(this.request, oldValue, (optimisticValue) => {
        this._state.set(ResourceState.Optimistic);
        this._value.set(optimisticValue);
      });
      this.pendingPromise = updatePromise;
      const newValue = await updatePromise;
      this._state.set(ResourceState.Settled);
      this._value.set(newValue);
    } catch (err) {
      this._state.set(ResourceState.Error);
      this._value.set(undefined);
      this._error.set(err);
    }

    // What happens if the effect fires during an update?
    // What happens if someone calls mutate() more than once?
  }

  refresh(): void {
    this._refresh.update((v) => v + 1);
  }
}
