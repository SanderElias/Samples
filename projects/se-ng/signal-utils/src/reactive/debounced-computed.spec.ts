import { Injector, provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { debouncedSignal, debouncedComputed } from './debounced-computed';

describe('debouncedSignal / debouncedComputed', () => {
  let injector: Injector;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    injector = TestBed.inject(Injector);
    // use fake timers and control Date.now so the implementation's Date.now() checks behave deterministically
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('returns initial value immediately and updates after delay', () => {
    // control a fake clock value used by Date.now()
    let now = Date.now();
    const dateSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);

    const src = TestBed.runInInjectionContext(() => signal(1));
    const deb = TestBed.runInInjectionContext(() => debouncedSignal(() => src(), { delay: 50 }));

    // initial value should be visible immediately
    expect(deb()).toBe(1);

    // change source; debounced value should not change immediately
    src.set(2);
    expect(deb()).toBe(1);

    // advance time slightly less than delay -> still not updated
    now += 40;
    vi.advanceTimersByTime(40);
    expect(deb()).toBe(1);

    // advance to pass delay
    now += 11;
    vi.advanceTimersByTime(11);
    // timers have run; read the debounced value
    expect(deb()).toBe(2);

    dateSpy.mockRestore();
  });

  it('uses the last value when multiple rapid updates occur', () => {
    let now = Date.now();
    const dateSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);

    const src = TestBed.runInInjectionContext(() => signal(1));
    const deb = TestBed.runInInjectionContext(() => debouncedSignal(() => src(), { delay: 50 }));

    expect(deb()).toBe(1);

    // rapid updates
    src.set(2);
    now += 10;
    vi.advanceTimersByTime(10);

    src.set(3);

    // advance to pass the original delay (total 50+)
    now += 41;
    vi.advanceTimersByTime(41);

    expect(deb()).toBe(3);

    dateSpy.mockRestore();
  });

  it('debouncedComputed returns a readonly signal behaving like debouncedSignal', () => {
    let now = Date.now();
    const dateSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);

    const src = TestBed.runInInjectionContext(() => signal(10));
    const readonly = TestBed.runInInjectionContext(() => debouncedComputed(() => src(), { delay: 20 }));

    expect(readonly()).toBe(10);

    src.set(11);
    expect(readonly()).toBe(10);

    now += 21;
    vi.advanceTimersByTime(21);

    expect(readonly()).toBe(11);

    dateSpy.mockRestore();
  });

  it('uses default delay when none provided', () => {
    let now = Date.now();
    const dateSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);

    const src = TestBed.runInInjectionContext(() => signal(1));
    const deb = TestBed.runInInjectionContext(() => debouncedSignal(() => src(), {}));

    expect(deb()).toBe(1);

    src.set(2);
    expect(deb()).toBe(1);

    // advance slightly less than default delay (500)
    now += 499;
    vi.advanceTimersByTime(499);
    expect(deb()).toBe(1);

    // pass the default delay
    now += 2;
    vi.advanceTimersByTime(2);
    expect(deb()).toBe(2);

    dateSpy.mockRestore();
  });

  it('honors custom equality function (blocks updates when equal returns true)', () => {
    let now = Date.now();
    const dateSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);
    const eq = vi.fn(() => true);

    const src = TestBed.runInInjectionContext(() => signal(1));
    const deb = TestBed.runInInjectionContext(() => debouncedSignal(() => src(), { delay: 50, equal: eq }));

    expect(deb()).toBe(1);

    src.set(2);
    now += 60;
    vi.advanceTimersByTime(60);

    // equal returns true -> no update
    expect(deb()).toBe(1);

    dateSpy.mockRestore();
  });

  it('schedules a new debounce after an update', () => {
    let now = Date.now();
    const dateSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);

    const src = TestBed.runInInjectionContext(() => signal(1));
    const deb = TestBed.runInInjectionContext(() => debouncedSignal(() => src(), { delay: 50 }));

    expect(deb()).toBe(1);

    src.set(2);
    now += 51;
    vi.advanceTimersByTime(51);
    expect(deb()).toBe(2);

    // second change after update should schedule a new debounce
    src.set(3);
    expect(deb()).toBe(2);

    now += 49;
    vi.advanceTimersByTime(49);
    expect(deb()).toBe(2);

    now += 2;
    vi.advanceTimersByTime(2);
    expect(deb()).toBe(3);

    dateSpy.mockRestore();
  });

  it('allows updates when custom equality returns false', () => {
    let now = Date.now();
    const dateSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);

    const eq = vi.fn(() => false);
    const src = TestBed.runInInjectionContext(() => signal(1));
    const deb = TestBed.runInInjectionContext(() => debouncedSignal(() => src(), { delay: 20, equal: eq }));

    expect(deb()).toBe(1);
    src.set(2);

    now += 21;
    vi.advanceTimersByTime(21);

    expect(deb()).toBe(2);
    dateSpy.mockRestore();
  });

  it('construction of debouncedSignal creates internal trigger signal (smoke test)', () => {
    // simple smoke test that constructs the debounced signal to ensure the module line that creates the internal trigger is exercised
    const src = TestBed.runInInjectionContext(() => signal(5));
    const deb = TestBed.runInInjectionContext(() => debouncedSignal(() => src(), { delay: 10 }));
    expect(typeof deb).toBe('function');
  });

  it('throws when delay is zero or negative for debouncedSignal', () => {
    const src = TestBed.runInInjectionContext(() => signal(1));
    expect(() => TestBed.runInInjectionContext(() => debouncedSignal(() => src(), { delay: 0 as any }))).toThrow(
      '[debouncedSignal] delay must be a positive number'
    );
    expect(() => TestBed.runInInjectionContext(() => debouncedSignal(() => src(), { delay: -10 as any }))).toThrow(
      '[debouncedSignal] delay must be a positive number'
    );
  });

  it('throws when delay is zero or negative for debouncedComputed', () => {
    const src = TestBed.runInInjectionContext(() => signal(1));
    expect(() => TestBed.runInInjectionContext(() => debouncedComputed(() => src(), { delay: 0 as any }))).toThrow(
      '[debouncedSignal] delay must be a positive number'
    );
    expect(() => TestBed.runInInjectionContext(() => debouncedComputed(() => src(), { delay: -1 as any }))).toThrow(
      '[debouncedSignal] delay must be a positive number'
    );
  });
});
