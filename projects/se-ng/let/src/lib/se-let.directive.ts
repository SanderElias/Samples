// tslint:disable: no-unused-expression
import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef, ChangeDetectorRef, inject } from '@angular/core';
import { isObservable, Subscriber, Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[seLet]'
})
export class SeLetDirective<T> implements OnInit, OnDestroy {
  private templateRef = inject<TemplateRef<any>>(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);
  private cdr = inject(ChangeDetectorRef);

  private context = { $implicit: undefined, seLet: undefined } as {
    $implicit: T | unknown;
    seLet: T | unknown;
  };
  private sub!: Subscription;
  @Input() set seLet(x: Observable<T> | unknown) {
    this.assign(x);
  }
  @Input() set seLetObserve(x: Observable<T> | unknown) {
    this.assign(x);
  }
  @Input() set seLetOn(x: Observable<T> | unknown) {
    this.assign(x);
  }

  assign(value: Observable<T> | unknown) {
    this.sub && this.sub.unsubscribe();
    if (isObservable(value)) {
      this.sub = value.pipe(tap(() => this.cdr.markForCheck())).subscribe((data: any) => {
        this.context.$implicit = data;
        this.context.seLet = data;
      });
    } else {
      this.context.$implicit = value;
      this.context.seLet = value;
    }
  }

  constructor() {
    this.assign = this.assign.bind(this);
  }

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
