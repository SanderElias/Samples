import { EffectCleanupRegisterFn, Injector, afterNextRender, computed, effect, inject, signal } from '@angular/core';
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

// class Sample {
//   data$ = of([1, 2, 3]).pipe( // any observable will do, most often an http-get
//     shareReplay({ bufferSize: 1, refCount: false }) // keep original in memory until the class is destroyed
//   );

//   data = toWritableSignal(this.data$); // but we need to convert it to a writable signal
// }

// interface Product {
//   id: string;
// }
// class someService {
//   #http = inject(HttpClient);
//   #data$ = this.#http.get<Product[]>('/api/getProducts');
//   #$data = toWritableSignal(this.#data$, { initialValue: []});
//   $data = this.#$data.asReadonly();

//   update(p: Product) {
//     // validate product
//     // save to backend
//     const list = this.#$data().filter(row => row.id !== p.id);
//     // probably you want to so something smarter here.
//     this.#$data.set([...list, p]);
//   }
// }

const test = signal({
  prop1: 'test',
  prop2: 123,
  prop3: true,
});

const blah = computed(() => {
  const entries = Object.entries(test());
  return entries.reduce((acc, [key, value]) => {
    acc[key] = signal(value);
    return acc;
  }, {});
});
