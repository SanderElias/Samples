import { JsonPipe } from '@angular/common';
import { Component, computed, inject, model, signal } from '@angular/core';

import { JsonPlaceHolderService } from './json-place-holder.service';

@Component({
  selector: 'se-signal-play',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h3>Available:{{ $availableUserCount() }} current:{{ id() }}</h3>
    <hr />
    <pre><code>{{$user()|json}}</code></pre>
    <hr />

    <button (click)="next()">next</button>
    <button (click)="prev()">prev</button>
  `,
  styleUrl: './signal-play.component.css',
})
export default class SignalPlayComponent {
  // sps = inject(SignalPlayService);
  jph = inject(JsonPlaceHolderService);
  id = signal(1);

  userResource = this.jph.getUser(this.id);
  $user = computed(() => this.userResource.value() ?? {});

  $state = computed(() => this.userResource.status());

  // $street = linkedSignal(this.$user, user => user.address.street);


  $availableUserCount = computed(() => this.jph.usersResource.value()?.length ?? 0);

  relId = (n = 1) => {
    const currentId = +this.id() || 0;
    return Math.max(1, Math.min(this.$availableUserCount(), currentId + n));
  };

  next() {
    this.id.set(this.relId(1));
  }
  prev() {
    this.id.set(this.relId(-1));
  }
}
