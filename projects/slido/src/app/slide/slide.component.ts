import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { asyncComputed } from '@se-ng/signalUtils';
import { NavSLidesService } from '../nav-slides.service.js';
import { SlidesHandlerService } from '../slides-handler.service.js';
import { set } from 'idb-keyval';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  san = inject(DomSanitizer);
  slideNav = inject(NavSLidesService);
  elm = inject(ElementRef).nativeElement;
  titleService = inject(Title);
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
    const html = micromark(content, { allowDangerousHtml: true });
    return this.san.bypassSecurityTrustHtml(html);
  }, '');

  _ = afterRenderEffect({
    read: () => {
      const index = this.index();
      setTimeout(() => {
        const frag: DocumentFragment = this.elm.shadowRoot;
        const lis = Array.from(frag.querySelectorAll('li'));
        this.slideNav.setCount(lis.length);
      }, 50);
    },
  });

  _ref = afterRenderEffect({
    write: () => {
      const lastActive = this.slideNav.$activeLi();
      const frag: DocumentFragment = this.elm.shadowRoot;
      const lis = Array.from(frag.querySelectorAll('li'));
      lis.forEach((li, i) => {
        if (i < lastActive) {
          li.classList.add('revealed');
        } else {
          li.classList.remove('revealed');
        }
      });
    },
  });
}
