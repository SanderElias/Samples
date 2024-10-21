import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { asyncComputed } from '@se-ng/signal-utils';
import { extractToml } from '@std/front-matter';
import { stringify } from '@std/toml';
import { FileHandlerService } from './file-handler.service';

const separator = '\n---NextSlide\n';
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
    const slides = signal(parseContentToSlides(content));
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
    slides[index] = { content, index, changed: true };
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
    if (slides.length === 1) {
      throw new Error('Cannot remove last slide');
    }
    if (slides[index] === undefined) {
      return;
    }
    slides.splice(index, 1);
    state.slides.set(slides);
  };

  constructor() {
    effect(() => {
      const slides = this.$slides();
      if (slides.length === 0) {
        return; // no slides yet, nothing to do. Also, we don't allow removing the last slide
      }
      const orgSlides = parseContentToSlides(this.file.$state().content());
      const changed =
        slides.length !== orgSlides.length || !slides.every((slide, index) => slide.content === orgSlides[index].content);
      if (changed) {
        console.log('changed', changed);
      }
    });
  }
}

const parseContentToSlides = (content: string) => {
  return content
    .split(separator)
    .filter(content => content.trim() !== '')
    .map((content, index) => parseIntoSlide(content, index));
};

interface Slide {
  content: string;
  title?: string;
  description?: string;
  index?: number;
}
const parseIntoSlide = (content: string, index: number): Slide => {
  try {
    const { frontMatter, attrs, body } = extractToml(content);
    return {
      content: body,
      index,
      ...(attrs ?? {}),
    };
  } catch (e) {
    return {
      content,
      index,
    };
  }
};
const parseIntoText = (slide: Slide) => {
  const { content, ...data } = slide;
  data.title ??= 'slide';
  const toml = stringify(data);
  const result = `---toml\n${toml}---\n${content}`;
  return result;
};
