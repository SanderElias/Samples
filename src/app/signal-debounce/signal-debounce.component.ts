import { Component, computed, signal } from '@angular/core';
import { debouncedComputed } from './debounced-computed';

@Component({
  selector: 'se-signal-debounce',
  imports: [],
  template: `
    <h1>signal-debounce</h1>
    <p>This is a option to debounce a signal update.</p>
    <p>Counter: {{ counter() }}</p>
    <p>Debounced Counter: {{ debouncedCounter() }}</p>
  `,
  styleUrl: './signal-debounce.component.css',
})
export class SignalDebounceComponent {
  counter = signal(0); // signal signal we are going to use as a source.
  debouncedCounter = debouncedComputed(() => this.counter(), { delay: 1000 }); // signal that will be debounced.

  constructor() {
    // simulate irregular updates
    const nextTime = () => Math.random() * 500 + 200;
    const update = () => {
      this.counter.set(this.counter() + 1);
      setTimeout(update, nextTime());
    };
    update();
  }
}


