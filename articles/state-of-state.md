# The state of hm... state?

In this article I want to go over some state of state. I'm not even going to manage it! It's probably a state-less one.
Let's see where we end.

First of all, we need to set up some context. First off, the context of the whole article. I'm talking about state in the context of building software. Even more specifically, I'm talking about it in the setting of a frontend feature. Most of it will still be applicable to a much broader context. Occasionally, I will mention different contexts, but the main one is the one I just described.

With the state of the article settled (sorry... had to ;), let's get started, first off:

## What is state?

State is [data](./blog/what-is-data). Also, data is state. However, while both are true, there is a difference. What would that be? Ohh, the suspense... What is the difference between data and state? Well, it's context. In most cases, we call data state when it is used to represent the current condition. In frontend development, we often refer to state as the data that represents the current condition of the UI. It is what allows us to create dynamic and interactive user interfaces. State can be used to store user input, track the status of a component, or manage the flow of an application.

That's a whole lot of words, let's give some concrete examples:

### URI example

`https://localhost:4200/blog/the-state-of-state` Yup, that _is_ a state! It represents the current condition of this application. When we change it, this application _will_ update. Most of the time, we use the URI to select a certain feature in our app. Quite often, a part of it is to select a certain item. In this case, we selected the `blog` feature, and the `the-state-of-state`. This is such a common pattern that we often forget that it _is_ a state.

> [!TIP] The URI is a (quite often overlooked) piece of state. It's a powerful one, allowing us to enter different parts of the application, and also to share links with others. Also, it's quite often totally underutilized, leaving low-hanging fruit on the tree. (If I would have left it on the table, it wouldn't be hanging, right? :D). Quite often, I see applications that have a lot of UI changes that are not reflected there. Think of an embedded tabs component. It has 5 tabs, each with different content, but the URL is always the same. This is a missed opportunity to leverage the power of the URL as a piece of state. By reflecting the current tab in the URL, we can allow users to share links to specific tabs, and also to use the browser's back and forward buttons to navigate between tabs. And that's just one example.

### Another example:

```typescript
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

This is a bit more interesting. I stated the "theNumberICareDisplaying" is the data. But that is highly subjective. For now, it's the data, and we will leave it at that. The "colorOfTheNumber" is the state. It's even a more specific piece of state. This is what we call a `derived state`. As its name implies, it's a piece of state that is calculated based on another piece of data. Or state.

I'll leave it at those two examples for now. I think we have established a good understanding of what state is. In frontend development, state is the data that represents the current condition of the UI. Some would even say that the complete UI is just a reflection of the current state. And that is a way of looking at it. There might be some more nuance to it if you ask me. But overall, that is a good way to look at it.

With that out of the way:

## Why do we care about state?

Well, because it allows us to reason about our application. Separation of concerns is a fundamental principle of software engineering. By putting the dynamic pieces into something we call state, we can reason about it in isolation. Also, it makes testing a lot easier, because we can test the state in isolation. It is easy to track changes. That is especially important when we need to debug.

## There can be only one!

In one of the earlier paragraphs I said that state is the data that represents the **current condition** of the UI. Let me dig into that a bit more, as that is an often skipped but important part. State is the _single source of truth_ for the current condition. This means that we must be able to look at the state at any given time. There is an important implication here that is often overlooked. The state must be synchronously accessible. This means that we should be able to read the state without having to wait for anything. No async calls, no promises, and no callbacks.
State must be deterministic. There can be only one!

But, but, but... I must deal with async data. Promises and callbacks are not optional. Well, you are right. But those don't represent the state. At the end of their line, they can _update_ the state. But they are not the state itself. The state is the current condition, and it must be synchronously accessible. The async calls are just a means to an end. They are the way we get the data that will eventually update the state.

## The reactive nature of state

State must be synchronously accessible. However, when the state changes, the UI must update. This is what we call the reactive nature of state. This is a fundamental principle of frontend development.

This tension is where most of the problems with state come from. This is why we pull in all kinds of third parties, and create all kinds of complex state management solutions. To try to deal with this tension. If only we had a primitive to solve that!

Oh wait, we do! We have **_signals_**.

Going into the details of signals is out of scope for this article, just be aware that there is a primitive that allows us to deal with this tension. It allows us to have a synchronously accessible state, while also allowing the UI to react to changes in the state.

> [!WARNING] Observables are often mistaken for a solution to solve this tension.
>
> **_Observables are not designed for handling state!_**
>
> Observables model _data over time_. They are a good fit for handling events, and streams of data. They are good for modeling _changes_ over time. If you have an observable, it _might_ have the current value, but there is _no way_ to guarantee that. When you are handed one, it might have data, or not. It might receive data in the future, or not. It might be completed, or not. It might be in an error state, or not. There is no way to know. That makes them unfit for modeling state.

## Mapping the state

Let's talk locations. Most apps have different pieces of state. Some are global. Like the state of the user. Logged-in? Name? Role? That's all global. The theme to use, also global. And of course the URI. While we are on the URI, that one selects the feature and tells that feature which item(s) to show. A component extracts this piece of global state, and then creates its own local state. It extracts the ID from the router. Then it sets up a local state, like isLoading, errors, and all the things it needs to inform the user. Then when the async has finished it adds that data to its local state. BTW, local state can also mean there is a service that is only used for this feature or even component. 

Also, when we map the state to its locations, there is an additional dimension to consider. There are things that have transient state. For example, when I do a fetch, there are the obvious things I mentioned before. But there are also things like caching, cache invalidation, and cleanup of stale (cached) data. We cannot ignore those things, but they are not really part of the state in the context of this article. They are implementation details of the machinery that feeds the state. Those are not an active part of the state. Still, they need your attention!

## Hygiene

Brush your teeth, wash your hands, and keep your state small, and clean!

Not everything in your app needs to be in the state. Keeping your state as small as possible is good practice. The smaller things are, the easier they are to reason about. And to test and track. 
Using immutable practices is also proper hygiene. Why? Well, if you mutate existing state, there is _no way_ for the UI to know that something has changed. (well, aside from dirty-checking, but that is a whole other topic). By using immutable practices, you create a new state object when something changes. This allows the UI to know that something has changed, and to update accordingly. Even when using signals, mutation can land you in trouble. If you mutate an object that is part of the state, the signal will not know that it has changed, and the UI will not update. So, even with signals, you should use immutable practices.

Then we have to remember that our frontend is not the only place that can have state. Our backend probably has session state. So does the database. Keep in mind: there can be only one. The single source of truth might live in the backend, and when we need to update that, we need to make sure everything stays in sync.

## The state of management

State management is a term often used. There are numerous third-party libraries that claim to be the _final_ solution to the "state management problem". Let me restate that problem:

> _the tension between having a synchronously accessible state, and the reactive nature of state._

So, by definition, all "solutions" that wrap state in an async solution are really not solutions. Those try to deal with the tension by making the state async, or event based. It just moves the problem around, and you will still have to deal with this tension at some point. And they add a layer of complexity on top of it. They are not _bad_ per se, but they are not the solution to the state management problem. They are just a way to deal with the tension. They might be a good fit for certain use cases, but they are not the solution to the state management problem.

There are some solutions that _do_ solve the tension problem. Based on signals or proxies, or using similar things under the hood. Those are still a minority, but they do exist. 

## Do I need to manage state?

As usual, it depends. In most cases, when you are aware of the problem, you don't need a 3rd party anymore. Also, the amount of state you need is often much smaller than you think. A lot of the time we can easily derive the state from the data we have. For most applications, we only need to know if the user is logged in, perhaps with some additional user info. Then we have the route, that selects the feature, and provides the ID of the item we need to show. There might be a few other things, but overall, it is not that much. And most of it can be easily derived from the data we have. So, in most cases, you don't need to manage state at all. You just need to be aware of it, and use it when you need it. But you don't need to manage it.

I have often seen that in large teams with a lot of developers working on the same codebase, there is a tendency to over-engineer. Especially when it comes to state management.
In those cases, the devtools, the time-traveling, and the traceability of state management solutions can be a good fit. It is not always possible to re-engineer the codebase to be more state-less. 

## Machining the state

Up to now, I’ve been talking about state as a snapshot. State machines are basically what happens when we also make the transitions explicit. State machines are a mathematical model of computation. Those are used in math and theoretical computer science to model the behavior of systems. There are mainly two types of state machines: finite state machines, and pushdown automata. The difference is that a finite state machine has a known number of states, where the other one can have an infinite number of states. 

While those are very interesting, and are worthwhile to learn about, in the scope of this article you can consider them as very elaborate computed states. (yes, not technically correct, but it will do for this article). You push a state into the machine, and on the other side, another state pops out.
You should learn about them nevertheless, as those can be _very_ useful, and give you a lot of insights on how to solve a certain class of problems. But for now, you can just consider them as very elaborate computed states.

## End state

So where do we land?

State is not magic, and it is not a bucket where every changing thing in your app should go. It is simply the synchronously accessible, current condition that your UI reflects. Keep it small. Derive what you can. Let async workflows feed state, but do not confuse them with state.

If you keep that mental model in place, most of the scary parts of "state management" become straightforward engineering trade-offs instead of framework wars.

**That, for now, is the state of state.**



