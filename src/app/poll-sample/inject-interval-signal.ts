import type { Signal } from '@angular/core';
import {
  assertInInjectionContext,
  DestroyRef,
  inject,
  signal
} from '@angular/core';

export const IntervalStatus = {
  InitialDelay: 'initial-delay',
  Active: 'active',
  Paused: 'paused'
} as const;

export type IntervalStatus =
  (typeof IntervalStatus)[keyof typeof IntervalStatus];

export type IntervalSignal = Signal<number | undefined> & {
  status: Signal<IntervalStatus>;
  pause: () => void;
  resume: () => void;
  triggerNow: () => void;
  reset: () => void;
};

/**
 * @param interval - Delay between ticks in milliseconds.
 * @param initialDelay - Optional delay before the first tick; defaults to 0.
 * @returns A readonly signal that increments on each tick and supports, pause(), resume(), triggerNow()cccccbhnbvkdrlvergecclccvgderkjvdtkghevhbhfb
 *  and reset().
 */
export const injectIntervalSignal = (
  interval: number,
  initialDelay = 0
): IntervalSignal => {
  assertInInjectionContext(injectIntervalSignal);
  inject(DestroyRef).onDestroy(() => clearTimer());
  const result = signal<number | undefined>(undefined);
  const status = signal<IntervalStatus>(IntervalStatus.InitialDelay);
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const clearTimer = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    status.set(IntervalStatus.Paused);
  };

  const schedule = (delay: number, nextStatus: IntervalStatus) => {
    clearTimer();
    timeoutId = setTimeout(update, delay);
    status.set(nextStatus);
  };

  const reset = () => {
    clearTimer();
    result.set(undefined);
    status.set(IntervalStatus.InitialDelay);
  };

  const pause = () => {
    clearTimer();
  };

  const resume = () => {
    if (status() === IntervalStatus.Paused) {
      schedule(interval, IntervalStatus.Active);
    }
  };

  const triggerNow = () => {
    if (
      status() === IntervalStatus.InitialDelay ||
      status() === IntervalStatus.Paused
    ) {
      clearTimer();
      update();
    }
  };

  const update = () => {
    result.update(n => (n ?? 0) + 1);
    schedule(interval, IntervalStatus.Active);
  };

  schedule(initialDelay, IntervalStatus.InitialDelay);

  const intervalSignal = result.asReadonly() as unknown as IntervalSignal;
  intervalSignal.status = status.asReadonly();
  intervalSignal.pause = pause;
  intervalSignal.resume = resume;
  intervalSignal.triggerNow = triggerNow;
  intervalSignal.reset = reset;

  return intervalSignal;
};
