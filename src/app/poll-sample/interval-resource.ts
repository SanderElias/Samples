import type {
  Signal} from '@angular/core';
import {
  isSignal,
  resource,
  type ResourceStreamItem,
  signal} from '@angular/core';

/**
 * Async generator that yields a tick object every `intervalMs` milliseconds.
 *
 * @param intervalMs - milliseconds between yields
 * @param opts - optional settings: `count` to limit ticks, `signal` to abort
 * @yields number - the current tick count
 */
export async function* ticks(
  intervalMs: number,
  opts: { count?: number; abortSignal?: AbortSignal } = {}
) {
  const count = opts.count ?? Infinity;
  const signal = opts.abortSignal;
  let i = 0;

  while (i < count) {
    await new Promise<void>(resolve => {
      const id = setTimeout(() => resolve(), intervalMs);
      if (signal) {
        if (signal.aborted) {
          clearTimeout(id);
          resolve();
          return;
        }
        const onAbort = () => {
          clearTimeout(id);
          resolve();
        };
        signal.addEventListener('abort', onAbort, { once: true });
      }
    });
    if (signal?.aborted) break;
    i += 1;
    yield i;
  }
}

export const intervalResource = (
  interval?: number | Signal<number | undefined>
) =>
  resource({
    params: () => (isSignal(interval) ? interval() : interval),
    stream: ({ params, abortSignal }) => {
      const interval = params;
      const timer = signal<ResourceStreamItem<number>>({ value: 0 });
      const ticker = ticks(interval, { abortSignal });
      setTimeout(async () => {
        for await (const tick of ticker) {
          timer.set({ value: tick });
        }
      }, 0); // use setTimeout to start a "background" task

      return timer;
    }
  });
