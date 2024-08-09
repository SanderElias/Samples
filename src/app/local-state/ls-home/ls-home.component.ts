import { AsyncPipe,NgIf } from '@angular/common';
import { Component, ElementRef, inject,OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { filter, map, pluck, switchMap } from 'rxjs/operators';

interface LocalState {
  count?: number;
  message?: string;
  buttons?: QueryList<ElementRef<HTMLButtonElement>>;
}

@Component({
  selector: 'app-ls-home',
  template: `
    <h2>test some state</h2>
    @if (vm$ | async; as vm) {
      <button #b (click)="updateCounterWith(-1)">-1</button>
      <span>{{ vm.count }}</span>
      <button #b (click)="updateCounterWith(1)">+1</button>
      <!-- <button #b *ngIf="vm.count%2" (click)="updateCounterWith(2)">+2</button> -->
    }
  `,
  styles: [],
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class LsHomeComponent implements OnInit {
  private route = inject(ActivatedRoute);

  localState$ = new BehaviorSubject<LocalState>({
    count: 0,
  });

  id$ = this.route.params.pipe(
    pluck('id'),
    map(id => +id)
  );

  clicks$ = this.localState$
    .pipe(
      pluck('buttons'),
      filter((ql): ql is QueryList<ElementRef<HTMLButtonElement>> => ql instanceof QueryList),
      map(ql => ql.toArray().map(b => b.nativeElement)),
      // tap(btns => btns.forEach(b => console.log(b))),
      switchMap(buttons => fromEvent(buttons, 'click')),
      // tap(cl => console.log({ cl }))
    )
    .subscribe(console.log);

  @ObservableInput('localState$')
  @ViewChildren('b', { read: ElementRef })
  buttons: QueryList<HTMLButtonElement> | undefined;

  vm$ = combineLatest({ id: this.id$, state: this.localState$ }).pipe(
    map(preVm => ({
      id: preVm.id,
      count: preVm.state.count || 0,
    })),
    // tap(console.log)
  );

  ngOnInit(): void {}

  updateCounterWith(value: number) {
    this.localState$.next({
      ...this.localState$.value,
      count: this.localState$.value.count ?? 0 + value,
    });
  }
}

/** use a symbol to avoid name collision with the component */
const subjProp = Symbol('subjectProp');
/**
 * Helper that wraps an input into an observable
 */
export function ObservableInput(input: string): any {
  return (target: any, propertyName: string) => {
    Object.defineProperty(target, propertyName, {
      set: function (this: any, x) {
        const rs = this[input] as BehaviorSubject<any>;
        if (x) {
          rs.next({ ...rs.value, [propertyName]: x });
        }
      },
      get: function (this: any) {
        throw new Error(`Don't read the "${propertyName}" directly, instead take it from the "${input}" behaviourSubject`);
      },
      configurable: false,
      enumerable: true,
    });
  };
}
