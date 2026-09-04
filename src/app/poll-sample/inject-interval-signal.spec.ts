import { EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { IntervalStatus, injectIntervalSignal } from './inject-interval-signal';

describe('injectIntervalSignal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    TestBed.resetTestingModule();
  });

  it('throws when called outside an injection context', () => {
    expect(() => injectIntervalSignal(20)).toThrow();
  });

  it('tracks status transitions, starts instantly, and resets', async () => {
    const signal = runInInjectionContext(TestBed.inject(EnvironmentInjector), () =>
      injectIntervalSignal(50, 10)
    );

    expect(signal()).toBeUndefined();
    expect(signal.status()).toBe(IntervalStatus.InitialDelay);

    signal.triggerNow();
    expect(signal()).toBe(1);
    expect(signal.status()).toBe(IntervalStatus.Active);

    await vi.advanceTimersByTimeAsync(10);
    expect(signal()).toBe(1);

    signal.pause();
    await vi.advanceTimersByTimeAsync(200);
    expect(signal()).toBe(1);
    expect(signal.status()).toBe(IntervalStatus.Paused);

    signal.resume();
    await vi.advanceTimersByTimeAsync(50);
    expect(signal()).toBe(2);
    expect(signal.status()).toBe(IntervalStatus.Active);

    signal.reset();
    expect(signal()).toBeUndefined();
    expect(signal.status()).toBe(IntervalStatus.InitialDelay);

    signal.triggerNow();
    expect(signal()).toBe(1);
    expect(signal.status()).toBe(IntervalStatus.Active);

    await vi.advanceTimersByTimeAsync(50);
    expect(signal()).toBe(2);
  });

  it('does not schedule a second timer when triggerNow is called while waiting', async () => {
    const signal = runInInjectionContext(TestBed.inject(EnvironmentInjector), () =>
      injectIntervalSignal(50, 0)
    );

    expect(signal.status()).toBe(IntervalStatus.InitialDelay);
    signal.triggerNow();
    expect(signal()).toBe(1);

    signal.triggerNow();
    await vi.advanceTimersByTimeAsync(20);
    expect(signal()).toBe(1);

    await vi.advanceTimersByTimeAsync(30);
    expect(signal()).toBe(2);
  });

  it('keeps the existing timer when triggerNow is called again before it fires', async () => {
    const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout');
    const signal = runInInjectionContext(TestBed.inject(EnvironmentInjector), () =>
      injectIntervalSignal(50, 1000)
    );

    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);

    signal.triggerNow();
    signal.triggerNow();

    expect(setTimeoutSpy).toHaveBeenCalledTimes(2);
    await vi.advanceTimersByTimeAsync(49);
    expect(signal()).toBe(1);
    await vi.advanceTimersByTimeAsync(1);
    expect(signal()).toBe(2);
    setTimeoutSpy.mockRestore();
  });

  it('cleans up the active timeout when the injector is destroyed', async () => {
    const signal = runInInjectionContext(TestBed.inject(EnvironmentInjector), () =>
      injectIntervalSignal(50, 0)
    );

    TestBed.resetTestingModule();
    await vi.advanceTimersByTimeAsync(500);
    expect(signal()).toBeUndefined();
  });
});
