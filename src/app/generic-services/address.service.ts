import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

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
  fakerModule = import('@faker-js/faker')
  userCards$ = this.users(25);

  constructor() {}

  private users(length): Observable<UserCard[]> {
    return from(this.fakerModule).pipe(
      map(fakerModule => {
        const { faker } = fakerModule;
        return Array.from({ length }, () => ({
          ...userCard(faker),
          // avatar: faker.image.avatar(),
        }));
      }),
      // tap(r => console.dir(r)),
      shareReplay(1),
      catchError(e => of([]))
    );
  }
}

function userCard(faker: any): UserCard {
  return {
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    address: {
      street: faker.location.street(),
      suite: faker.location.secondaryAddress(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      geo: {
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
      },
    },
    phone: faker.phone.number(),
    website: faker.internet.domainName(),
    company: {
      name: faker.company.name(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.buzzPhrase(),
    },
  };
}
