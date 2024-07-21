/* eslint-disable max-len */
import { computed, DestroyRef, effect, inject, type Signal, signal } from '@angular/core';
import { firstValueFrom, isObservable, Observable, type Subscription } from 'rxjs';
import { isPromise } from './is-promise';

type ObservableComputedFn<T> = () => Observable<T> | Promise<T> | T;
interface AsyncComputed {
  /**
   * @description Helper to get the result of a promise, or the first emission form a observable into an signal.
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @param {ObservableComputedFn<T>} AsyncComputedFn function returning a promise or observable. the result is put into the signal when it arrives
   * @returns {*}  {(Signal<T | undefined>)}
   */
  <T>(cb: ObservableComputedFn<T>): Signal<T | undefined>;
  /**
   * @description Helper to get the result of a promise, or the first emission form a observable into an signal.
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @template Y Type to use for the initalValue, default to the type of the initialValue
   * @param {ObservableComputedFn<T>} AsyncComputedFn function returning a promise or observable. the result is put into the signal when it arrives
   * @param {Y} [initialValue] the initial value of the signal.
   * @returns {*}  {(Signal<T | Y>)}
   */
  <X, Y>(cb: ObservableComputedFn<X>, initialValue: Y): Signal<X | Y>;
  /**
   * @description Helper to get the result of a promise, or the first emission form a observable into an signal.
   * @template T type to use for the output signal, defaults to return type of the AsyncComputedFn
   * @template Y Type to use for the initalValue, default to the type of the initialValue
   * @param {ObservableComputedFn<T>} AsyncComputedFn function returning a promise or observable. the result is put into the signal when it arrives
   * @param {Y} [initialValue] the initial value of the signal.
   * @param {DestroyRef} [destroyRef] a manual provided destroyRef. Mandatory when the function is used outside a injection context
   * @returns {*}  {(Signal<T | Y>)}
   */
  <X, Y>(cb: ObservableComputedFn<X>, initialValue: Y, destroyRef: DestroyRef): Signal<X | Y>;
}

export const observableComputed: AsyncComputed = <T, Y>(
  cb: ObservableComputedFn<T>,
  initialValue?: Y,
  destroyRef = inject(DestroyRef)
): Signal<T | Y | undefined> => {
  const state = signal({
    value: initialValue,
    error: undefined,
    // not adding the completed state. a Signals has no way to communicate this
    // to its consumers without custom wrapping. That is a different concern that
    // is outside the scope of this helper
  } as { value?: T | Y | undefined; error?: any });
  if (!destroyRef) {
    throw new Error('destroyRef is mandatory when used outside a injection context');
  }
  destroyRef.onDestroy(() => {
    obs?.unsubscribe();
    ref.destroy();
  });
  let obs: Subscription | undefined;
  const ref = effect(
    async () => {
      try {
        obs?.unsubscribe(); // cleanup previous subscription (on new signal emission)
        const outcome = cb();
        if (isObservable(outcome)) {
          obs = outcome.subscribe({
            next: value => state.set({ value, error: undefined }),
            error: error => {
              state.set({ value: undefined, error });
            },
          });
        } else if (isPromise(outcome)) {
          const value = await outcome;
          state.set({ value, error: undefined });
        } else {
          state.set({ value: outcome, error: undefined });
        }
      } catch (e) {
        // this is needed because there might be an error in the CD that is not inside the observable stream
        state.set({ value: undefined, error: e });
      }
    },
    { manualCleanup: true, allowSignalWrites: true }
  );

  return computed(() => {
    const currentState = state();
    if (currentState.error) {
      throw currentState.error;
    }
    return currentState.value;
  });
};


