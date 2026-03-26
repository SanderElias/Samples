# Stating the state of state

In this article I want to explore the state of state. And get rid of some of the misconceptions around it.

My regular readers know, but if you're new: I use Angular as my reference point, though the concepts apply universally. With that out of the way:

## What is state?

State is [data](./blog/what-is-data). Also, data is state. However, while both are true, there is a difference. What would that be? Ohh, the suspense... What is the difference between data and state? Well, it's context. In most cases, we call data state when it is used to represent the current condition. In frontend development, we often refer to state as the data that represents the current condition of the UI. It is what allows us to create dynamic and interactive user interfaces. State can be used to store user input, track the status of a component, or manage the flow of an application.

That's a whole lot of words, let's give some concrete examples:

### URI example

`https://localhost:4200/blog/the-state-of-state` Yup, that _is_ a state! It represents the current condition of this application. When we change it, this application _will_ update. Most of the time, we use the URI to select a certain feature in our app. Quite often, a part of it is to select a certain item. In this case, we selected the `blog` feature, and `the-state-of-state`. This is such a common pattern that we often forget that it _is_ state.

> [!TIP] The URI is a (frequently overlooked) piece of state. It's a powerful one, allowing us to enter different parts of the application, and also to share links with others. Also, it's in many cases totally underutilized, leaving low-hanging fruit on the tree. (Not on the table, it wouldn't be hanging, right?). More often than not, I see applications that have a lot of UI changes that are not reflected there. Think of an embedded tabs component. It has 5 tabs, each with different content, but the URL is always the same. This is a missed opportunity to leverage the power of the URL as a piece of state. By reflecting the current tab in the URL, we can allow users to share links to specific tabs, and also to use the browser's back and forward buttons to navigate between tabs. And that's just one example.

### Another example:

```typescript
class SomeUIThing {
  // this is the data I'm going to show:
  count = signal(10);

  // this is the state:
  colorOfTheNumber = computed(() =>
    this.count() > 5 ? 'red' : 'green'
  );
}
```

This is a bit more interesting. The "count" holds our data. The "colorOfTheNumber" is the state. It's an even more specific piece of state. This is what we call a `derived state`. As its name implies, it's a piece of state that is calculated based on another piece of data. Or state.

I'll leave it at those two examples for now. I think we have established a good understanding of what state is. In frontend development, state is the data that represents the current condition of the UI. Some would even say that the complete UI is just a reflection of the current state. And that is a way of looking at it. There might be some more nuance to it if you ask me. But overall, that is a good way to look at it.

With that out of the way:

## Why do we care about state?

Well, because it allows us to reason about our application. Separation of concerns is a fundamental principle of software engineering. By putting the dynamic pieces into something we call state, we can reason about it in isolation. Also, it makes testing a lot easier, because we can test the state in isolation. It is easy to track changes. That is especially important when we need to debug.
Also, by giving all those small details you need to make your app work a name, it simplifies the way you can reason and talk about it. It gives you a language pattern. Being able to state the obvious is a powerful instrument.

One more reason to care; it prevents accidental complexity. By formalizing state into its own thing, it makes sure we think about it. Make sure it lands in the right place. (global/feature/component/service). It prevents accidental duplication. It makes communication and decision making (especially in teams) easier.

## There can be only one!

In one of the earlier paragraphs I said that state is the data that represents the **current condition** of the UI. Let me dig into that a bit more, as that is an often skipped but important part. State is the _single source of truth_ for the current condition. This means that we must be able to look at the state at any given time. There is an important implication here that is often overlooked. The state must be synchronously accessible. This means that we should be able to read the state without having to wait for anything. No async calls, no promises, and no callbacks.
State must be deterministic. There can be only one!

But, but, but... I must deal with async data. Promises and callbacks are not optional. Well, you are right. But those don't represent the state. At the end of their line, they can _update_ the state. But they are not the state itself. The state is the current condition, and it must be synchronously accessible. The async calls are just a means to an end. They are the way we get the data that will eventually update the state.

## The reactive nature of state

State must be synchronously accessible. However, when the state changes, the UI must update. This is what we call the reactive nature of state. This is a fundamental principle of frontend development.

This tension is where most of the problems with state come from. This is why we pull in all kinds of third parties, and create all kinds of complex state management solutions. To try to deal with this tension. If only we had a primitive to solve that!

Oh wait, we do! We have **_signals_**.

Going into the details of signals is out of scope for this article. Just be aware that there is a primitive that allows us to deal with this tension. It allows us to have a synchronously accessible state, while also allowing the UI to react to changes in the state.

> [!WARNING] Observables are often mistaken for a solution to solve this tension.
>
> **_Observables are not designed for handling state!_**
>
> Observables model _data over time_. They are a good fit for handling events, and streams of data. They are good for modeling _changes_ over time. If you have an observable, it _might_ have the current value, but there is _no way_ to guarantee that. When you are handed one, it might have data, or not. It might receive data in the future, or not. It might be completed, or not. It might be in an error state, or not. There is no way to know. That makes them unfit for modeling state. While there are solutions that keep the current value, the observable contract does not guarantee synchronous access.

The reactive part here is important. Reactivity is about propagating that the state has changed, and the UI needs to update. It is not about 'is there a state?' It is about being notified that the _existing_ state has changed. That is a (not so) subtle but important difference.

## Let that sync in

Stating that state must be synchronously accessible is easy. But perhaps it needs a few more words of explanation. Why is that? Why am I putting so much emphasis on it? Part of it is the SSOT (single source of truth) principle. If you need to know the truth, the 'go away, we don't have one now' answer is not acceptable. It is not acceptable, because when you need an answer now, and need to come back later, you will make something up in the meantime. So, you create your own version of the truth. You need that information now because you need to render something. Often the same state is shared between multiple parts. Quite often, even 3rd party parts. When your state isn't synchronously accessible, you can have drift between those parts. And this drift leads to _very hard to debug_ issues.

Also, when your state is sync, it forces you to think about things like loading and error states. Because if you have a 'product' state, but the product is not loaded yet, you need a way to represent that in your state, and respectively in your UI. And when you are loading something, there is a reasonable chance of an error. You can't ignore those things. (well, you shouldn't)

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

So, by definition, all "solutions" that wrap state in an async solution are really not solutions. Those try to deal with the tension by making the state async, or event-based. It just moves the problem around, and you will still have to deal with this tension at some point. And they add a layer of complexity on top of it. They are not _bad_ per se, but they are not the solution to the state management problem. They are just a way to deal with the tension. They might be a good fit for certain use cases, but they are not the solution to the state management problem.

There are some solutions that _do_ solve the tension problem. Based on signals or proxies (MobX, SolidJS, Vue), or using similar things under the hood. Those are still a minority, but they do exist.

### Do I need a state manager?

As usual, it depends. In most cases, when you are aware of the problem, you don't need a 3rd party anymore. Also, the amount of state you need is often much smaller than you think. A lot of the time we can easily derive the state from the data we have. For most applications, we only need to know if the user is logged in, perhaps with some additional user info. Then we have the route, that selects the feature, and provides the ID of the item we need to show. There might be a few other things, but overall, it is not that much. And most of it can be easily derived from the data we have. So, in most cases, you don't need to manage state at all. You just need to be aware of it, and use it when you need it. But you don't need to manage it.

I have often seen that in large teams with a lot of developers working on the same codebase, there is a tendency to over-engineer. Especially when it comes to state management.
In those cases, the devtools, the time-traveling, and the traceability of state management solutions can be a good fit. It is not always possible to re-engineer the codebase to be more state-less.

## Sample code

A small example to illustrate some of the concepts:

```typescript
export class ProductDetailComponent {
  // URL is state — bound to route param, sync and reactive
  id = input.required<string>();

  // derive the product URI
  uri = computed(() =>
    this.id() ? `/api/products/${this.id()}` : undefined
  );

  // complete state for the fetch:
  //   value,
  //   loading,
  //   error
  // all sync, all reactive
  product = httpResource<Product>(this.uri);

  // derive what you can
  badge = computed(() => {
    const ref = this.product();
    // still (rel)loading or errored? then no badge
    if (!ref.hasValue()) return undefined;
    const { stock, discount } = ref.value();
    return stock === 0
      ? 'sold-out'
      : discount > 0
        ? 'on-sale'
        : undefined;
  });
}
```

This is a small Angular component that shows a product detail. The URL is the state that selects the product. The product URI is derived from that state. Then the new Angular httpResource is used and creates a reactive state around the fetch, giving us an API with signals that represent the value, loading, and error states. Then we have a badge that is derived from the product data. All of this is synchronously accessible, and reactive.

## Machining the state

Up to now, I've been talking about state as a snapshot. State machines take it further by making the transitions between states explicit. Instead of any state being reachable from anywhere, a state machine defines exactly which transitions are valid. By doing that they make illegal states unrepresentable.

Going into full details is out of scope here, but they're worth learning about. They shine in scenarios like complex flows, or connection handling. If you want to dig in, look into a library like XState, or something like statecharts.

## End state

So where do we land?

State is not magic, and it is not a bucket where every changing thing in your app should go. It is simply the synchronously accessible, current condition that your UI reflects. Keep it small. Derive what you can. Let async workflows feed state, but do not confuse them with state.

If you take anything from this article, let it be these:

- State must be **synchronously accessible**. If you can't read it right now, it's not state.
- State must be **reactive**. When it changes, the UI must know.
- You need **far less managed** state than you think. Derive what you can.
- The **URL is state**. Use it.

If you keep that mental model in place, most of the scary parts of "state management" become straightforward engineering trade-offs instead of framework wars.

**That, for now, is the state of state.**
