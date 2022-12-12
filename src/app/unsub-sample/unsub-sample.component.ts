import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, debounceTime, map, ReplaySubject, take } from 'rxjs';

@Component({
  selector: 'se-unsub-sample',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Unsubscribe sample</h1>
    <p>Click the buttons to navigate to the next or previous id.</p>
    <div *ngIf="vm$ | async as vm">
      <button (click)="change$.next(1)">up</button>
      <p>id: {{vm.id}}</p>
      <button (click)="change$.next(-1)">down</button>
    </div>
    <style>
      div {
        display: flex;
        flex-direction: row;
        height: 3rem;
        gap: .5rem;
        justify-items: center;
      }
    </style>
  `,
})
export class UnsubSampleComponent implements OnDestroy {
  route = inject(ActivatedRoute)
  router = inject(Router);

  id$ = new BehaviorSubject(120); // default ID, normally overwritten by the route.
  change$ = new BehaviorSubject(0); // default change, normally overwritten by the buttons.

  /** using a normal class field to holde the subscription */
  sub = this.route.params.pipe(
    /** read the initial value */
    map(params => parseInt(params.id, 10)),
    take(1), // Only take the first value in, as we don't want to cause an infinite loop.
  )
    /**
     * I'm subscribing here, because this is a sample on how to unsubscribe properly.
     * Normally you would use the async pipe, and you don't need to subscribe.
     * In this case, I could have just added the id to the vm$ observable!
     */
    .subscribe({
      next: (id) => { (!Number.isNaN(id)) && this.id$.next(id) }
    })


  vm$ = combineLatest({
    id: this.id$,
    change: this.change$
  }).pipe(
    debounceTime(10), // debounce the change, so that we don't get multiple navigations.
    map(({ id, change }) => {
      const goTo = id + change;
      console.log({ id, change, goTo })
      if (goTo > 0 && goTo !== id) {
        this.router.navigate(['unsubSample', goTo])
        this.change$.next(0) // reset the change
        this.id$.next(goTo)
      }
      return { id, goTo, change }
    })
  )

  ngOnDestroy() {
    this.sub.unsubscribe() // unsubscribe when the component is destroyed. 1 line of code...
  }

}
