import { JsonPipe } from '@angular/common';
import { Component, computed, inject, model } from '@angular/core';

import { SignalPlayService } from './signal-play.service';

@Component({
  selector: 'se-signal-play',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h3>{{ $availableUserCount() }}</h3>
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
  id = model<string>('');

  $user = computed(() => {
    const user = this.sps.getUser(this.id());
    if (user) return user;
    // none found, get first one!
    return this.sps.$users()[0];
  });

  $availableUserCount = computed(() => this.sps.$users().length);

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
