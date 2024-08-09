import { DestroyRef } from '@angular/core';
import { of, throwError } from 'rxjs';
import { asyncComputed } from './async-computed';

describe('asyncComputed', () => {
  let destroyRef: DestroyRef;

  beforeEach(() => {
    destroyRef = {
      onDestroy: jasmine.createSpy('onDestroy')
    } as any;
  });

  it('should handle synchronous values', () => {
    const result = asyncComputed(() => 42, undefined, destroyRef);
    expect(result()).toBe(42);
  });

  it('should handle promises', async () => {
    const result = asyncComputed(() => Promise.resolve(42), undefined, destroyRef);
    await new Promise(resolve => setTimeout(resolve, 0)); // wait for promise to resolve
    expect(result()).toBe(42);
  });

  it('should handle observables', () => {
    const result = asyncComputed(() => of(42), undefined, destroyRef);
    expect(result()).toBe(42);
  });

  it('should handle async iterables', async () => {
    async function* asyncGenerator() {
      yield 42;
    }
    const result = asyncComputed(() => asyncGenerator(), undefined, destroyRef);
    await new Promise(resolve => setTimeout(resolve, 0)); // wait for async iterable to resolve
    expect(result()).toBe(42);
  });

  it('should handle errors in promises', async () => {
    const result = asyncComputed(() => Promise.reject(new Error('test error')), undefined, destroyRef);
    await new Promise(resolve => setTimeout(resolve, 0)); // wait for promise to reject
    expect(() => result()).toThrowError('test error');
  });

  it('should handle errors in observables', () => {
    const result = asyncComputed(() => throwError(() => new Error('test error')), undefined, destroyRef);
    expect(() => result()).toThrowError('test error');
  });

  it('should handle errors in async iterables', async () => {
    async function* asyncGenerator() {
      throw new Error('test error');
    }
    const result = asyncComputed(() => asyncGenerator(), undefined, destroyRef);
    await new Promise(resolve => setTimeout(resolve, 0)); // wait for async iterable to reject
    expect(() => result()).toThrowError('test error');
  });

  it('should use initial value if provided', () => {
    const result = asyncComputed(() => 42, 0, destroyRef);
    expect(result()).toBe(42);
  });

  it('should throw error if destroyRef is not provided', () => {
    expect(() => asyncComputed(() => 42)).toThrowError('destroyRef is mandatory when used outside a injection context');
  });

  it('should call onDestroy when destroyed', () => {
    asyncComputed(() => 42, undefined, destroyRef);
    expect(destroyRef.onDestroy).toHaveBeenCalled();
  });
});
