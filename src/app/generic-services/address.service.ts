import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { createUniqueId } from '../util/random-things';
import { fi } from '@faker-js/faker';

export interface UserCard {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  dob: Date;
  tags: string[];
  contactBy: { mean: string; value: string }[];
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
  fakerModule = import('@faker-js/faker');
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

export function userCard(faker: any): UserCard {
  const sex = faker.person.sex();
  const firstName = faker.person.firstName({sex});
  const lastName = faker.person.lastName({sex});

  const name = faker.person.fullName({ firstName, lastName, sex });
  return {
    id: createUniqueId(),
    name,
    username: faker.internet.username({ firstName, lastName }),
    email: faker.internet.exampleEmail({ lastName }),
    avatar: faker.image.avatar(),
    dob: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
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
    tags: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => faker.word.noun()),
    contactBy: Array.from({ length: faker.number.int({ min: 2, max: 4 }) }, () => ({
      mean: faker.word.noun(),
      value: faker.word.verb(),
    })),
    phone: faker.phone.number,
    website: faker.internet.domainName(),
    company: {
      name: faker.company.name(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.buzzPhrase(),
    },
  };
}
