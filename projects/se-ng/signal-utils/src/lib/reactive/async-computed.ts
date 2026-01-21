import { computed, DestroyRef, effect, inject, isDevMode, type Signal, signal } from '@angular/core';
import { isObservable, type Observable, type Subscription } from 'rxjs';

import { isAsyncIterable } from '../guards/is-async-iterable';
import { isPromise } from '../guards/is-promise';

/**
 * @param {AbortSignal} [abortSignal] signal that allows to cancel the ongoing operation. (can be passed to fetch!)
 * @description returns a promise, observable, async iterable or a value
 */
export type ObservableComputedFn<T> = (abortSignal?: AbortSignal) => Observable<T> | Promise<T> | AsyncIterable<T> | T;
interface AsyncComputed {
  /**
   * @description Helper to put the outcome(s) of a promise or observable into a signal, will run in a microtask
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @param {ObservableComputedFn<T>} AsyncComputedFn function returning a promise or observable or a value. the result is put into the signal when it arrives
   * @returns {*}  {(Signal<T | undefined>)}
   */
  <T>(cb: ObservableComputedFn<T>): Signal<T | undefined>;
  /**
   * @description Helper to put the outcome(s) of a promise or observable into a signal, will run in a microtask
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @template Y Type to use for the initalValue, default to the type of the initialValue
   * @param {ObservableComputedFn<T>} AsyncComputedFn function returning a promise or observable. the result is put into the signal when it arrives
   * @param {Y} [initialValue] the initial value of the signal.
   * @returns {*}  {(Signal<T | Y>)}
   */
  <X, Y>(cb: ObservableComputedFn<X>, initialValue: Y): Signal<X | Y>;
  /**
   * @description Helper to put the outcome(s) of a promise or observable into a signal, will run in a microtask
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @template Y Type to use for the initalValue, default to the type of the initialValue
   * @param {ObservableComputedFn<T>} AsyncComputedFn function returning a promise or observable. the result is put into the signal when it arrives
   * @param {Y} [initialValue] the initial value of the signal.
   * @param {DestroyRef} [destroyRef] a manual provided destroyRef. Mandatory when the function is used outside a injection context
   * @returns {*}  {(Signal<T | Y>)}
   */
  <X, Y = X>(cb: ObservableComputedFn<X>, initialValue: Y, destroyRef: DestroyRef): Signal<X | Y>;
}

export const asyncComputed: AsyncComputed = <T, Y>(
  cb: ObservableComputedFn<T>,
  initialValue?: Y,
  destroyRef?: DestroyRef
): Signal<T | Y | undefined> => {
  const state = signal({
    value: initialValue,
    error: undefined
    // not adding the completed state. a Signals has no way to communicate this
    // to its consumers without custom wrapping. That is a different concern that
    // is outside the scope of this helper
    /* c8 ignore start */
  } as { value?: T | Y | undefined; error?: any });
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
  /* c8 ignore stop */
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
      try {
        // create a new AbortController for the current iteration
        abortPrevious = new AbortController();
        // keep an reference to the signal to be able to clean up the subscription
        const abortSignal = abortPrevious.signal;
        const outcome = cb(abortSignal); // call the function, and pass in the abortSignal to allow cleanup in the function
        assertContinue(abortSignal);
        if (isObservable(outcome)) {
          subscription = outcome.subscribe({
            next: value => {
              assertContinue(abortSignal!);
              state.set({ value });
            },
            error: error => {
              assertContinue(abortSignal!);
              state.set({ error });
            }
          });
        } else if (isPromise(outcome)) {
          const value = await outcome;
          assertContinue(abortSignal);
          state.set({ value });
        } else if (isAsyncIterable(outcome)) {
          for await (const value of outcome) {
            assertContinue(abortSignal);
            state.set({ value });
          }
        } else {
          state.set({ value: outcome });
        }
      } catch (error: any) {
        if (error.message !== 'aborted') {
          // only set the error if it is not an abort
          state.set({ error });
        }
      }
    },
    /**
     * ManualCleanup to make sure that the cleanup is called when the effect is cleaned up, so we don't leak
     */
    { manualCleanup: true, debugName: 'asyncComputed' }
  );

  return computed(() => {
    const currentState = state();
    /* c8 ignore start */
    if (currentState.error) {
      if (isDevMode()) {
        console.warn(`
  [asyncComputed] error: ${currentState.error.message}
    The error was thrown inside the callback function. The best way to handle
    this error is  inside that function. However, asyncComputed will rethrow
    the error to make sure that the error is not silently ignored.
    The error will be reset when one of the signals inside the function changes.
    Until that happens, the error will be re-thrown by Angular on every use
    of the signal. (usually every change detection cycle)
    (this warning is only shown in dev mode)
`);
      }
      // rethrow error to be handled by the user
      throw currentState.error;
      // note to self: do not wrap this in a new error, as it will hide the original stack trace
    }
    /* c8 ignore stop */
    return currentState.value;
  });
};
