import { afterRender, afterRenderEffect, Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { asyncComputed } from '@se-ng/signalUtils';
import { SlidesHandlerService } from '../slides-handler.service.js';
import { NavSLidesService } from '../nav-slides.service.js';
import { ElementRef } from 'dist/extreme-lazy-test/browser/chunk-QDRWWDB2.js';
import e from 'express';

const mm = import('micromark');

@Component({
  selector: 'se-slide',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div id="slide" [innerHTML]="html()"></div>
    </section>
  `,
  styleUrl: './slide.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
  host: {
    '[document:title]': 'title()',
  },
})
/**
 * @deprecated use something else?
 * @description SlideComponent is a standalone component that renders a slide
 * @export
 * @class SlideComponent
 */
export class SlideComponent {
  deck = inject(SlidesHandlerService);
  san = inject(DomSanitizer)
  slideNav = inject(NavSLidesService);
  elm:HTMLDivElement = inject(ElementRef).nativeElement
  titleService = inject(Title)
  /** the number of trhe slide to show */
  index = input.required<number>();

  slide = computed(() => this.deck.$slides()[this.index()] ?? {});
  title = computed(() => {
    const slide = this.slide();
    return `${slide?.index} ${slide?.title ?? ''}`;
  });
  html = asyncComputed(async () => {
    const slide = this.slide() ?? {};
    const { index, title, content } = slide;
    if (!content) {
      return '';
    }
    this.titleService.setTitle(this.title());
    const { micromark } = await mm;
    const html= micromark(content, { allowDangerousHtml: true });
    return this.san.bypassSecurityTrustHtml( html);
  }, '');

  _ = afterRender( { read:
    () => {
      const lis = Array.from(this.elm.querySelectorAll('li'));
      this.slideNav.setCount(lis.length);
  }})

  _ref = afterRenderEffect({
    write: () => {
      const lastActive = this.slideNav.$activeLi();
      const lis = Array.from(this.elm.querySelectorAll('li'));
      lis.forEach((li, i) => {
        if (lastActive <= i) {
          li.classList.remove('revealed');
        }else {
          li.classList.add('revealed');
        }
      });
    }
  })
}
