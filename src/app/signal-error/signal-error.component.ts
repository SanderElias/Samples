import { Component, computed, Signal,signal } from '@angular/core';
import { map, timer } from 'rxjs';
import { asyncComputed } from 'projects/se-ng/signal-utils/src/lib/async-computed';

@Component({
  selector: 'se-signal-error',
  standalone: true,
  imports: [],
  template: `
    <h3>Signal with error</h3>
    <p>
      <button (click)="changeCount()">Increment</button>
      <button (click)="changeCount(-1)">Decrement</button>
    </p>
    <p>Count: {{ $count() }}</p>
    <p>Result: {{ $result() }}</p>
    <p>Counter {{$testIterator()}}</p>
  `,
  styleUrl: './signal-error.component.css',
})
export default class SignalErrorComponent {
  $count = signal(11);

  faultyTimer$ = timer(0, 500).pipe(
    map(i => {
      if (i === 10) {
        throw new Error('You left me hanging...');
      }
      return i;
    })
  );
  $faultyTimer = asyncComputed(() => this.faultyTimer$,'');



  $testIterator = asyncComputed(async function* () {
    for (let i = 0; i < 10; i++) {
      yield i;
      await new Promise(r => setTimeout(r, 1000));
    }
  })




  even = async n => {
    await new Promise(r => setTimeout(r, 250));
    if (n % 2 === 0) {
      return n;
    } else {
      throw new Error('Not even');
    }
  };

  stupidFn = asyncComputed(() => {
    const c = this.$count();
    if (c % 3 === 0) {
      return this.faultyTimer$;  // return an observable that will throw an error in time
    }
    return this.even(c); // return a promise that will throw an error if the number is not even
  });

  $result = computed(() => {
    try {
      return this.stupidFn();
    } catch (error: any) {
      // console.error(error);
      return `Error: ${error.message}`;
    }
  });

  changeCount = (n = 1) => this.$count.update(v => v + n);
}

const test:Signal<number|undefined> = computed(() => {
  if (performance.now() %5 === 0) {
    return 5
  }
  return undefined
})
