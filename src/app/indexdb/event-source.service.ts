import { Injectable, signal } from '@angular/core';
import { getAllFromStore, initializeDb, saveToIndexedDb } from './indexed-db-helpers';
import type { DbEvent } from './event-source.types';
import { ReplaySubject } from 'rxjs';

const DbName = 'EventSourceDb';
const storeName = 'events';

@Injectable({
  providedIn: 'root',
})
export class EventSourceService {
  #events = new ReplaySubject<DbEvent>(1);
  events$ = this.#events.asObservable();
  #put = (data: DbEvent) => saveToIndexedDb(DbName, storeName, data);
  #ready = signal(false);
  #buffer: DbEvent[] = [];

  post(event: DbEvent) {
    if (!this.#ready()) {
      this.#buffer.push(event);
      return;
    }
    while (this.#buffer.length) {
      const ev = this.#buffer.shift();
      if (ev) {
        this.#put(ev);
        this.#events.next(ev);
      }
    }
    this.#put(event); //persist the event
    this.#events.next(event); //notify subscribers
  }

  constructor() {
    initializeDb(DbName, [db => db.createObjectStore(storeName, { autoIncrement: true })]);
    this.#getInitialEvents();
  }

  async #getInitialEvents() {
    try {
      for await (const data of getAllFromStore(DbName, storeName)) {
        this.#events.next(data.payload);
      }
      this.#ready.set(true);
    } catch (error) {
      console.error(error);
    }
  }
}
