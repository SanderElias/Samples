import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal
} from '@angular/core';

@Component({
  selector: 'se-flash-cell',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: inline-block;
        width: 100%;
      }
      :host(.flash) {
        animation: flashBg 600ms ease;
      }
      @keyframes flashBg {
        from {
          background-color: yellow;
        }
        to {
          background-color: transparent;
        }
      }
    `
  ],
  host: {
    '[class.flash]': 'showFlash()'
  }
})
export class FlashCellComponent {
  #el = inject(ElementRef) as ElementRef<HTMLElement>;
  #des = inject(DestroyRef);
  protected readonly showFlash = signal(false);
  #timer?: NodeJS.Timeout;
  #observer = typeof MutationObserver !== 'undefined' ? new MutationObserver(() => {
    this.showFlash.set(true);
    if (this.#timer) clearTimeout(this.#timer);
    this.#timer = setTimeout(() => this.showFlash.set(false), 600);
  }) : undefined;

  // connect the observer once after the next render (useful for hydration / SSR scenarios)
  #__ = afterNextRender(() => {
    this.#observer?.observe(this.#el.nativeElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  // cleanup on teardown
  #_ = this.#des.onDestroy(() => {
    this.#observer?.disconnect();
    clearTimeout(this.#timer);
  });
}
