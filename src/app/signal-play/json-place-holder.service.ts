import { Injectable, Signal } from '@angular/core';
import { resource } from '@se-ng/signal-utils';


@Injectable({
  providedIn: 'root',
})
export class JsonPlaceHolderService {
  /**
   * note that we cache the complete list of users here
   * While this is fine in a sample (where we have 10),
   *  in a real app there might be millions of users,
   * storing those in memory, or even fetching them all at once
   * is a terrible idea.
   */
  usersResource = resource({
    loader: loadUsers,
  });

  getUser = (id: Signal<number>) =>
    resource({
      request: id,
      loader: loadUser,
    });

  getUserById = (id: Signal<number>) =>
    resource({
      request: id,
      loader: loadUser,
    });
}

const jphUrl = (path: string) => `https://jsonplaceholder.typicode.com/${path}`;

const loadUser = async ({ request: id, abortSignal }) => {
  const res = await fetch(jphUrl(`users/${id}`), { signal: abortSignal });
  if (!res.ok) {
    throw new Error(`Failed to load user's data, ${res.status} ${res.statusText}`);
  }
  const user: JphUser = await res.json();
  return user;
};

const loadUsers = () => fetch(jphUrl('users')).then(r => r.json() as Promise<JphUser[]>);

export interface JphUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
