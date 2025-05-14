import { provideServerRendering } from '@angular/ssr';
import '@angular/compiler';
import { Component, DestroyRef, provideExperimentalZonelessChangeDetection, runInInjectionContext } from '@angular/core';
import { of, throwError } from 'rxjs';
import { asyncComputed } from './async-computed.js';
import { describe, it } from 'node:test';
import assert from 'assert';
import { setTimeout } from 'timers/promises';
import { bootstrapApplication } from '@angular/platform-browser';
import jsdom from 'jsdom';

const dom = new jsdom.JSDOM(`<!DOCTYPE html><test-component />`);
globalThis.document = dom.window.document;

@Component({
  selector: 'test-component',
  template: ''
})
class TestComponent {}

const appRef = await bootstrapApplication(TestComponent, {
  providers: [provideServerRendering(), provideExperimentalZonelessChangeDetection()]
});

describe('asyncComputed', () => {
  let destroyRef: DestroyRef = {
    onDestroy: () => {}
  } as any;

  it('should handle synchronous values', () => {
    runInInjectionContext(appRef.injector, async () => {
      const result = asyncComputed(() => 42, undefined);

      assert.strictEqual(result(), 42);
    });
  });

  /*
  it('should handle promises', async () => {
    const result = asyncComputed(() => Promise.resolve(42), undefined, destroyRef);
    await setTimeout(0); // wait for promise to resolve
    assert.strictEqual(result(), 42);
  });

  it('should handle observables', () => {
    const result = asyncComputed(() => of(42), undefined, destroyRef);
    assert.strictEqual(result(), 42);
  });

  it('should handle async iterables', async () => {
    async function* asyncGenerator() {
      yield 42;
    }
    const result = asyncComputed(() => asyncGenerator(), undefined, destroyRef);
    await setTimeout(0); // wait for async iterable to resolve
    assert.strictEqual(result(), 42);
  });

  it('should handle errors in promises', async () => {
    const result = asyncComputed(() => Promise.reject(new Error('test error')), undefined, destroyRef);
    await setTimeout(0); // wait for promise to reject
    assert.throws(() => result(), /test error/);
  });

  it('should handle errors in observables', () => {
    const result = asyncComputed(() => throwError(() => new Error('test error')), undefined, destroyRef);
    assert.throws(() => result(), /test error/);
  });
  */
});
