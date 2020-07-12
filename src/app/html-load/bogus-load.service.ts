import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BogusLoadService {
  constructor() {}

  /**
   * Normally you use some async loaded,
   * here I just mimic that by returning an
   * delayed observable
   */
  load(url: string) {
    const html = `
    <h1> loaded from ${url}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    </script>

    `;

    return of(html).pipe(delay(1000));
  }
}
