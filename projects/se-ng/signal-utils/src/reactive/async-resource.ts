import { computed, DestroyRef, effect, inject, linkedSignal, type Signal, signal, type WritableSignal } from '@angular/core';
import { isObservable, type Subscription } from 'rxjs';
import type { ObservableComputedFn } from './async-computed';
import { isAsyncIterable } from '../guards/is-async-iterable';
import { isPromise } from '../guards/is-promise';


/**
 * This file predates the Resource concept in Angular.
 * It provides a way to manage async data sources (Promises, Observables, AsyncIterables)
 * and exposes their state in a structured way. In some ways its similar to resouces
 * from angular, but with a different API and feature set.
 *
 * it accepts an async function that can return a Promise, Observable or AsyncIterable
 * and returns a Signal that contains the current value, error (if any), status and stream state.
 *
 * Consider using Angular's built-in Resource handling for new projects. Or use this
 * when you have an async iterator, as Angular Resources do not support that yet.
 */

export const enum ResourceState {
  /** the resource is initialized */
  'init' = 'init',
  /** the function is triggered, trough its reactive context */
  'triggered' = 'triggered',
  /** we are awaiting the first load, after the function is triggered */
  'loading' = 'loading',
  /** a value is provided  */
  'loaded' = 'loaded',
  /** a value is provided, and we are ready for the next value  */
  'awaiting' = 'awaiting',
  /** an error has happend  */
  'error' = 'error'
}

type StreamState = 'init' | 'ongoing' | 'done';

export type Resource<T> = {
  value: Signal<T>;
  error: any;
  status: ResourceState;
  stream: StreamState;
};

interface AsyncResource {
  <T>(cb: ObservableComputedFn<T>): Signal<Resource<T | undefined>>;
  <X, Y>(cb: ObservableComputedFn<X>, initialValue: Y): Signal<Resource<X | Y>>;
  <X, Y = X>(cb: ObservableComputedFn<X>, initialValue: Y, destroyRef: DestroyRef): Signal<Resource<X | Y>>;
}

export const computedResource: AsyncResource = <T, Y>(
  cb: ObservableComputedFn<T>,
  initialValue?: Y,
  destroyRef?: DestroyRef
): Signal<Resource<T | Y | undefined>> => {
  interface InternalState {
    value?: T | Y | undefined;
    error?: any;
    status: ResourceState;
    stream: StreamState;
  }

  const state: WritableSignal<InternalState> = signal({
    value: initialValue,
    error: undefined,
    status: ResourceState.init,
    stream: 'init'
  });

  const upState = (s: Partial<InternalState>) => state.update(prev => ({ ...prev, ...s }));

  try {
    destroyRef = destroyRef ?? inject(DestroyRef);
  } catch (e) {
    if (!destroyRef) {
      throw new Error('[asyncComputed] destroyRef is mandatory when used outside a injection context');
    }
    if (!(destroyRef instanceof DestroyRef)) {
      throw new Error('[asyncComputed] parameter destroyRef is not a DestroyRef');
    }
  }
  let abortPrevious: AbortController | undefined;
  let subscription: Subscription | undefined;
  const cleanUp = () => (subscription?.unsubscribe(), abortPrevious?.abort()); // helper to clean up subscribers or promises
  /**
   * helper to assert that the signal is not aborted throw an error if it is.
   */
  const assertContinue = (as: AbortSignal) => {
    if (as.aborted) {
      throw new Error('aborted');
    }
  };
  destroyRef.onDestroy(() => {
    cleanUp();
    ref.destroy(); // clean up the effect
  });
  const ref = effect(
    async onCleanup => {
      onCleanup(cleanUp); // cancel promises and observables when the effect is cleaned up (every iteration)
      upState({ status: ResourceState.triggered });
      try {
        // create a new AbortController for the current iteration
        abortPrevious = new AbortController();
        // keep an reference to the signal to be able to clean up the subscription
        const abortSignal = abortPrevious.signal;
        const outcome = cb(abortSignal); // call the function, and pass in the abortSignal to allow cleanup in the function
        assertContinue(abortSignal);
        upState({ status: ResourceState.loading, stream: 'init' });
        if (isObservable(outcome)) {
          upState({ stream: 'ongoing' });
          subscription = outcome.subscribe({
            next: value => {
              assertContinue(abortSignal!);
              state.update(s => ({ ...s, value, error: undefined, status: ResourceState.awaiting }));
            },
            error: error => {
              assertContinue(abortSignal!);
              upState({ error, value: undefined, status: ResourceState.error, stream: 'done' });
            },
            complete: () => {
              assertContinue(abortSignal!);
              upState({ stream: 'done' });
            }
          });
        } else if (isPromise(outcome)) {
          const value = await outcome;
          assertContinue(abortSignal);
          upState({ value, error: undefined, status: ResourceState.loaded, stream: 'done' });
        } else if (isAsyncIterable(outcome)) {
          upState({ stream: 'ongoing' });
          for await (const value of outcome) {
            assertContinue(abortSignal);
            upState({ value, error: undefined, status: ResourceState.awaiting });
          }
          upState({ stream: 'done' });
        } else {
          upState({ value: outcome, error: undefined, status: ResourceState.loaded, stream: 'done' });
        }
      } catch (error: any) {
        if (error.message !== 'aborted') {
          // only set the error if it is not an abort
          upState({ error });
        }
      }
    },
    /**
     * ManualCleanup to make sure that the cleanup is called when the effect is cleaned up, so we don't leak
     */
    { manualCleanup: true }
  );

  /**
   * Create a writableSignal that is only updated on an actual value change,
   * preventing other state updates from overwriting
   * eventual changes in the upstream code
   */
  const valueSignal = linkedSignal({
    source: () => state().value,
    computation: source => source
  });
  // return
  return computed(() => {
    const currentState = state();
    return {
      value: valueSignal,
      error: currentState.error,
      status: currentState.status,
      stream: currentState.stream
    };
  });
};
