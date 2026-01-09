import { HttpClient, httpResource } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, Injectable, linkedSignal, signal, Signal } from '@angular/core';

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

@Component({
  selector: 'se-timer',
  imports: [],
  template: `<h1>Timer Component</h1>
    <p>Elapsed Time:</p>
    <ul>
      <li>{{ days() }} days</li>
      <li>{{ hours() }} hours</li>
      <li>{{ minutes() }} minutes</li>
      <li>{{ seconds() }} seconds</li>
      <li>{{ milliseconds() }} milliseconds</li>
    </ul> `,
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  des = inject(DestroyRef);
  downFrom = 1 * hour;
  startTime = Date.now();
  now = signal(Date.now());
  trueDuration = computed(() => +this.now() - +this.startTime - (this.downFrom || 0));
  duration = computed(() => Math.abs(this.trueDuration()));
  days = computed(() => Math.floor(this.duration() / day));
  hours = computed(() => Math.floor((this.duration() % day) / hour));
  minutes = computed(() => Math.floor((this.duration() % hour) / minute));
  seconds = computed(() => Math.floor((this.duration() % minute) / second));
  milliseconds = computed(() => this.duration() % second);

  int = setInterval(() => {
    const now = Date.now();
    this.now.set(now);
    const durarion = this.duration();
    const down = this.downFrom;
    console.log({
      durarion,
      now,
      down
    });
  }, 500);

  _ = this.des.onDestroy(() => {
    clearInterval(this.int);
  });
}

interface User {
  id: number;
  name: string;
  email: string;
}

import { endpointHandler, successHandler, type Action, type Result } from './endpoint-action-handler';
@Injectable()
export class UserService {
  #http = inject(HttpClient);
  #url = (id: number) => `https://api.example.com/users/${id}`;
  #base = signal(signal<number | undefined>(undefined).asReadonly());
  #userId = linkedSignal(() => this.#base()());
  #userUrl = computed(() => {
    const id = this.#userId();
    return id ? this.#url(id) : undefined;
  });
  userResource = httpResource<User>(this.#userUrl);
  action = signal<Action>({ running: false });

  link(idSignal: Signal<number | undefined>) {
    this.#base.set(idSignal);
    return this; // convenience for chaining
  }

  create(user: User): Promise<Result> {
    return endpointHandler({
      actionSignal: this.action,
      serverCall: this.#http.post(this.#url(user.id), user),
      actionType: 'create'
    }).then(
      successHandler(data => {
        // assuming the server sends back the created user:
        this.#userId.set((data as User).id);
        this.userResource.value.set(data as User);
      })
    );
  }

  read(id: number) {
    this.#userId.set(id);
  }

  update(user: User): Promise<Result> {
    return endpointHandler({
      serverCall: this.#http.put(this.#url(user.id), user),
      actionType: 'update',
      actionSignal: this.action
    }).then(successHandler(() => this.userResource.value.set(user)));
  }

  delete(id: number): Promise<Result> {
    return endpointHandler({
      serverCall: this.#http.delete(this.#url(id)),
      actionType: 'delete',
      actionSignal: this.action
    }).then(
      successHandler(() => {
        this.#userId.set(undefined);
        this.userResource.value.set(undefined);
      })
    );
  }
}
