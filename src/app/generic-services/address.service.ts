import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

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

  constructor() { }

  private users(length): Observable<UserCard[]> {
    return from(import('@faker-js/faker')).pipe(
      map(
        (fakerModule) => {
          const {faker} = fakerModule;
          return Array.from({ length }, () => ({
            ...userCard(faker),
            avatar: faker.image.avatar(),
          }))
        }),
      tap(r => console.dir(r)),
      shareReplay(1)
    );
  }
}

function userCard(faker:any): UserCard {
  console.warn(
    'Deprecation Warning: If you need some specific object you should create your own method.'
  );
  return {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    address: {
      street: faker.address.streetName(),
      suite: faker.address.secondaryAddress(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
      },
    },
    phone: faker.phone.phoneNumber(),
    website: faker.internet.domainName(),
    company: {
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs(),
    },
  };
}
