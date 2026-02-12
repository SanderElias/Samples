import { computed, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggedIn {
  #userRs = httpResource<AutheliaStatus>(() => ({
    url: 'https://auth.eliasweb.nl/api/state',
    mode: 'cors',
    credentials: 'include'
  }));

  user = computed(() =>
    this.#userRs.hasValue() ? this.#userRs.value()?.data?.username : undefined
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
