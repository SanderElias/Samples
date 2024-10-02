import { Injectable, signal } from '@angular/core';
import { getAllFromStore, initializeDb, saveToIndexedDb } from './indexed-db-helpers';
import type { DbEvent } from './event-source.types';
import { ReplaySubject } from 'rxjs';

const DbName = 'EventSourceDb';
const storeName = 'events';

const startTime = Date.now();

@Injectable({
  providedIn: 'root',
})
export class EventSourceService {
  #events = new ReplaySubject<DbEvent>(1);
  /**
   * @description Observable of events
   */
  events$ = this.#events.asObservable();
  #put = (data: DbEvent) => saveToIndexedDb(DbName, storeName, data);
  #$ready = signal(false);
  #buffer: DbEvent[] = [];

  /**
   * Persist the event to the database and notify subscribers
   * @param event
   * @returns
   */
  post(event: DbEvent) {
    if (!this.#$ready()) {
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
    /*
      Initialize the database, provide an array with "upgrades" to be performed on the database
    */
    initializeDb(DbName, [db => db.createObjectStore(storeName, { autoIncrement: true })]);
    this.#getInitialEvents();
  }

  async #getInitialEvents() {
    try {
      let rowCount = 0;
      for await (const data of getAllFromStore<DbEvent>(DbName, storeName)) {
        rowCount +=1;
        this.#events.next(data.value);
      }
      this.#$ready.set(true);
      // for now, just log the time it took to load the data. If it gets too slow, we can optimize it
      console.log(`IndexedDB load time: ${Date.now() - startTime}ms for ${rowCount} events`);
    } catch (error) {
      console.error(error);
    }
  }
}
