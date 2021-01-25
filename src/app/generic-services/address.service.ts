import { Injectable } from '@angular/core';
// import * as faker from 'faker';
import { from, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface UserCard {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  avatar: string;
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

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  userCards$ = this.users(25);

  constructor() {}

  private users(length): Observable<UserCard[]> {
    return from(import('faker')).pipe(
      map(
        faker =>
          Array.from({ length }, () => ({
            ...faker.helpers.userCard(),
            avatar: faker.image.avatar(),
          })) as UserCard[]
      ),
      shareReplay(1)
    );
  }
}
