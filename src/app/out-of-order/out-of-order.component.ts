import { Component, computed, effect, resource, signal } from '@angular/core';
import { asyncComputed } from '@se-ng/signal-utils';

@Component({
  selector: 'se-out-of-order',
  standalone: true,
  imports: [],
  template: `
    <h1>Out of Order problem</h1>
    <p>My ID: {{ myId() }}</p>
    <p>Naive data: {{ naiveData() }}</p>
    <p>Naive data with abort: {{ naiveDataWithAbort() }}</p>
    <p>Data using resource: {{ datUsingResource.value() }}</p>
    <p>Data using resource has status: {{ status() }}</p>
    <p>Data using async computed: {{ usingAsyncComputed() }}</p>
  `,
  styleUrl: './out-of-order.component.css',
})
export class OutOfOrderComponent {
  myId = signal(1);

  // related date using naive approach and an effect.
  naiveData = signal<number | string>(0);
  _naiveEffect = effect(async () => {
    const id = this.myId();
      const data = await simulateFetch({ request: id }).catch((e:Error) => e.message);
      if (this.myId() !== data) {
        this.naiveData.set(`out-of-order: ${this.myId()} !== ${data}`);
        console.log('out-of-order detected');
        // this._naiveEffect.destroy(); // abort the effect
        return;
      }
      this.naiveData.set(data);
  });

  // the same as above but with abort controller, to prevent out-of-order
  ab = new AbortController(); // we need to keep the abort controller in the class
  naiveDataWithAbort = signal<number | string>(0); // related date using naive approach and an effect.
  _naiveEffectWithAbort = effect(async () => {
      this.ab.abort(); // abort the previous fetch
      this.ab = new AbortController(); // create a new abort controller
      const abortSignal = this.ab.signal;
      const id = this.myId();
      try {
        const data = await simulateFetch({ request: id, abortSignal }).catch((e:Error) => e.message);
        this.naiveDataWithAbort.set(data);
      } catch {
        // console.log('prevented out-of-order for ID:', id);
      }
  });

  // related data using `resource` that will be experimental in V19
  datUsingResource = resource({
    request: this.myId,
    loader: simulateFetch,
  });
  status = computed(() => {
    // we need this to visualize the status of the resource, and why it "flickers"
    const statusus = ['Idle', 'Error', 'Loading', 'Reloading', 'Resolved', 'Local'] as const;
    return statusus[this.datUsingResource.status()];
  });

  // related data using `asyncComputed` that is stable and availabe on NPM as `@se-ng/signal-utils`
  usingAsyncComputed = asyncComputed(() => simulateFetch({ request: this.myId() }));

  constructor() {
    // make the ID change every second
    setInterval(() => this.myId.update(i => i + 1), 1000);
  }
}

const simulateFetch = async ({ request, abortSignal }: { request: number; abortSignal?: AbortSignal }) => {
  const delay = 500 + Math.random() * 600; // between 800 and 1400 ms
  if (request % 25 === 0) {
    // simulate unexpected error
    throw new Error('Failed to fetch');
  }
  await new Promise(resolve => setTimeout(resolve, delay)); // simulate network delay
  if (abortSignal?.aborted) {
    return '';
  }
  return request;
};
