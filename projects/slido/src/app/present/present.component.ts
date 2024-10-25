import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavSLidesService } from '../nav-slides.service.js';

@Component({
    selector: 'se-present',
    imports: [RouterOutlet],
    template: `<router-outlet />
    <section>
      <span class="logos--mastodon-icon"></span>
      <span> {{"@sanderelias@mastodon.social"}}</span>
    </section>`,
    styleUrl: './present.component.css',
    host: {
        '(document:keydown)': 'keyHandler($event)',
        '(document:contextmenu)': 'navRel(-1);$event.preventDefault();',
        '(document:click)': 'navRel(1);$event.preventDefault();',
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentComponent {
  router = inject(Router);
  navSlides = inject(NavSLidesService);


  keyHandler = async (e: KeyboardEvent) => {
    // e.preventDefault();
    const { key } = e;

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
