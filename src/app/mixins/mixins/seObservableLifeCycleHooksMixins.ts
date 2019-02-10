// tslint:disable:no-unused-expression
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';
export type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * extends component with an observable seOnDestroy$ lifecycle hook
 * @constructor
 */
export const seOnDestroy$ = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements OnDestroy {
    private _destroy = new Subject<void>();
    /** observable that emits once on destroy */
    seOnDestroy$ = this._destroy.asObservable();
    ngOnDestroy() {
      super['ngOnDestroy'] && super['ngOnDestroy']();
      this._destroy.next();
      this._destroy.complete();
    }
  };

/** extends component with an observable seAfterContentChecked$ lifecycle hook */
export const seAfterContentChecked$ = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements AfterContentChecked, OnDestroy {
    private _acc = new Subject<void>();
    /** Observable that emits when content is checked */
    seAfterContentChecked$ = this._acc.asObservable();
    ngAfterContentChecked(): void {
      this._acc.next();
      super['ngAfterContentChecked'] && super['ngAfterContentChecked']();
    }
    ngOnDestroy() {
      this._acc.complete();
      super['ngOnDestroy'] && super['ngOnDestroy']();
    }
  };

/** extends component with an observable seAfterContentInit$ lifecycle hook */
export const seAfterContentInit$ = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements AfterContentInit {
    private _afi = new Subject<void>();
    /** `Observable<void>` that emits once and completes afer content init */
    seAfterContentInit$ = this._afi.asObservable();
    ngAfterContentInit(): void {
      // take this to the end off the que, so the template has some time to init.
      Promise.resolve().then(() => {
        this._afi.next();
        this._afi.complete();
      });
      super['ngAfterContentInit'] && super['ngAfterContentInit']();
    }
  };

/** extends component with an observable seAfterViewChecked$ lifecycle hook */
export const seAfterViewChecked$ = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements AfterViewChecked, OnDestroy {
    private _afc = new Subject<void>();
    /** observable that emits after the view is checked */
    seAfterViewChecked$ = this._afc.asObservable();
    ngAfterViewChecked(): void {
      this._afc.next();
      super['ngAfterViewChecked'] && super['ngAfterViewChecked']();
    }
    ngOnDestroy() {
      this._afc.complete();
      super['ngOnDestroy'] && super['ngOnDestroy']();
    }
  };

/** extends component with an observable seAfterViewInit$ lifecycle hook */
export const seAfterViewInit$ = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements AfterViewInit {
    private _avi = new Subject<void>();
    /** observable that emits and completes after view init */
    seAfterViewInit$ = this._avi.asObservable();
    ngAfterViewInit(): void {
      // take this to the end off the que, so the template has some time to init.
      Promise.resolve().then(() => {
        this._avi.next();
        this._avi.complete();
      });
      // tslint:disable-next-line:no-unused-expression
      super['ngAfterViewInit'] && super['ngAfterViewInit']();
    }
  };

/** extends component with an observable seDoCheck$ lifecycle hook */
export const seDoCheck$ = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements DoCheck, OnDestroy {
    private _dc = new Subject<void>();
    /** observable that hits on every round of change detection */
    seDoCheck$ = this._dc.asObservable();
    ngDoCheck(): void {
      this._dc.next();
      super['ngDoCheck'] && super['ngDoCheck']();
    }
    ngOnDestroy() {
      this._dc.complete();
      super['ngOnDestroy'] && super['ngOnDestroy']();
    }
  };

/** extends component with an observable seOnChanges$ lifecycle hook */
export const seOnChanges$ = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements OnChanges, OnDestroy {
    private _oc = new Subject<SimpleChanges>();
    /** observable that fires on changes with a payload of SimpleChanges */
    seOnChanges$ = this._oc.asObservable();
    ngOnChanges(changes: SimpleChanges): void {
      this._oc.next(changes);
      super['ngOnChanges'] && super['ngOnChanges']();
    }
    ngOnDestroy() {
      this._oc.complete();
      super['ngOnDestroy'] && super['ngOnDestroy']();
    }
  };

/** extends component with an observable seOnInit$ lifecycle hook */
export const seOnInit$ = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements OnInit {
    private _init = new Subject<void>();
    /** `Observable<void>` that emites and completes on init. */
    seOnInit$ = this._init.asObservable();
    ngOnInit(): void {
      // take this to the end off the que, so the template has some time to init.
      Promise.resolve().then(() => {
        this._init.next();
        this._init.complete();
      });
      super['ngOnInit'] && super['ngOnInit']();
    }
  };
