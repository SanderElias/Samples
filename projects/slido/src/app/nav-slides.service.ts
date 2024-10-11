import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { injectRoutePart } from './inject-route-part.js';
import { SlidesHandlerService } from './slides-handler.service.js';

@Injectable({
  providedIn: 'root',
})
export class NavSLidesService {
  index = injectRoutePart(2);
  router = inject(Router);
  deck = inject(SlidesHandlerService);
  decklen = computed(() => this.deck.$slides().length - 1);
  lastMove = signal(0);

  #$state = computed(() => {
    const index = +this.index();
    return { index, $liCount: signal(0), $lastLi: signal(-1) };
  });

  $activeLi = () => this.#$state().$lastLi();

  setCount = (count: number) => {
    this.#$state().$liCount.set(count);
    this.#$state().$lastLi.set(this.lastMove()<0?count:0);
  }

  calcNext = (rel) => {
    let nextLi = this.#$state().$lastLi() + rel;

    return nextLi;
  }

  navRel = (rel: number) => {
    const nextLi = this.calcNext(rel);
    const lastLi = this.#$state().$liCount();

    if (nextLi < 0 || nextLi >= lastLi+1) {
      return this.navSlide(rel);
    }
    this.#$state().$lastLi.set(nextLi);
  };

  navSlide = (rel: number) => {
    const { min, max } = Math;
    this.lastMove.set(rel);

    const lastSlide = this.decklen();
    const index = +this.index();
    const next = index + rel;
    this.router.navigate(['/present', min(lastSlide, max(0, next))]);
  };
}
