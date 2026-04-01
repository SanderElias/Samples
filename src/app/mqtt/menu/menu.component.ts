import { Component, computed, inject } from '@angular/core';

import { LoggedIn } from '../../grid-play/logged-in-user.service';

@Component({
  selector: 'se-menu',
  imports: [],
  template: `
    @if (ready()) {
      @if (loggenId()) {
        <p>Logged in</p>
      } @else {
        <a [href]="'https://auth.eliasweb.nl/ui/login?redirect=' + url()"
          >Login</a
        >
      }
    } @else {
      <p>Loading...</p>
    }
    @endif
  `,
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  #loggedin = inject(LoggedIn);
  #doc = inject(Document);
  url = computed(() => this.#doc.location.href);

  ready = this.#loggedin.ready;
  loggenId = computed(() => this.#loggedin.user() !== undefined);
}
