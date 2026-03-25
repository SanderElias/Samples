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

> [!tip] The URI is (quite often overlooked) piece of state. Its a powerful one, allowing to enter different parts of the application, and also to share links with others. Also, its quite often totally underutilized, leaving low hanging fruits on the tree. (If I would have left it on the table, it wouldn't be hanging, right? :D). Quite often, I see applications that have a lot of ui changes that are not reflected there. Think an embedded tabs component. It has 5 tabs, each with a different content, but the URL is always the same. This is a missed opportunity to leverage the power of the URL as a piece of state. By reflecting the current tab in the URL, we can allow users to share links to specific tabs, and also to use the browser's back and forward buttons to navigate between tabs. And that's just one example.

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

I once of the earlier paragraphs I said that state is the data that represents the __current condition__ of the UI. Let me dig into that a bit more, as that is a often skipped but important part. State is the _single source of truth_ for the current condition. This means that we must be able to look at the state at any given time. There is an important implication here that is often overlooked. The state must be synchronously accessible. This means that we should be able to read the state without having to wait for anything. No async calls, no promises, and no callbacks.
State must be deterministic. There can be only one!

But, but, but... I must deal with async data. Promises and callbacks are not optional. Well, you are right. But those don't represent the state. And the end of their line, they can _update_ the state. But they are not the state itself. The state is the current condition, and it must be synchronously accessible. The async calls are just a means to an end. They are the way we get the data that will eventually update the state. But they are not the state itself. And also not _part_ of the state. They are just a way to get the data that will eventually update the state.

## the reactive nature of state.

State must be synchronously accessible. However, when the state changes, the UI must update. This is what we call the reactive nature of state. When the state changes, the UI must update. This is a fundamental principle of frontend development. 

This tension is where most of the problems with state come from. This is why we pull in all kinds of third parties, and create all kinds of complex state management solutions. To try to deal with this tension. If only we had a primitive to solve that!

Oh wait, we do!. We have ___signals___. 

> [!warning] Observables are often mistaken for a solution to solve this tension. ___they are not!___ Observables model _data over time_. They are a good fit for handling events, and streams of data. They are good for modeling _changes_ over time. If you have a observable, it _might_ have the current value, but there is _no way_ to guarantee that. When you are handed one, it might have data, or not. It might receive data in the future, or not. It might be completed, or not. It might be in an error state, or not. There is no way to know. That makes them unfit for modelling state. 


