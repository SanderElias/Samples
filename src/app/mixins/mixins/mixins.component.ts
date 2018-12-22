import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, from, of } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

type Constructor<T = {}> = new (...args: any[]) => T;

export const onDestroy = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements OnDestroy {
    private _destroy = new Subject<void>();

    /** observable that emits once on destroy */
    destroy$ = this._destroy.asObservable();

    ngOnDestroy() {
      // tslint:disable-next-line:no-unused-expression
      super['ngOnDestroy'] && super['ngOnDestroy']();
      this._destroy.next();
    }
  };

export const onInit = <T extends Constructor>(base: T = class {} as T) =>
  class OnInitSubject extends base implements OnInit {
    private _init = new Subject<void>();
    onInit$ = this._init.asObservable();

    ngOnInit(): void {
      this._init.next();
      // tslint:disable-next-line:no-unused-expression
      super['ngOniit'] && super['ngOnInit']();
    }
  };

@Component({
  selector: 'app-mixins',
  templateUrl: './mixins.component.html',
  styles: []
})
export class MixinsComponent extends onDestroy(onInit()) {
  demo$ = this.onInit$.pipe(
    switchMap(() => of([1, 2, 3, 4])),
    tap(r => console.log('init Fired', r))
  );

  sub = this.demo$.subscribe();
  constructor() {
    super();

    this.destroy$.subscribe(
      () => console.log('destroyd'),
      () => console.log('err'),
      () => console.log('destry complete')
    );
  }
}
