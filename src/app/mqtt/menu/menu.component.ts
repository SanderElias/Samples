import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DOCUMENT,
  inject} from '@angular/core';
import { RouterLink } from '@angular/router';

import { LoggedIn } from '../../grid-play/logged-in-user.service';

@Component({
  selector: 'se-menu',
  imports: [RouterLink],
  template: `
    @if (ready()) {
      @if (loggenId()) {
        <a [routerLink]="['./power']">stroom meter beheer</a>
        <a [routerLink]="['./list']">apparaten lijst</a>
      } @else {
        <a [href]="'https://auth.eliasweb.nl/ui/login?rd=' + url()">Login</a>
      }
    } @else {
      <p>Loading...</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  #loggedin = inject(LoggedIn);
  #doc = inject(DOCUMENT);
  url = computed(() => this.#doc.location.href);

  ready = this.#loggedin.ready;
  loggenId = computed(() => this.#loggedin.user() !== undefined);
}
