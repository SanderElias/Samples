import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { injectRoutePart } from '../inject-route-part';
import { SlidesHandlerService } from '../slides-handler.service';

@Component({
  selector: 'se-present',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet />
    <section>
      <span class="logos--mastodon-icon"></span>
      <span> {{"@sanderelias@mastodon.social"}}</span>
    </section>`,
  styleUrl: './present.component.css',
  host: {
    '(document:keydown)': 'keyHandler($event)',
    '(document:contextmenu)': 'navRel(-1);$event.preventDefault()',
    '(document:click)': 'navRel(1);$event.preventDefault()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentComponent {
  index = injectRoutePart(2);
  router = inject(Router);
  deck = inject(SlidesHandlerService);

  keyHandler = async (e: KeyboardEvent) => {
    const { key } = e;
    const lastSlide = this.deck.$slides().length - 1;

    switch (key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        this.navRel(1);

        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        this.navRel(-1);
        break;
      case 'Home':
        this.router.navigate(['/overview']);
        break;
    }
  };

  navRel = (rel: number) => {
    const lastSlide = this.deck.$slides().length - 1;
    const { min, max } = Math;

    this.router.navigate(['/present', min(lastSlide, max(0, +this.index() + rel))]);
  }

}
