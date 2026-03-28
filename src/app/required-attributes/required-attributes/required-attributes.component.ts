import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { WaitForItComponent } from './wait-for-it/wait-for-it.component';

@Component({
  selector: 'app-required-attributes',
  templateUrl: './required-attributes.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WaitForItComponent]
})
export class RequiredAttributesComponent implements OnInit {
  reqProps = signal<string[]>([]);
  /** no need to unsub, will be done after 4 */
  fillthem = timer(1000, 1000)
    .pipe(
      take(4),
      tap(() =>
        this.reqProps.update(props => [
          ...props,
          'prop 1' + Math.ceil(Math.random() * 100)
        ])
      )
    )
    .subscribe();

  constructor() {}

  ngOnInit() {}
}
