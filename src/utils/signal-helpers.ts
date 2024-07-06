import { DestroyRef, EffectCleanupRegisterFn, Injector, Signal, afterNextRender, effect, inject, signal } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

export type ToWritableSignalOptions<T> = {
  initialValue?: T | undefined;
  errorCallback?: (err: any) => void | undefined;
};

/**
 * Convert an observable into a writable signal.
 * @param src the observable. Will only take the first submitted value.
 * @param options, takes an optional initial value and an optional error callback.
 * @returns a writeable signal that will be updated with the first value from the observable.
 */
export const toWritableSignal = <T>(src: Observable<T>, { initialValue, errorCallback } = {} as ToWritableSignalOptions<T>) => {
  const sig = signal<T | undefined>(initialValue);
  errorCallback ??= (err: any) => undefined;
  firstValueFrom(src)
    .then(val => sig.set(val))
    .catch(errorCallback);
  return sig;
};

/**
 * A helper function to run an effect after the next render. must be run during initialization of a component.
 * this will help circumvent some types of dom issues with SSR.
 * @param fn The effect to run
 */
export function afterNextRenderEffect(fn: (onCleanup: EffectCleanupRegisterFn) => void) {
  const injector = inject(Injector);
  afterNextRender(() => effect(fn, { injector }));
}

export const asyncComputed = <T = unknown, F = unknown>(fn: () => Promise<T>, initialValue?: undefined | T | F): Signal<T | F> => {
  const result = signal<T | F>(initialValue);
  fn().then(r => result.set(r));

  return result.asReadonly();
};

export const observableComputed = <T = unknown>(fn: () => Observable<T>, initial?: T): Signal<T | undefined> => {
  const result = signal<T | undefined>(initial);
  inject(DestroyRef).onDestroy(() => unSub.unsubscribe());

  const unSub = fn().subscribe(x => result.set(x));

  return result;
};
