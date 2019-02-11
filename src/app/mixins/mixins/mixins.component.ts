import { Component } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { seAfterContentChecked$, seOnDestroy$, seOnInit$ } from './seObservableLifeCycleHooksMixins';

@Component({
  selector: 'app-mixins',
  templateUrl: './mixins.component.html',
  styles: []
})
export class MixinsComponent extends seOnDestroy$(seOnInit$(seAfterContentChecked$())) {
  /** demo, this is subscribed in the template by asyncPipe */
  demo$ = this.seOnInit$.pipe(
    switchMap(() => of([1, 2, 3, 4])),
    tap(r => console.log('init Fired', r))
  );

  /** I don't need to unsubscribe, all life cycle hooks are completed on destroy */
  updateSomethingSub = this.seAfterContentChecked$.pipe(tap(() => console.log('content is checked'))).subscribe({
    complete() {
      console.log('seAfterContentChecked$ is completed');
    }
  });

  /** I don't need to unsubscribe, all lifecycle hooks are completed on destroy */
  onDestroySub = this.seOnDestroy$.subscribe(
    () => console.log('onDestroy fired.'),
    () => console.log('err'),
    () => console.log('onDestroy completed')
  );

  constructor() {
    super();
  }
}
