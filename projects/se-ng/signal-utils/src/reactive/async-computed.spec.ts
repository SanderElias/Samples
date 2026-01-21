import { Component, Injector, isSignal, provideZonelessChangeDetection, runInInjectionContext, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { beforeEach, describe, expect, it } from 'vitest';
import { asyncComputed } from './async-computed';
// Helper to run in Angular injection context

// Minimal dummy component for fixture
@Component({ selector: 'dummy-fixture', template: '' })
class DummyComponent {}

describe('asyncComputed (integration)', () => {
  let injector: Injector;
  let fixture: ComponentFixture<DummyComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DummyComponent],
      providers: [provideZonelessChangeDetection()]
    });
    injector = TestBed.inject(Injector);
    fixture = TestBed.createComponent(DummyComponent);
  });

  it('should resolve a promise and update the signal', async () => {
    const sig = runInInjectionContext(injector, () => asyncComputed(() => Promise.resolve(123)));
    await fixture.whenStable();
    expect(isSignal(sig)).toBe(true);
    expect(sig()).toBe(123);
  });

  it('should resolve an observable and update the signal', async () => {
    const sig = runInInjectionContext(injector, () => asyncComputed(() => of(456)));
    await fixture.whenStable();
    expect(sig()).toBe(456);
  });

  it('should handle errors from promise', async () => {
    const sig = runInInjectionContext(injector, () => asyncComputed(() => Promise.reject(new Error('fail'))));
    await fixture.whenStable();
    expect(() => sig()).toThrowError('fail');
  });

  it('should handle errors from observable', async () => {
    const sig = runInInjectionContext(injector, () => asyncComputed(() => throwError(() => new Error('obs fail'))));
    await fixture.whenStable();
    expect(() => sig()).toThrowError('obs fail');
  });

  it('should use the initial value if provided', async () => {
    const sig = runInInjectionContext(injector, () => asyncComputed(() => new Promise(() => {}), 999));
    expect(sig()).toBe(999);
  });

  it('should return a signal', () => {
    const result = runInInjectionContext(injector, () => asyncComputed(() => 1));
    expect(isSignal(result)).toBe(true);
  });

  it('should handle async iterable', async () => {
    const asyncIterable = {
      async *[Symbol.asyncIterator]() {
        yield 1;
        await new Promise(resolve => setTimeout(resolve, 0));
        yield 2;
      }
    };
    const sig = runInInjectionContext(injector, () => asyncComputed(() => asyncIterable));
    await fixture.whenStable();
    expect(sig()).toEqual(1); // First value from async iterable
    await new Promise(resolve => setTimeout(resolve, 0));
    await fixture.whenStable();
    expect(sig()).toEqual(2); // Second value from async iterable
  });

  it('should handle async generator', async () => {
    async function* asyncGenerator() {
      yield 1;
      await new Promise(resolve => setTimeout(resolve, 0));
      yield 2;
    }
    const sig = runInInjectionContext(injector, () => asyncComputed(() => asyncGenerator()));
    await fixture.whenStable();
    expect(sig()).toEqual(1); // First value from async generator
    await new Promise(resolve => setTimeout(resolve, 0));
    await fixture.whenStable();
    expect(sig()).toEqual(2); // Second value from async generator
  });

  it('should handle synchronous values', async () => {
    const sig = runInInjectionContext(injector, () => asyncComputed(() => 42));
    await fixture.whenStable();
    expect(sig()).toBe(42);
  });

  it('should cancel the previous async operation when the dependency signal changes', async () => {
    let aborts = 0;
    const dep = TestBed.runInInjectionContext(() => signal(1));

    const sig = runInInjectionContext(injector, () =>
      asyncComputed(async abortSignal => {
        const d = dep(); // Capture the current value of the dependency signal
        abortSignal?.addEventListener('abort', () => {
          aborts++;
        });
        await new Promise(resolve => setTimeout(resolve, 2)); // Simulate async operation
        return d;
      })
    );

    await fixture.whenStable();
    dep.set(2); // retrigger before the first promise resolves
    await new Promise(resolve => setTimeout(resolve, 1));
    await new Promise(resolve => setTimeout(resolve, 2));

    // The first promise should have been aborted, and only the second value should be set
    expect(aborts).toBeGreaterThan(0);
    expect(sig()).toBe(2);
  });
});
