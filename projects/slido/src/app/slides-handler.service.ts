import { computed, inject, Injectable, signal, effect } from '@angular/core';
import { FileHandlerService } from './file-handler.service';
import { asyncComputed } from '@se-ng/signalUtils';
import { constants } from 'node:crypto';

@Injectable({
  providedIn: 'root',
})
export class SlidesHandlerService {
  file = inject(FileHandlerService);

  $state = asyncComputed(async () => {
    const content = this.file.$state().content();
    if (!content) {
      return;
    }
    const slides = signal(content.split('\n---NextSlide\n').map(content => ({ content })));
    return {
      name: this.file.$state().name,
      slides,
    };
  });

  $slides = computed(() => this.$state()?.slides() || []);

  addSlide = (index: number, content = '') => {
    const state = this.assertState(this.$state());
    const slides = [...state.slides()];
    if (slides[index] !== undefined) {
      throw new Error('Slide already exists');
    }
    slides[index] = { content };
    state.slides.set(slides);
  };

  assertState = state => {
    if (!state) {
      throw new Error('No state');
    }
    return state;
  };

  removeSlide = (index: number) => {
    const state = this.assertState(this.$state());
    const slides = [...state.slides()];
    if (slides[index] === undefined) {
      return;
    }
    slides.splice(index, 1);
    state.slides.set(slides);
  };

  constructor() {
    effect(() => {
      const original = this.file.$state().content();
      const newContent = this.$slides().map(slide => slide.content).join('\n---NextSlide\n');
      if (newContent && original !== newContent) {
        // this.file.$state().content.set(newContent);
        console.log('content changed', newContent);
        this.file.save(newContent);
      }
    });
  }
}
