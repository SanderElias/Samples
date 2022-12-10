import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'dist/samples/chunk-OGFLKNU6';
import { combineLatest, fromEvent, map, merge, Observable, startWith, switchMap, take } from 'rxjs';
import { Replacer } from 'yaml/dist/doc/Document';

@Component({
  selector: 'se-unsub-sample',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Unsub sample</h1>
    <button id="up">up</button>
    <button id="down">down</button>
    <p>id: {{id$ | async}}</p>
  `,
  styleUrls: ['./unsub-sample.component.css']
})
export class UnsubSampleComponent implements OnDestroy {
  route = inject(ActivatedRoute)
  router = inject(Router);
  elm = inject(ElementRef).nativeElement as HTMLElement

  init$ = new ReplaySubject(1)

  up$ = this.init$.pipe(
    map(() => this.elm.querySelector('#up') as HTMLButtonElement),
    switchMap((elm: HTMLButtonElement) => fromEvent(elm, 'click')),
    map(() => 1),
    startWith(0)
  ) as Observable<number>

  down$ = this.init$.pipe(
    map(() => this.elm.querySelector('#down') as HTMLButtonElement),
    switchMap((elm: HTMLButtonElement) => fromEvent(elm, 'click')),
    map((x) => -1),
    startWith(0)
  ) as Observable<number>

  initialId$ = this.route.params.pipe(
    map(params => parseInt(params.id, 10)),
    take(1), // Only take the first value in, as we don't want to cause an infinite loop.
  )

  id$ = new ReplaySubject(1)

  sub = combineLatest({
    id: this.id$,
    change: merge(this.up$, this.down$)
  }).subscribe(({ id, change }) => {
    const goTo = id + change;
    console.log({ id, change, goTo })
    if (goTo > 0 && goTo !== id) {
      this.router.navigate(['unsubSample', goTo])
    }
  })

  ngOnInit() {
    this.init$.next()
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
