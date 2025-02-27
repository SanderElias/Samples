import { signal, effect, Signal } from '@angular/core';
import { createWatch } from '@angular/core/primitives/signals';

export const debouncedSignal = <T>(triggerSignal: Signal<T>, delay: number): Signal<T> => {
  let timeout: NodeJS.Timeout | null = null;
  const out = signal<T>(triggerSignal());

  const w = createWatch(triggerSignal, () => {

  effect(
    () => {
      timeout && clearTimeout(timeout);
      const value = triggerSignal();
      timeout = setTimeout(() => {
        out.set(value);
        timeout = null;
      }, delay);
      return () => timeout && clearTimeout(timeout);
    },
    { forceRoot: true }
  );

  return out;
};

