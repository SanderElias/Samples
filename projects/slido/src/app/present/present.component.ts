import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavSLidesService } from '../nav-slides.service.js';

@Component({
  selector: 'se-present',
  imports: [RouterOutlet],
  template: `<router-outlet />
    <section>
      <span class="logos--bsky-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bluesky" viewBox="0 0 16 16">
  <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
</svg></span>
      <span> {{ '@sanderelias.nl' }}</span>
    </section>`,
  styleUrl: './present.component.css',
  host: {
    '(document:keydown)': 'keyHandler($event)',
    '(document:contextmenu)': 'navRel(-1);$event.preventDefault();',
    '(document:click)': 'navRel(1);$event.preventDefault();'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentComponent {
  router = inject(Router);
  navSlides = inject(NavSLidesService);

  keyHandler = async (e: KeyboardEvent) => {
    // e.preventDefault();
    const { key } = e;
    // @ts-expect-error
    const rootStyles = document.querySelector(':root').style;
    const curSize = +rootStyles.getPropertyValue('--chars-wide-aim') || 63;
    switch (key) {
      case '=':
      case '+':
        rootStyles.setProperty('--chars-wide-aim', `${curSize - 0.5}`);
        break;
      case '-':
        rootStyles.setProperty('--chars-wide-aim', `${curSize + 0.5}`);
        break;
      case '*':
        rootStyles.setProperty('--chars-wide-aim', `${63}`);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        this.navRel(1);

        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        this.navRel(-1);
        break;
      case 'PageDown':
        this.navSlides.navSlide(1);
        break;
      case 'PageUp':
        this.navSlides.navSlide(-1);
        break;
      case 'Home':
        this.router.navigate(['/overview']);
        break;
    }
  };

  navRel = (rel: number) => this.navSlides.navRel(rel);
}
