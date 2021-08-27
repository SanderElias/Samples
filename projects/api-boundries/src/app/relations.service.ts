import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { delay, filter, map, take } from 'rxjs/operators';
import { RelationId } from './orders.service';

const seed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const randomInt = (max = 2000) => Math.floor(Math.random() * max)
const randChar = () => seed[randomInt(seed.length)];
const randChars = (n = 3) => Array.from({ length: n }, () => randChar()).join('');

export const getId = () => randChars(4) + '-' + Math.round(performance.now()*10000000000).toString(36);

@Injectable({
  providedIn: 'root'
})
export class RelationsService {
  faker = import('faker');
  relationList$ = new BehaviorSubject<Relation[]>([] );

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.addGeneratedUser(getId());
    }
  }
  getRelationIdList() {
    return this.relationList$.pipe(
      map(relations => relations.map(r => r.id)),
    )
  }
  getRelation(id): Observable<Relation> {
    const relation = this.relationList$.value.find(user => user.id === id);
    if (!relation) {
      this.addGeneratedUser(id);
    }
    return this.relationList$.pipe(
      map(relations => relations.find(o => o.id === id)),
      filter(o => o!==undefined),
      take(1)
    )
  }

  getExistingRandomId() {
    const ids= this.relationList$.value.map(r => r.id);
    return ids[randomInt(ids.length)];
  }

  async addGeneratedUser(id: string) {
    const faker = await this.faker
    const relation:Relation = {
      ...faker.helpers.userCard(),
      avatar: faker.image.avatar(),
      id,
      orders: Array.from({ length: randomInt(4)+1 }, () => getId())
    }
    this.relationList$.next([...this.relationList$.value, relation]);
    return relation as Relation;
  }
}


export interface Relation {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  avatar: string;
  id: RelationId;
  orders: string[];
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

// {"name":"Mr. Elisa Huels","username":"Calista.Stokes43","email":"Tess_Zulauf@hotmail.com","address":{"street":"Marco Junctions","suite":"Suite 045","city":"South Karenhaven","zipcode":"23185","geo":{"lat":"11.2835","lng":"-9.6242"}},"phone":"1-813-991-7612 x9723","website":"landen.com","company":{"name":"Rohan, Schroeder and Rosenbaum","catchPhrase":"Phased static capacity","bs":"expedite wireless platforms"},"avatar":"https://cdn.fakercloud.com/avatars/codysanfilippo_128.jpg","id":"z9HY-ks7hqque"}
