# Angular Signals WWW

In this Article, I will go into the ***What***, ***Why***, and ***Wherefor*** of Angular Signals. And why this is such a big deal that everyone seems to have an opinion on. Anf how it is a going to be a complementary technology to Angular, and not a replacement to anything already there. (spoiler alert: it is not a replacement for RxJS)

> NOTE: this is not the current API of Angular Signals. As the current API doesn't really exist just yet. Yes, there is a POC implementation, but it is not the final API. The API is still being discussed. But this is the API that I think will make the easer to read samples. And it is the API that I think will be the most intuitive to use. So I will use it in this article. But it is not the final API.

## What is the problem Angular Signals solves?

First let me show you *what* the problem that Angular Signals is trying to solve. And then I will show you how it solves it. Not the technical how, as there are numbers of explanations on that already. But the conceptual how.

The problem:

```ts
let counter = 0;

/** I'm using console.log here, but look at this as a component that is rendering a counter into the view */
console.log(counter) // 0

counter +=1; // Nothing happens here
```

The problem is that the value of `counter` is not reactive. When you update it, it will not call the console.log again. The view will not be updated. The code I use is silly, and it will be really clear to everyone that ever has written any program that this will never work as expected (For the sample, we expect the consoleLog to refire!).

This is exactly where a `signal` comes to play. lets look at the same code, but with a signal:

```ts
import { signal, effect } from '@angular/core';

let counter = signal(0);t

/** here we wrap our console log into an "effect" */
effect(() => console.log(counter.value)) // 0

counter.value +=1; // this will now log 1 to the console! (in our viewpoint for this doc, It doe update the view)
```

**Ok, problem solved, ship it, and call it a day!**

Well, not quite. There is a lot more to it. But this is the core of it. A `signal` is a *synchronous* value. It is a value that can be updated. When updated it will trigger all `effects` that are using it. This is the core of it. 

let that sync in. 

- A `signal` is a ***synchronous*** value. 

But what does that even mean? Well, it means that when you update the value of a signal, it is updated immediately. It is not updated in the next tick. It is not updated in the next frame. It is updated immediately.
All `effects` that are using that signal will be triggered in the same cycle of the event loop.

> there are some technical details I will not go into in this article. They don't add anything to the concept of the article. There are numerous articles that go into the technical details of how this works. Ask me if you want to know more about it.

A bit of background on the `effect` function. You might never have encountered this before. But it is a very common pattern in functional programming. It is a function that takes a function as an argument. And it will call that function. But it will also call that function when the value of the signal changes. I the above sample we are using a function that logs the value of the signal. But you can do anything, and it will be called every time the value of the signal changes. Also, you can have multiple effects on the same signal. And they will all be called when the value of the signal changes. Also, you can use multiple signals in the same effect. And the effect will be updated every time any of the signals change. This whole process is called `reactive programming`. And it is the core of Angular Signals.

### The problem Angular Signals solves is:

 - the missing reactive primitive in Javascript.
 - it gives us a way to create reactive values.
 - and a way to react to them.  

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

The Angular user-base is huge. And it is growing every day. But also it is split in a 50/50 way. 50% want _more_ Observable support. And 50% want _less_ Observable support. The current best solution for Observables is RxJS. A library I personally love. But it does have a steep learning curve, and to be fair, you can solve most use-cases where Angular shines fine without it. 
Aside from those issues. If I hand you an observable, there is no way you can know if it is sync or async. You also don't know if it will ever complete, or how many values it will produce. Also, when you subscribe to it, you become responsible for unsubscribing. Forgetting that, might lead to a memory leak. You can solve advanced use-cases easily with RxJs, but the trade-off is that you need to know a lot about the specifics surrounding this primitive to handle it correctly. And that is not always the case.

Promises and async functions are a great way to handle async code. But they are not a great way to handle sync code. They are also not a great way to handle multiple values over time (user generated events for example). They are also not a great way to handle errors. And they are async by design. That means you need at least 2 event-loop cycles to get a result out of them.

There is directly also the answer on why not use the `async` pipe. It can not handle sync code. It needs at least 2 event-loop cycles to get a result out of it.

Why another reactive library?

Why now use X, or Y, or Z? Well, This one, I can not answer with 100% certainty. I know for a fact that the team has been looking at all kind of implementations. Then they came up with a spec. This spec is build from knowing what is needed in Angular. And what is not. So it is build from the ground up to be a great fit for Angular. And it is build from the ground up to be a great fit for the Angular user-base. As I have been reading the code of the Angular signal POC, and the code of quite a couple of other signal implementations, and did build my own signal prototype, I can say I agree with the team on this. The tradeoffs in the other libraries are not a good fit for Angular. 

Why now?

Ah, this is an interesting one. I can only `speculate`. But one of the most asked-for features of Angular is "zone-less" support. This is a big step in making that possible. Right now, Angular is depending on ZoneJS to trigger its change-detection. Having a reactive primitive makes it easy to trigger change-detection. Even more, having this primitive in the core of Angular would even allow to build an app without change-detection. You don't need to detect changes, when you know when and where those changes happen. And that is exactly what the signal primitive brings to Angular.
Let me put in a quote from Pawel Kozlowski, one of the Angular team members:
>Signals let us understand changes to the data model (what gets modified) and how the model is used (templates that need update).
>
>With this precise info we can just update templates that read changed values, instead of dirty-checking the entire application / all templates.

This is a huge step in making Angular more efficient. And it is a huge step in making Angular more flexible. And it is a huge step in making Angular more powerful. And it is a huge step in making Angular more future-proof.


### Wait, wut? does this mean I need to rewrite my app?

Well, no. Not at all. This is a new primitive. It is not a replacement for anything. You can still do the same things you did before. You can still use Observables. You can still use Promises. You can still use the `async` pipe. In addition to that, you will be able to use the new signal primitive. Embracing that will allow a future you to turn of ZoneJS, if that is something you want to do. But that is a future you. And that is a future that is not here yet. Also, you might not even want to do that. You might want to keep using ZoneJS. And that is fine. This will give future you more possibilities. But it will not take anything away from you.


## Wherefor art thou Angular Signals?

Yeah, that doesn't sound right. But I can't think of a better title. In this part of the article, In this part I will list the things that didn't fit in the above 2 sections. A large part of me being really happy about this direction is that it will allow us to build a lot of stuff on top of it. And it will make the interop between all of those things a lot easier.

An example:

```ts
@Component({
  selector: 'sample',
  template: `
    <button #button>Click me</button>
    <div> {{ clickCount.value) }} </div>  
  `
})
class SampleComponent implements OnInit {
  @ViewChild('button') button: ElementRef;
  clickCount = signal(0);

  ngOnInit() {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        map(() => this.clickCount.value += 1),        
      )
      .subscribe();
  }
}
```

I know, I know, not cleaning up the subscribe. Not the point of the example. The point is that there is an observable stream, (clicks here, but it can be anything) that is being kept in sync with the view. Oh, look ma, no `async pipe` No `*ngIf` and no other constructs. 

As the team saw this as a common case you can expect the following to be possible:
  

```ts
@Component({
  selector: 'sample',
  template: `
    <button #button>Click me</button>
    <div> {{ clickCount.value) }} </div>  
  `
})
class SampleComponent implements OnInit {
  @ViewChild('button') button: ElementRef;
  clickCount: Signal<number>;

  ngOnInit() {
    let count = 0
    const obs$ = fromEvent(this.button.nativeElement, 'click')
      .pipe(
        map(() => count += 1), // yes there should be some more intelligent code here!!!       
      )
    this.clickCount = signalFromObservable(obs$);
  }
}
```

Again, the observable is _not_ what it should be. It only here to represent an observable stream, don't write code like that!
Notice how the `.subscribe` is gone? That is because the `signalFromObservable` function will take care of that for you. It will also take care of unsubscribing when the component is destroyed. And it will also take care of unsubscribing when the signal is no longer needed. Also a reminder, this is not the final API. This is just an example of what is possible.

### what else is possible?

Of coarse there will be an way to go the other way around. meaning you can create an observable from one (or more) signals. 
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
  customerId = futureMagicalSignalFromInput('customerId',undefined) as sugnal<number | undefined>;
  customer = signalFromObservable(
     observableFromSignal(this.customerId).pipe(
      switchMap(id => id ? this.customerService.getCustomer(id) : of(undefined))
    )
  );
  
  destroy = futureMagicalSignalFromLifeCycleHook('destroy') ;
  
  destroyEffect = effect(() => {
    if (this.destroy) {
      console.log('destroying the customer signal, while destroying the component');  
    }
  })
}

```

This is a very contrived example. Let me be clear, I'm unaware of the team having plans around this. To me it makes a lot of sense adding those things once the signal is in the core. But that is just me. I'm sure the team has a lot of other ideas. And I'm sure they will be great. 

### learnability

Ok, this is one more concept to learn, so its a hit for learnability, right?. Well, not really. the API will be really simple, and even easier to grasp as promises. And it will be a lot easier to grasp than observables. Having this in the toolbox will help both sides. Both the nay, as well as the yay-sayers on observables will be able to use this (remember the 50-50 divide!). And that is a win for everyone.
Right now ZoneJS is a black box. You can't really see what is going on. And that is a problem. With signals, you will be able to see what is going on. And that is a win for everyone.

## Conclusion

Angular signals are all set to green for a bright future. They will be the foundation for a load of cool stuff, and will be the (now missing) grease between lots of things. Especially the interop between observables and signals will be a huge win. Dropping in and out of the reactive stream is where most problems are, and this will decrease the need for this dropping in and out. 
ZoneJS is wonderful, but at the same time, it can be an issue for performance in some cases. Reading the signal tells me that this is also something where by buying into them will make a huge difference.

