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
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

export type Constructor<T = {}> = new (...args: any[]) => T;

const _acc = Symbol('_acc');
const _aci = Symbol('_aci');
const _avc = Symbol('_avc');
const _avi = Symbol('_avi');
const _dc = Symbol('_dc');
const _oc = Symbol('_oc');
const _oi = Symbol('_oi');
const _od = Symbol('_od');

/**
 * extends component with an observable seOnDestroy$ lifecycle hook
 */
export const seOnDestroy = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements OnDestroy {
    [_od] = new Subject<void>();
    /** observable that emits once on destroy */
    seOnDestroy$ = this[_od].asObservable();
    ngOnDestroy() {
      super['ngOnDestroy'] && super['ngOnDestroy']();
      this[_od].next();
      this[_od].complete();
    }
  };

/** extends component with an observable seAfterContentChecked$ lifecycle hook */
export const seAfterContentChecked = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements AfterContentChecked, OnDestroy {
    [_acc] = new Subject<void>();
    /** Observable that emits when content is checked */
    seAfterContentChecked$ = this[_acc].asObservable();
    ngAfterContentChecked(): void {
      this[_acc].next();
      super['ngAfterContentChecked'] && super['ngAfterContentChecked']();
    }
    ngOnDestroy() {
      this[_acc].complete();
      super['ngOnDestroy'] && super['ngOnDestroy']();
    }
  };

/** extends component with an observable seAfterContentInit$ lifecycle hook */
export const seAfterContentInit = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements AfterContentInit {
    [_aci] = new Subject<void>();
    /** `Observable<void>` that emits once and completes afer content init */
    seAfterContentInit$ = this[_aci].asObservable();
    ngAfterContentInit(): void {
      // take this to the end off the que, so the template has some time to init.
      Promise.resolve().then(() => {
        this[_aci].next();
        this[_aci].complete();
      });
      super['ngAfterContentInit'] && super['ngAfterContentInit']();
    }
  };

/** extends component with an observable seAfterViewChecked$ lifecycle hook */
export const seAfterViewChecked = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements AfterViewChecked, OnDestroy {
    [_avc] = new Subject<void>();
    /** observable that emits after the view is checked */
    seAfterViewChecked$ = this[_avc].asObservable();
    ngAfterViewChecked(): void {
      this[_avc].next();
      super['ngAfterViewChecked'] && super['ngAfterViewChecked']();
    }
    ngOnDestroy() {
      this[_avc].complete();
      super['ngOnDestroy'] && super['ngOnDestroy']();
    }
  };

/** extends component with an observable seAfterViewInit$ lifecycle hook */
export const seAfterViewInit = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements AfterViewInit {
    [_avi] = new Subject<void>();
    /** observable that emits and completes after view init */
    seAfterViewInit$ = this[_avi].asObservable();
    ngAfterViewInit(): void {
      // take this to the end off the que, so the template has some time to init.
      Promise.resolve().then(() => {
        this[_avi].next();
        this[_avi].complete();
      });
      // tslint:disable-next-line:no-unused-expression
      super['ngAfterViewInit'] && super['ngAfterViewInit']();
    }
  };

/** extends component with an observable seDoCheck$ lifecycle hook */
export const seDoCheck = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements DoCheck, OnDestroy {
    [_dc] = new Subject<void>();
    /** observable that hits on every round of change detection */
    seDoCheck$ = this[_dc].asObservable();
    ngDoCheck(): void {
      this[_dc].next();
      super['ngDoCheck'] && super['ngDoCheck']();
    }
    ngOnDestroy() {
      this[_dc].complete();
      super['ngOnDestroy'] && super['ngOnDestroy']();
    }
  };

/** extends component with an observable seOnChanges$ lifecycle hook */
export const seOnChanges = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements OnChanges, OnDestroy {
    [_oc] = new Subject<SimpleChanges>();
    /** observable that fires on changes with a payload of SimpleChanges */
    seOnChanges$ = this[_oc].asObservable();
    ngOnChanges(changes: SimpleChanges): void {
      super['ngOnChanges'] && super['ngOnChanges'](changes);
      this[_oc].next(changes);
    }
    ngOnDestroy() {
      this[_oc].complete();
      super['ngOnDestroy'] && super['ngOnDestroy']();
    }
  };

/** extends component with an observable seOnInit$ lifecycle hook */
export const seOnInit = <T extends Constructor>(base: T = class {} as T) =>
  class extends base implements OnInit {
    [_oi] = new Subject<void>();
    /** `Observable<void>` that emites and completes on init. */
    seOnInit$ = this[_oi].asObservable();
    ngOnInit(): void {
      // take this to the end off the que, so the template has some time to init.
      Promise.resolve().then(() => {
        this[_oi].next();
        this[_oi].complete();
      });
      super['ngOnInit'] && super['ngOnInit']();
    }
  };
