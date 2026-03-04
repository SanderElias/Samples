import { isPlatformBrowser } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { computed, inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedIn {
  #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  #userRs = httpResource<AutheliaStatus>(() =>
    this.#isBrowser
      ? {
          url: 'https://auth.eliasweb.nl/api/state',
          withCredentials: true
        }
      : undefined
  );

  user = computed(() => {
    if (!this.#userRs.hasValue()) return undefined;
    const userName = this.#userRs.value()?.data?.username || '';
    return userName ? userName : undefined; // if username is empty string, treat as not logged in, so return undefined instead
  });

  #userDetailsRs = httpResource<LldapUser>(() =>
    this.user()
      ? { url: 'https://notify.eliasweb.nl/me', withCredentials: true }
      : undefined
  );

  /**
   * Refreshes the authentication session by triggering a request to the auth server.
   * This updates the JWT cookie with a fresh session.
   *
   * @returns A promise that resolves to `true` if the session was successfully refreshed,
   *          or `false` if the refresh failed or if not running in a browser environment.
   */
  async refreshSession() {
    if (!this.#isBrowser) return false;
    // trigger a request to the auth server to refresh the session, and thus the JWT cookie
    const res = await fetch('https://auth.eliasweb.nl/api/authz/ext-authz', {
      method: 'get',
      credentials: 'include'
    });
    if (!res.ok) {
      return false;
    }
    return true;
  }

  userDetails = computed(() =>
    this.#userDetailsRs.hasValue() ? this.#userDetailsRs.value() : undefined
  );
}

export interface AutheliaStatus {
  status: string;
  data: Data;
}

export interface Data {
  username: string;
  authentication_level: number;
  factor_knowledge: boolean;
  default_redirection_url: string;
}

export interface LldapUser {
  id: string;
  email: string;
  displayName: string;
  creationDate: string;
  uuid: string;
  groups: { id: number; displayName: string }[];
}
