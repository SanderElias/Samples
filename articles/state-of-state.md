# The state of hm... state?

In this article I want to go over some state of state. I'm not even going to manage it! Its probably a state-less one.
Lets see where we end.

First of all, we need to set up some context. First off, the context of the whole article. I'm talking about state in the context of building software. Even more specifically, I'm talking about it in the setting of a frontend feature. Most of it will still be applicable to a much broader context. Occasionally, I will mention different contexts, but the main one is the one I just described.

With the state of the article settled. (sorry,... had to ;) lets get started, first of:

## What is state?

State is [data](./blog/what-is-data). Also, data is state. However, while both are true, there is a difference. What would that be? Ohh the suspense... WHat is the difference between data and state? Well, its context. In most cases we call data state when it is used to represent the current condition. In frontend development, we often refer to state as the data that represents the current condition of the UI. It is what allows us to create dynamic and interactive user interfaces. State can be used to store user input, track the status of a component, or manage the flow of an application.

That's a whole lot of words, lets give some concrete examples:

### URI example

`https://localhost:4200/blog/the-state-of-state` Yup, that _is_ a state!. It represents the current condition of this application. When change it, this application _will_ update. Most of the time we use the URI to select a certain feature in our app. Quite often, a part of the it is to select a certain item. In this case, we selected the `blog` feature, and the `the-state-of-state`. This is such a common pattern that we often forget that it _is_ a state.

> [!TIP] The URI is (quite often overlooked) piece of state. Its a powerful one, allowing to enter different parts of the application, and also to share links with others. Also, its quite often totally underutilized, leaving low hanging fruits on the tree. (If I would have left it on the table, it wouldn't be hanging, right? :D). Quite often, I see applications that have a lot of ui changes that are not reflected there. Think an embedded tabs component. It has 5 tabs, each with a different content, but the URL is always the same. This is a missed opportunity to leverage the power of the URL as a piece of state. By reflecting the current tab in the URL, we can allow users to share links to specific tabs, and also to use the browser's back and forward buttons to navigate between tabs. And that's just one example.

### Another example:

```TypeScript
class SomeUIThing {
  // this is the data I'm going to show:
  theNumberICareDisplaying = signal(10);

  // this is the state:
  colorOfTheNumber = computed(() => {
    if (this.theNumberICareDisplaying() > 5) {
      return 'red';
    } else {
      return 'green';
    }
  });
}
```

This is a bit more interesting. I stated the "theNumberICareDisplaying" is the data. But that is highly subjective. For now, its the data, and we will leave it at that. The "colorOfTheNumber" is the state. Its even a more specific piece of state. This is wat we call a `derived state`. As it's name implies, its a piece of state that is calculated based on an other piece of data. Or state.

I'll leave with those 2 examples for now. I think we have established a good understanding of what state is. In frontend development, state is the data that represents the current condition of the UI. Some would even say that the complete UI is just a reflection of the current state. And that is way of looking at it. There might be some more nuance to it if you ask me. But overall, that is a good way to look at it.

With that out of the way:

## Why do we care about state?

Well, because it allows us to reason about our application. Separation of concerns is a fundamental principle of software engineering. By putting the dynamic pieces into something we call state, we can reason about it in isolation. Also, it makes testing a lot easier. It _does_, but going into the details of why an how is out of scope for this article. Maybe in a future one.

## There can be only one!

I once of the earlier paragraphs I said that state is the data that represents the **current condition** of the UI. Let me dig into that a bit more, as that is a often skipped but important part. State is the _single source of truth_ for the current condition. This means that we must be able to look at the state at any given time. There is an important implication here that is often overlooked. The state must be synchronously accessible. This means that we should be able to read the state without having to wait for anything. No async calls, no promises, and no callbacks.
State must be deterministic. There can be only one!

But, but, but... I must deal with async data. Promises and callbacks are not optional. Well, you are right. But those don't represent the state. And the end of their line, they can _update_ the state. But they are not the state itself. The state is the current condition, and it must be synchronously accessible. The async calls are just a means to an end. They are the way we get the data that will eventually update the state. But they are not the state itself. And also not _part_ of the state. They are just a way to get the data that will eventually update the state.

## the reactive nature of state.

State must be synchronously accessible. However, when the state changes, the UI must update. This is what we call the reactive nature of state. When the state changes, the UI must update. This is a fundamental principle of frontend development.

This tension is where most of the problems with state come from. This is why we pull in all kinds of third parties, and create all kinds of complex state management solutions. To try to deal with this tension. If only we had a primitive to solve that!

Oh wait, we do!. We have **_signals_**.

Going into the details of signals is out of scope for this article, just be aware that there is a primitive that allows us to deal with this tension. It allows us to have a synchronously accessible state, while also allowing the UI to react to changes in the state.

> [!WARNING] Observables are often mistaken for a solution to solve this tension.
>
> **_Observables are not designed for handling state!_**
>
> Observables model _data over time_. They are a good fit for handling events, and streams of data. They are good for modeling _changes_ over time. If you have a observable, it _might_ have the current value, but there is _no way_ to guarantee that. When you are handed one, it might have data, or not. It might receive data in the future, or not. It might be completed, or not. It might be in an error state, or not. There is no way to know. That makes them unfit for modelling state.

## the state of management

State management is a term often used. There are numerous third party libraries that clame to be the _final_ solution to the "state management problem". Let me restate that problem;

> _the tension between having a synchronously accessible state, and the reactive nature of state._

So, by definition, all "solutions" that wrap state in an async solution, are really not solutions. Those try to deal with the tension by making the state async, or event based. It just moves the problem around, and you will sill have to deal with this tension at some point. And they add an layer of complexity on top of it. They are not _bad_ per se, but they are not the solution to the state management problem. They are just a way to deal with the tension. They might be a good fit for certain use cases, but they are not the solution to the state management problem.

There are some solutions that _do_ solve the tension problem. Based on signals or proxies, or using similar things under the hood. Those are still a minority, but they do exist. 

## Do I need to manage state?

As usual, it depends. In most cases, when you are aware of the problem, you don't need a 3rth party anymore. Also, the amount of state you need is often much smaller than you think. A lot of the time we can easily derive the state from the data we have. For most of the applications, we only need the to know of the user is logged in, perhaps with some additional user info. Then we have the route, that selects the feature, and provides the id of the item we need to show. There might be a few other thing, but overall, it is not that much. And most of it can be easily derived from the data we have. So, in most cases, you don't need to manage state at all. You just need to be aware of it, and use it when you need it. But you don't need to manage it.

## Machining the state

An article about state would not be complete without mentioning state machines. State machines are a mathematical model of computation. Those are used in math and theoretical computer science to model the behavior of systems. There are mainly two types of state machines: finite state machines, and pushdown automata. The difference is that a finite state machine has a known number of states, where the other one can have an infinite number of states. 

While those are very interesting, and are worth while to learn about, in the scope of this article you can consider them as very elaborate computed states. (yes, not technically correct, but it will do for this article). You push a state into the machine, and on the other side, another state pops out. 
You should learn about them nevertheless, as those can be _very_ useful, and give you a lot if insights on how to solve a certain class of problems. But for now, you can just consider them as very elaborate computed states.

## End state

So where do we land?

State is not magic, and it is not a bucket where every changing thing in your app should go. It is simply the synchronously readable, current condition that your UI reflects. Keep it small. Derive what you can. Let async workflows feed state, but do not confuse them with state.

If you keep that mental model in place, most of the scary parts of "state management" become straightforward engineering trade-offs instead of framework wars.

**That, for now, is the state of state.**



