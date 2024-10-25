import { Component, ElementRef, Injector, OnDestroy, OnInit, inject } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';
import { combineLatest, fromEvent, Subject } from 'rxjs';
import { filter, switchMap, tap, throttleTime } from 'rxjs/operators';
import { CodeSampleComponent } from '../code-sample/code-sample.component';
import { ShowCompComponent } from '../show-comp/show-comp.component';
import { SlidesService } from '../slides.service';
import { ScullyContentModule } from '@scullyio/ng-lib';

@Component({
    selector: 'view-slide',
    template: ` <scully-content></scully-content> `,
    styleUrls: ['./vied-slide.component.css'],
    imports: [ScullyContentModule],

})
export class ViewSlideComponent implements OnInit, OnDestroy {
  private elmRef = inject(ElementRef);
  private sls = inject(SlidesService);
  private router = inject(Router);

  init$ = new Subject<void>();
  elm = this.elmRef.nativeElement;
  subscriber = this.init$
    .pipe(
      filter(() => !!this.elm),
      switchMap(() => combineLatest([this.sls.slides$, fromEvent<KeyboardEvent>(document, 'keyup')])),
      filter(([_, { key }]) => key === 'ArrowRight' || key === 'ArrowLeft'),
      throttleTime(100),
      tap(([slides, { key }]) => {
        const currentIndex = slides.findIndex(({ filename }) => filename.replace('.md', '') === this.router.url.slice(1));
        const nextSlide = key === 'ArrowLeft' ? Math.max(0, currentIndex - 1) : Math.min(slides.length - 1, currentIndex + 1);
        this.router.navigate(['/' + slides[nextSlide].filename.replace('.md', '')]);
      })
    )
    .subscribe();

  constructor() {
    if (!customElements.get('code-editor')) {
      const dyn = createCustomElement(CodeSampleComponent, { injector });
      customElements.define('code-editor', dyn);
      const sh = createCustomElement(ShowCompComponent, { injector });
      customElements.define('show-component', sh);
    }
  }

  ngOnInit(): void {
    this.init$.next();
    this.init$.complete();
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
