import { computed, inject, Injectable, signal } from '@angular/core';
import { injectRoutePart } from './inject-route-part.js';
import { SlidesHandlerService } from './slides-handler.service.js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavSLidesService {
  index = injectRoutePart(2);
  router = inject(Router);
  deck = inject(SlidesHandlerService);
  decklen = computed(() => this.deck.$slides().length -1 );

  #$state = computed(() => {
    const index = +this.index();
    const lastSlide = this.decklen();
    return { index, lastSlide,
      $liCount : signal(0),
     };
  });

  #activeLi = computed(() => {
    const liCount = this.#$state().$liCount();
    const $active = signal(-1)
    return { liCount, $active };
  });

  $activeLi = this.#activeLi().$active.asReadonly();

  setCount = (count: number) => this.#$state().$liCount.set(count);



  constructor() {
    console.log('NavSLidesService');
  }

  navRel = (rel: number) => {
    const lastSlide = this.decklen();
    const { min, max } = Math;

    console.log('navRel', rel, );

    this.router.navigate(['/present', min(lastSlide, max(0, +this.index() + rel))]);
  }

}
