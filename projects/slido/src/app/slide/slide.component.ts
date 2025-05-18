import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { asyncComputed } from '@se-ng/signal-utils';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript.js';
import { NavSLidesService } from '../nav-slides.service.js';
import { SlidesHandlerService } from '../slides-handler.service.js';
hljs.registerLanguage('typescript', typescript);
const mm = import('micromark');

@Component({
  selector: 'se-slide',
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
    '[document:title]': 'title()'
  }
})
/**
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
      // this timeout is needed to wait for the shadow dom to be created
      // or some other race condition that I'm going to spend time on
      // to figure out
      setTimeout(() => {
        const frag: DocumentFragment = this.elm.shadowRoot;
        const lis = Array.from(frag.querySelectorAll('li'));
        this.slideNav.setCount(lis.length);
        const code = Array.from(frag.querySelectorAll('code'));

        code.forEach(el => {
          hljs.highlightBlock(el);
          el.style.opacity = '1';
        });
      }, 50);
    },
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
    }
  });
}
