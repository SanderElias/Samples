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
export class SlideComponent {
  deck = inject(SlidesHandlerService);
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
