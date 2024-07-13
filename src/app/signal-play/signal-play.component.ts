import { Component, computed, inject, input, model } from '@angular/core';
import { SignalPlayService } from './signal-play.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'se-signal-play',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h3>{{ sps.$lastId() }}</h3>
    <hr />
    <pre><code>{{$user()|json}}</code></pre>
    <hr />
    <button (click)="next()">next</button>
    <button (click)="prev()">prev</button>
  `,
  styleUrl: './signal-play.component.css',
})
export default class SignalPlayComponent {
  sps = inject(SignalPlayService);
  id = model<number>(0);

  $user = computed(() => this.sps.getUser(this.id()));
  relId = (n = 1) => {
    const newId = this.sps.getRelative(this.id(), n);
    return newId ? newId : this.id();
  };

  next() {
    this.id.set(this.relId(1));
  }
  prev() {
    this.id.set(this.relId(-1));
  }
}
