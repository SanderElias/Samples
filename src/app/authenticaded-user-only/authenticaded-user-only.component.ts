import { Component, DestroyRef, effect, inject } from '@angular/core';
import { LoggedIn } from '../grid-play/logged-in-user.service';

@Component({
  selector: 'authenticated-user-only',
  imports: [],
  template: `
    @if (user()) {
      <ng-content />
    } @else {
      <p>This only works when you are authenticated</p>
      <p>
        Please log in at
        <a href="https://auth.eliasweb.nl">https://auth.eliasweb.nl</a>
      </p>
    }
  `,
  styleUrl: './authenticaded-user-only.component.css'
})
export class AuthenticadedUserOnlyComponent {
  #loggedIn = inject(LoggedIn);
  #_des = inject(DestroyRef).onDestroy(() => {
    // clear the refresh timeout when the component is destroyed.
    this.lastVerify && clearTimeout(this.lastVerify);
  });
  user = this.#loggedIn.user;
  #verify = async () => {
    const res = await this.#loggedIn.refreshSession();
    console.log(
      'Session refresh triggered from AuthenticadedUserOnlyComponent',
      res
    );
    // Schedule the next verification in 4 minutes (less than the typical 5-minute session timeout)
    this.lastVerify = setTimeout(this.#verify, 4 * 60 * 1000);
  };
  lastVerify = undefined as ReturnType<typeof setTimeout> | undefined;

  _ = effect(() => {
    if (this.user()) {
      console.log('User is logged in, starting session refresh cycle');
      this.#verify();
    } else {
      console.log('User is not logged in, stopping session refresh cycle');
      if (this.lastVerify) {
        clearTimeout(this.lastVerify);
        this.lastVerify = undefined;
      }
    }
  });
}
