import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { SlidesHandlerService } from '../slides-handler.service';
import { asyncComputed } from '@se-ng/signalUtils';

const mm = import('micromark');


@Component({
  selector: 'se-slide',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div [innerHTML]="html()"></div>
    </section>
  `,
  styleUrl: './slide.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
/**
 * @deprecated use something else?
 * @description SlideComponent is a standalone component that renders a slide
 * @export
 * @class SlideComponent
 */
export class SlideComponent {
  deck = inject(SlidesHandlerService);
  /** the number of trhe slide to show */
  index = input.required<number>();

  slide = computed(() => this.deck.$slides()[this.index()]);

  html = asyncComputed(async () => {
    console.log('rendering slide', this.index());
    const content = this.slide()?.content;
    if (!content) {
      return '';
    }
    const { micromark } = await mm;
    return micromark(content);
  }, '');
}
