# Angular Signals WWW

> [!WARNING] This is a republication of an article I wrote _before_ signals where
> introduced in Angular. Since then the API has changed, and signals are now
> part of Angular stable.


In this Article, I will go into the **_Why_**, **_What_**, and **_Wherefor_** of Angular Signals. And why this is such a big deal that everyone seems to have an opinion on. How it is going to be a complementary technology to Angular, and not a replacement to anything already there. (spoiler alert: it is not a replacement for RxJS)

> DISCLAIMER: this is not the current API of Angular Signals. As the current API doesn't really exist just yet. Yes, there is a POC implementation, but it is not the final API. The API is still being discussed. But this is the API that I think will make it easier to read samples. And it is the API that I think will be the most intuitive to use. So, I will use it in this article. But it is not the final API, and it is also not the current implementation.

## Why Angular Signals?

Ah, yes, the question that everyone is asking.

- Why do we need another reactive library?
- Why now?
- Why not just use RxJS?
- Why not use promises?
- Why not just use the `async` pipe?
- Why not just use the `async` pipe with RxJS?
- Why this and not my favorite feature that is missing?
- Why is this list ending here?

Well, I can not answer all of those questions. But I can answer some of them. And I will try to answer them in a way that is not just my opinion. But also in a way that is backed up by facts.

#### Why not just use RxJS?

The Angular user-base is huge. And it is growing every day. But also it is split in a 50/50 way. 50% want _more_ Observable integration. And 50% want _less_ Observable integration. There is a point to both sides of the argument. And I will try to explain why.
The current best solution for Observables is RxJS. A library I personally love. As a nice bonus, Angular is also using RxJS for a few parts of its own code. But it does have a steep learning curve, and to be fair, you can solve most use-cases where Angular shines fine without it.
Aside from those issues, if I hand you an observable, there is no way you can know if it is sync or async. You also don't know if it will ever complete, or how many values it will produce. Also, when you subscribe to it, you become responsible for unsubscribing. Forgetting to unsubscribe might lead to a memory leak. You can solve advanced use-cases easily with RxJS, but the trade-off is that you need to know a lot about the specifics surrounding the observable primitive to handle it correctly. And that is not always the case.

Bottom line: RxJS is great. But it is not for everyone. And it is not for every use-case. Embracing this more would make Angular less accessible to a lot of people. And that is not something we want. So that is the reason to `not just use RxJS`.

#### Why not just use the async pipe, or promises?

Promises and async functions are a great way to handle async code. But they are not a great way to handle sync code. They are also not a great way to handle multiple values over time (user generated events for example). They are also not a great way to handle errors. And they are async by design. That means you need at least 2 event-loop cycles to get a result into the view.

This directly answers the question of why not use the `async pipe`. The `async pipe` is a great way to get values into the view, combined with an `NgIf` you can also handle loading indicators and so on. This alone introduces more complexity into the templates. Also, the result of the async pipe only "lives" in the view. What if you need to use that in the component? Or need a couple of side effects from that value. Yes, there are solutions for that, but it becomes hacky and hard to read. And that is not something we want. So that is the reason to `not just use the async pipe`.

#### Why another reactive library?

Why now use X, or Y, or Z? Well, This one, I can not answer with 100% certainty. I know for a fact that the team has been looking at all kinds of implementations. Then they came up with a spec. This spec is built from knowing what is needed in Angular. And what is not. So it is built from the ground up to be a great fit for Angular. And it is built from the ground up to be a great fit for the Angular user-base. As I have been reading the code of the Angular signal POC, and the code of quite a couple of other signal implementations, and did build my own signal prototype, I can say I agree with the team on this. The tradeoffs in the other libraries are not a good fit for Angular.

#### Why now?

Ah, this is an interesting one. I can only `speculate`. But one of the most asked-for features in Angular is "zone-less" support. This is a big step in making that possible. Right now, Angular is depending on ZoneJS to trigger its change-detection. Having a reactive primitive makes it easy to trigger change-detection. Even more, having this primitive in the core of Angular would even allow us to build an app without change-detection. You don't need to detect changes when you know when and where those changes happen. And that is exactly what the signal primitive brings to Angular.
Let me put in a quote from Pawel Kozlowski, one of the Angular team members:

> Signals let us understand changes to the data model (what gets modified) and how the model is used (templates that need updating).
>
> With this precise info we can just update templates that read changed values, instead of dirty-checking the entire application / all templates.

This is a huge step in making Angular more efficient. And it is a huge step in making Angular more flexible. And it is a huge step in making Angular more powerful. And it is a huge step in making Angular more future-proof.

A side observation is that we are getting more and more streams (like [media capture](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API)) in the browser. Signals are a great way to create a reactive interface to those streams. And that is something that is going to be more and more important in the future.

### Wait, wut? does this mean I need to rewrite my app?

Well no, not at all. This is a new primitive. It is not a replacement for anything. You can still do the same things you did before. You can still use Observables. You can still use Promises. You can still use the `async` pipe. In addition to that, you will be able to use the new signal primitive. Embracing that will allow a future where you can turn off ZoneJS, if that is something you want to do. But that is a future you. And that is a future that is not here yet. Also, you might not even want to do that. You might want to keep using ZoneJS. And that is fine. This will give future you more possibilities. But it will not take anything away from you.

## What is the problem Angular Signals solves?

First let me show you _what_ the problem that Angular Signals is trying to solve. And then I will show you how it solves it. Not the technical how, as there are numbers of explanations on that already. But the conceptual how.

The problem:

```ts
let counter = 0;

/** I'm using console.log here, but look at this as a component that is rendering a counter into the view */
console.log(counter); // 0

counter += 1; // Nothing happens here
```

The problem is that the value of `counter` is not reactive. When you update it, it will not call the `console.log` again. The view will not be updated. The code I use is silly and it will be really clear to anyone who has ever written a program that this will never work as expected (for the sample, we expect the console.log to refire!).

This is exactly where a `signal` comes to play. Let's look at the same code, but with a signal:

```ts
import { signal, effect } from '@angular/core';

let counter = signal(0);

/** here we wrap our console log into an "effect" */
effect(() => console.log(counter.value)); // 0

counter.value += 1; // this will now log 1 to the console! (in our viewpoint for this doc, It does update the view)

// NOTE: see disclaimer at the top.
```

A `signal` is a _synchronous_ value. It is a value that can be updated.
When updated it will trigger all `effects` that are using it. This is the core of it.

Let that sync in.

- A `signal` is a **_synchronous_** value.

But what does that even mean? Well, it means that when you update the value of a signal, it is updated immediately. It is not updated in the next tick. It is not updated in the next frame. It is updated immediately. When you read it on the next line of code, it will have the updated value right away.

> There are some technical details I will not go into in this article. They don't add anything to the concept of the article. There are numerous articles that go into the technical details of how this works. Ask me if you want to know more about it.

A bit of background on the `effect` function. You might never have encountered this before. But it is a very common pattern in functional programming. It is a function that takes a function as an argument. And it will call that function. But it will also call that function when the value of the signal changes. In the above sample, we are using a function that logs the value of the signal. But you can do anything and it will be called every time the value of the signal changes. Also, you can have multiple effects on the same signal. And they will all be called when the value of the signal changes. Also, you can use multiple signals in the same effect. And the effect will be updated every time any of the signals change. This whole process is called `reactive programming`. And it is the core of Angular Signals.

However that does not mean the `effects` that are using that signal will be triggered in the same cycle of the event loop. The current implementation uses a micro-task to trigger the effects. But that is an implementation detail. And it might change in the future. The effects are triggered `batched` and `lazy`. This means that if an effect uses multiple signals, it will only be triggered once. And it will be triggered after all the signals have been updated.

### The problems Angular Signals solve:

- Adds the missing reactive primitive in JavaScript.
- Allows very fine-grained control over when and how the view is updated.
- Enables future zone-less applications.
- Bridges the gap between the imperative and reactive world.

### Computed values

In this article I have only been talking about `signals` and `effect`. This is actually the bulk of the API. But there is more. There is also `computed`. This is actually both a signal and an effect. It is a signal that is driven by an effect.
It is easier to show than to explain. So here is an example:

```ts
const counter = signal(0);
const double = computed(() => counter.value * 2);
const triple = computed(() => double.value * 3);
const pickOne = computed(() => (counter.value % 2 === 0 ? double.value : triple.value));

effect(() => {
  console.log(`counter: ${counter.value}`);
  console.log(`Result: ${pickOne.value}`);
});

counter.value = 10;

// NOTE: see disclaimer at the top.
```

## Wherefore art thou Angular Signals?

Yeah, that doesn't sound right. But I can't think of a better title. In this part of the article, I will list the things that didn't fit in the above 2 sections. A large part of me being really happy about this direction is that it will allow us to build a lot of stuff on top of it. And it will make the interop between all of the concepts and programming paradigms a lot easier.

<sub>(note this section is updated from the original article)</sub>

An example:

```ts
@Component({
  selector: 'sample',
  template: ` <div [style.color]="color$ | async">{{ time$ | async }}</div> `
})
class SampleComponent {
  alarmList = inject(AlarmService).alarmList;
  time$ = timer(0, 100).pipe(
    // this is too fast for a reason.
    map(() => new Date().toISOString().split('T')[1].split('.')[0])
  );
  color$ = this.time.pipe(map(time => (this.alarmList.includes(time) ? 'red' : 'green')));
}
// NOTE: see disclaimer at the top.
```

Ok, that doesn't look so bad does it? The code is nice and short. Easy digestible, and fully reactive. But there is an issue.
In this case, the observable fires every 100Ms. (Yes, it's a sample and I have control here. But in real life, I might not be able to just change the interval.) This means that the UI is updated every 100Ms, even if there is no change. Also, there are 2 subscriptions to the `time$` observable. One for the `color$` observable and one for the `time$` async pipe. And then there is a third subscription by the `color$ | async` in the template. All of those trigger change-detection.
(Yes, I can use `distinctUntilChanged` to limit the amount of updates. And I can use `shareReplay` to get rid of an extra subscription. But that adds a load of complexity to the code and is not the point of this example.)

Now lets create the same example, but with Angular Signals:

```ts
@Component({
  selector: 'sample',
  template: ` <div [style.color]="color">{{ time }}</div> `
})
class SampleComponent {
  alarmList = inject(AlarmService).alarmList;
  time = fromObservable(
    timer(0, 100).pipe(
      // this is too fast for a reason.
      map(() => new Date().toISOString().split('T')[1].split('.')[0])
    )
  );
  color = compute(() => (this.alarmList.includes(this.time.value) ? 'red' : 'green'));
}
// NOTE: see disclaimer at the top.
```

Notice that this already made the code a lot more readable. And it is a lot more concise. And it is also more performant.
No more `async` pipes. Change detection will only be fired when there are real changes. A signal will only be updated when the value changes. (in RxJS speak, it has a built-in `distinctUntilChanged`). The color isn't overwritten every 100Ms. It is only updated when the value of the `time` signal changes. And it is only updated once. Also, under the hood, there is only 1 subscription to the `time$` observable. And that subscription is fully managed by the `fromObservable` function.

<sub>(end of update)</sub>

### What else is possible?

Of course, there will be a way to go the other way around. Meaning you can create an observable from one (or more) signals.
Right now, I don't really think that is very interesting. However, I have high hopes for the future. I can see things like life-cycle-hooks and inputs being signals.

Imagine this:

```ts
@Component({
  selector: 'some-component',
  template: `
    <div>
      {{ customer.value?.name }}
      {{ customer.value?.email }}
    </div>
  `
})
class SomeComponent {
  customerService = inject(CustomerService);
  /**
   * think of this as a alternative to the @Input decorator. but then reactive.
   * I'm casting only for the example, this will be done automatically
   */
  customerId = futureMagicalSignalFromInput('customerId', undefined) as signal<number | undefined>;

  // make a Observable stream from a signal
  customer$ = observableFromSignal(this.customerId).pipe(
    /** do Observable stuff here, driven from the above "@Input"  */
    switchMap(id => (id ? this.customerService.getCustomer(id) : of(undefined)))
  );

  /**
   * Convert an observable stream into a signal.
   * It doesn't add any value in this example, but think about viewModels, or
   * more complex and combined streams.
   * This takes care of the subscription and unsubscribing.
   * and it easily allow you to react to changes in the stream.
   */
  customer = signalFromObservable(this.customer$);

  // make a signal from a life-cycle hook
  destroy = futureMagicalSignalFromLifeCycleHook('destroy');

  // use the life-cycle hook signal to do something
  destroyEffect = effect(() => {
    if (this.destroy) {
      console.log('destroying the customer signal, while destroying the component');
    }
  });
}
// NOTE: see disclaimer at the top.
```

This is a very contrived example. Let me be clear, I'm unaware of the team having plans around this. To me it makes a lot of sense to add those things once the signal is in the core. But that is just me. I'm sure the team has a lot of other ideas. And I'm sure they will be great.

<sub>(note this section is updated from the original article)</sub>

### Well well well. Shortly after writing this!

Completely out of context, but I just saw this tweet:

![image](/assets/articles/assets/quote.png)

So it turns out my `futureMagicalSignalFromLifeCycleHook('destroy')` is going to be a thing. And I'm really happy about that.

<sub>(end of update)</sub>

### Learnability

Ok, this is one more concept to learn, so it's a hit for learnability, right?. Well, not really. The API will be really simple and even easier to grasp than promises. And it will be a lot easier to grasp than observables. Having this in the toolbox will help both sides. Both the nay, as well as the yay-sayers on observables will be able to use this (remember the 50-50 divide!). And that is a win for everyone.
Right now ZoneJS is a black box. You can't really see what is going on. And that is a problem. With signals, you will be able to see what is going on. And that is a win for everyone.

### Is this all?

No. There are more details to the whole API, and every part of it is worth looking into it. But that lies outside of the scope of this article. Feel free to contact me, and I will be happy to have a more in depth conversation about it. I opened a [discussion](https://github.com/SanderElias/Samples/discussions/48) on GitHub, where we can have a more in depth conversation about it.

## Conclusion

Angular signals are all set to green for a bright future. They will be the foundation for a load of cool stuff and will be the (now missing) grease between lots of things. The interop between observables and signals will be an especially huge win. Dropping in and out of the reactive stream is where most problems exist and this will decrease the need for this dropping in and out.
ZoneJS is wonderful, but at the same time, it can be an issue for performance in some cases. Reading the signal tells me that this is also something where buying into them will make a huge difference.

---

Here I want to give thanks to the people that helped me improve the content of this article, by proofreading and giving feedback. And checking the facts and making sure I didn't make any mistakes.
In no particular order:

- Natalia Venditto [@NataliaVenditto](https://mobile.twitter.com/AnfibiaCreativa)
- Pawel Kozlowski [@pkozlowski_os](https://mobile.twitter.com/pkozlowski_os)
- Alex Rickabaugh [@synalx](https://mobile.twitter.com/synalx)
- Jeffrey Bosch [@jefiozie](https://mobile.twitter.com/jefiozie)
