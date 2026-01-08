import { HttpClient, httpResource } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, Injectable, input, linkedSignal, signal, Signal } from '@angular/core';
import { firstValueFrom, type Observable } from 'rxjs';

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

@Injectable()
export class UserService {
  #http = inject(HttpClient);
  #base = signal(signal<number | undefined>(undefined).asReadonly());
  #userId = linkedSignal(() => this.#base()());
  #userUrl = computed(() => {
    const id = this.#userId();
    return id ? `https://api.example.com/users/${id}` : undefined;
  });
  userResource = httpResource<User>(this.#userUrl);
  actionRunning = signal(false);
  lastError = signal<Error | undefined>(undefined);

  #handleEndpoint = (p: Observable<unknown>): Promise<boolean> => {
    this.actionRunning.set(true);
    this.lastError.set(undefined);
    return firstValueFrom(p)
      .then(() => true)
      .catch(e => {
        this.lastError.set(e as Error);
        return false;
      }) // retrowing, so the caller can also handle it
      .finally(() => this.actionRunning.set(false));
  };

  link(idSignal: Signal<number | undefined>) {
    this.#base.set(idSignal);
    return this; // convenience for chaining
  }

  create(user: User): Promise<boolean> {
    return this.#handleEndpoint(this.#http.post('https://api.example.com/users/user', user));
  }

  read(id: number) {
    this.#userId.set(id);
  }

  update(user: User): Promise<boolean> {
    return this.#handleEndpoint(this.#http.put(`https://api.example.com/users/${user.id}`, user)).then(success => {
      if (success) {
        this.userResource.value.set(user);
      }
      return success;
    });
  }

  delete(id: number): Promise<boolean> {
    return this.#handleEndpoint(this.#http.delete(`https://api.example.com/users/${id}`)).then(success => {
      if (success) {
        this.#userId.set(undefined);
        this.userResource.value.set(undefined);
      }
      return success;
    });
  }
}
