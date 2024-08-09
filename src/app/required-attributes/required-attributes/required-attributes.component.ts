import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { WaitForItComponent } from './wait-for-it/wait-for-it.component';

@Component({
  selector: 'app-required-attributes',
  templateUrl: './required-attributes.component.html',
  styles: [],
  standalone: true,
  imports: [WaitForItComponent],
})
export class RequiredAttributesComponent implements OnInit {
  reqProps: string[] = [];
  /** no need to unsub, will be done after 4 */
  fillthem = timer(1000, 1000)
    .pipe(
      take(4),
      tap(n => this.reqProps.push('prop 1' + Math.ceil(Math.random() * 100)))
    )
    .subscribe();

  constructor() {}

  ngOnInit() {}
}
