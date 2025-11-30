import { Injectable } from '@angular/core';
import { deepEqual } from '@se-ng/signal-utils';
import type { OnMessageCallback } from 'mqtt';
import {
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  map,
  Observable,
  ReplaySubject,
  share,
  Subject,
  tap,
  timer
} from 'rxjs';

import type {
  MqttMessage
} from './mqtt.types';

@Injectable({ providedIn: 'root' })
export class MqttService {
  mqtt = import('mqtt');
  client = this.mqtt.then(m => m.default.connectAsync(`ws://kapow:1884`));
  /** base topic */
  readonly baseTopic = 'zigbee2mqtt';
  messages$ = new Observable<MqttMessage>(subscriber => {
    const cb: OnMessageCallback = (topic, message): void => {
      try {
        subscriber.next({ topic, message: JSON.parse(message.toString()) });
      } catch (e) {
        subscriber.next({ topic, message: message.toString() });
      }
    };

    this.client.then(client => {
      console.log('start listening for MQTT messages');
      client.on('message', cb);
    });
    return () => {
      this.client.then(client => {
        client.off('message', cb);
        client.end(); //disconnect from the MQTT broker
        console.log('MQTT client disconnected');
      });
    };
  }).pipe(
    share({
      connector: () => new Subject(),
      resetOnComplete: true
    })
  );

  activeTopics = new Map<string, Observable<Record<string, unknown>>>();
  listenFor(listenTopic: string | undefined) {
    const cl = this.client;
    if (typeof listenTopic !== 'string') {
      console.warn('listenFor expects a string topic, got', listenTopic);
      return EMPTY;
    }
    listenTopic = listenTopic.startsWith(this.baseTopic) ? listenTopic : `${this.baseTopic}/${listenTopic}`;
    const activeTopics = this.activeTopics;
    if (activeTopics.has(listenTopic)) {
      // console.log('already listening for', listenTopic);
      return activeTopics.get(listenTopic) as Observable<Record<string, unknown>>;
    }

    const topic$ = this.messages$.pipe(
      filter(({ topic }) => (Array.isArray(topic) ? topic.includes(listenTopic) : topic === listenTopic)),
      map(({ message }: { message: string | Record<string, unknown> }) => message),
      debounceTime(100),
      // deepEqual is costly, but less costly as unneeded display updates/ layout-trashing
      distinctUntilChanged<string | Record<string, unknown>>(deepEqual),
      tap({
        error() {
          cl.then(client => client.unsubscribe(listenTopic));
          activeTopics.delete(listenTopic);
          console.log('stopped listening due of error for', listenTopic);
        },
        complete() {
          cl.then(client => client.unsubscribe(listenTopic));
          activeTopics.delete(listenTopic);
          console.log('stopped listening for', listenTopic);
        }
      }),
      share({
        connector: () => new ReplaySubject(1),
        resetOnComplete: true,
        resetOnRefCountZero: () => timer(5 + 1000) // keep the topic active for a while after the last subscriber unsubscribes, changes are we are going to need it again soon.
      })
    );
    this.activeTopics.set(listenTopic, topic$ as Observable<Record<string, unknown>>);
    // console.log('listenFor', listenTopic);
    // finally, tell the client the topic to start listening to
    cl.then(client => {
      client.subscribe([listenTopic]);
    });
    return topic$;
  }
}
