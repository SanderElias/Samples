import { Component, effect, resource, signal } from '@angular/core';

@Component({
  selector: 'se-stream-resource',
  imports: [],
  template: ` <p>stream-resource works!</p> `,
  styleUrl: './stream-resource.component.css'
})
export class StreamResourceComponent {
  res = resource({
    defaultValue: 0,
    stream: async param => {
      const sum = signal({ value: 0 });
      (async () => {
        for await (const n of giveNumbers()) {
          sum.update(o => ({ value: o.value + n }));
        }
      })();
      return sum;
    }
  });
  _ = effect(() => {
    console.log('res', this.res.value());
  });
  constructor() {
    // this.test();
  }

  // async test() {
  //   let sum = 0;
  //   for await (const n of giveNumbers()) {
  //     console.log(n);
  //     sum += n;
  //   }
  //   console.log('sum', sum);
  // }
}

async function* giveNumbers() {
  let check = 0;
  for (let i = 0; i < 1500_000; i++) {
    // if (i % 25000 === 0) {
    //   await new Promise(resolve =>
    //     setTimeout(resolve, Math.floor(Math.random() * 5))
    //   );
    // }
    yield await Promise.resolve(i);
    check += i;
  }
  console.log('check', check);
}
