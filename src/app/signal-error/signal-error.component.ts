import { Component, computed, signal } from '@angular/core';
import { asyncComputed } from 'src/utils/signals/async-computed';

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
  `,
  styleUrl: './signal-error.component.css',
})
export default class SignalErrorComponent {
  $count = signal(10);

  even = async n => {
    await new Promise(r => setTimeout(r, 250));
    if (n % 2 === 0) {
      return n;
    } else {
      throw new Error('Not even');
    }
  };

  $result = asyncComputed(async () => {
    const c = this.$count();
    try {
      return await this.even(c);
    } catch (error: any) {
      console.error(error);
      return `Error: ${error.message}`;
    }
  });

  changeCount = (n = 1) => this.$count.update(v => v + n);
}
