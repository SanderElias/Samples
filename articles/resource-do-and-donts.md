# Let us resource all the things!

## what are resources?

Well, we have state, which in Angular usually resides into a signal.
As we know a signal is a reactive primitive that holds data in a sync way.
That means, however, as those are sync, and the way we interface with
the rest of the ecosystem is mostly async, we need a way to bridge
that gap. Resources in Angular bridge this gap. They allow us to
fetch the data in an async way, while still being able to use signals
and synchronous thinking in our application. And all this time we
are still being reactive. This is very neat!

> [!NOTE] `resources` are still experimental as of Angular 18.
> While they are quite stable, and you can use them, there might
> be a change that there will be a breaking change before those
> become preview or stable.

Right now we have three types of resources:

- `resource`
- `httpResource`
- `RxResource`

They all have a similar API, but differ in how they handle the
async part. First, let's dig into the commonalities:

## Commonalities

All resources share a common API. Let me list the most important
ones here:

- `value()`: A signal that holds the current value
  of the resource. If the resource is still loading, it will hold
  `undefined` (or the initial value you provided).
- `isLoading()`: A signal that tells you if the resource
  is currently loading or not.
- `error()`: A signal that holds the current error
  of the resource, if any, otherwise it is `undefined`.
- `reload()`: this is a method that allows you to reload
  the resource.

There is a little bit more, but those are the important ones,
and shared between all resources.

With that out of the way, let's dig into each resource type.

### resource

This is the most basic resource, and the others are mostly built on
top of this one. Let us do a basic example:

```typescript
@Injectable({ providedIn: 'root' })
export class StupidSample {
  source = signal<undefined|number>(undefined);
  myResource = resource({
    params: this.source, // don't do anything as long as source is undefined
    defaultValue: 0, // initial value
    loader: async ({params}) => {
      // a small pause to simulate async work
      await new Promise((r) => setTimeout(r, 250));
      if (Math.random() < 0.2) {
        // simulate a failure 20% of the time
        throw new Error('Random failure!');
      }
      // the params is guaranteed to be defined here,
      // as this loader won't be called until params is defined
      return params! * 2;
    },
  })
```

In this example we have a resource that doubles the value of the
`source` signal. As long as `source` is `undefined`, the resource
won't load anything, and the value of the resource will be `0`
(the default value). As soon as we set the `source` signal to a
number, the loader function will be executed, and once the promise
is resolved, the value of the resource will be updated.
Unless it fails, in which case the error signal will be set.
During the execution time of the promise, the `isLoading`
signal will be `true`.
This means we have all the state we need for a nice UI. We can inform
the user we are loading stuff, and we can inform them when something
goes haywire.

Neat!

### httpResource

This resource is a specialized version of the `resource` that
is tailored to work with HTTP requests. It uses the Angular
`HttpClient` under the hood, and provides a more convenient
API for making HTTP requests.

Here is a basic example:

```typescript
@Injectable({ providedIn: 'root' })
export class StupidSample {
  userId = signal<undefined | number>(undefined);
  #userUrl = computed(() => {
    const id = this.userId();
    return id ? `https://api.example.com/users/${id}` : undefined;
  });
  userResource = httpResource(this.#userUrl);
}
```

Neat! This will automatically make a GET request to the
provided URL whenever the `userId` signal changes.

#### But what is up with that `computed`? Why not just pass the URL directly?

Good question! The reason is that the `httpResource` will
only make a request when the URL is defined. It would be an
easy mistake to do something like this:

```typescript
userResource = httpResource(() => `https://api.example.com/users/${this.userId()}`);
```

In this case, when `userId` is `undefined`, the URL would be
`https://api.example.com/users/undefined`, which is probably
not what you want. By using a `computed`, I make it a bit
more explicit that the URL can be `undefined`, and the resource
will only load when it is defined.

### RxResource

This resource is another specialized version of the `resource`
that is tailored to work with Observables. It allows
you to easily convert an Observable into a resource.
It handles the subscription, and will update the
value of the resource whenever the Observable emits a new value.
And something with errors too.
I'm not going to cover this one in detail here.

#### But why not?

I have a strong opinion that you should no longer use
observables in your Angular applications. Signals are
the way to go. They need a different mindset. By using observables
you are mixing two different paradigms, and that can lead to very
confusing bugs. Making a clean break is really easier.

I know there are still use cases for Observables. Which I gladly
will handle with Observables. Once all that is done, I will
convert the parts needed to visualize in the UI into a signal.
Tools like `toSignal` and `rxResource` help with that.
But things like websockets, SSE, or other streaming data sources
are a rare case in most business applications.

Most B2B apps are forms over CRUD. You don't need Observables.

## But _why_ should I use resources?

Because they are the new shiny blinking things!

Aside from the raven enthusiasm, resources provide a clean and
reactive way to handle async data in your application. They
integrate seamlessly with signals, and provide a simple API
to handle loading states and errors. This makes your code
cleaner, and easier to reason about. And it encourages you to
build proper UI for your users, informing them about all they need
to know about _their_ job.

## something, something, **_costs_**?

Ah, someone is paying attention! Let's dig a bit into that.
Resources do have a cost. For every value you fetch from the
backend there is a whole state machine running, on top of
what you needed to do before. This means more memory usage,
and more CPU usage.

Is that a problem? When used for the right things, no. Because
for fetching data, you need most of this state machine anyway.
But you needed to build that manually before, and over and over
again.

However, if you go like:

> Resources are great, I'm going to replace every HTTP call
> with an `httpResource`!

You are going to have a bad time!

Because now you are paying the cost of the resource for
every HTTP call. Most of those calls are one-off, and don't
need the full state machine.

Also, resources make them "sync" which makes it harder to
reason about them. Wait, whut? You just told us resources
are easier to reason about!. Yes, but only when used for
actually _fetching_ data that is going to be used in the UI.

For one-off calls, like updating your model on the server,
just use the `HttpClient` directly. It is simpler, and
cheaper. (remember, resources have a cost, on _TOP_ of that).

### I don't believe that!

Good! Always question things.
Let me sample you a simple CRUD endpoint service:

```typescript
import { endpointHandler, successHandler, type Action, type Result } from './endpoint-action-handler';
@Injectable()
export class UserService {
  #http = inject(HttpClient);
  #url = (id: number) => `/api/users/${id}`;
  #base = signal(signal<number | undefined>(undefined).asReadonly());
  #userId = linkedSignal(() => this.#base()());
  #userUrl = computed(() => {
    const id = this.#userId();
    return id ? this.#url(id) : undefined;
  });
  userResource = httpResource<User>(this.#userUrl);
  action = signal<Action>({ running: false });

  link(idSignal: Signal<number | undefined>) {
    this.#base.set(idSignal);
    return this; // convenience for chaining
  }

  create(user: User): Promise<Result> {
    return endpointHandler({
      actionSignal: this.action,
      serverCall: this.#http.post(this.#url(user.id), user),
      actionType: 'create'
    }).then(
      successHandler(data => {
        // assuming the server sends back the created user:
        this.#userId.set((data as User).id);
        this.userResource.value.set(data as User);
      })
    );
  }

  read(id: number) {
    this.#userId.set(id);
  }

  update(user: User): Promise<Result> {
    return endpointHandler({
      serverCall: this.#http.put(this.#url(user.id), user),
      actionType: 'update',
      actionSignal: this.action
    }).then(
      successHandler(() => {
        this.userResource.value.set(user);
      })
    );
  }

  delete(id: number): Promise<Result> {
    return endpointHandler({
      serverCall: this.#http.delete(this.#url(id)),
      actionType: 'delete',
      actionSignal: this.action
    }).then(
      successHandler(() => {
        this.#userId.set(undefined);
        this.userResource.value.set(undefined);
      })
    );
  }
}
```

<details>
<summary>`endpoint-action-handler` code</summary>

I have extracted the common logic for handling the endpoint
actions into a separate file, to keep the service clean.

```typescript
import type { WritableSignal } from '@angular/core';
import { type Observable, firstValueFrom } from 'rxjs';

type ActionType = 'create' | 'update' | 'delete';

type InitialAction = { running: false };
type RunningAction = { running: true; actionType: ActionType };
export type SuccessResult = { success: true; data: unknown };
export type FailureResult = { success: false; error: Error };
export type SuccessFulAction = { running: false; actionType: ActionType; lastResult: SuccessResult };
export type FailedAction = { running: false; actionType: ActionType; lastResult: FailureResult };
export type Action = InitialAction | RunningAction | SuccessFulAction | FailedAction;

export type Result = SuccessResult | FailureResult;

interface EndpointHandlerParams {
  serverCall: Observable<unknown>;
  actionType: ActionType;
  actionSignal: WritableSignal<Action>;
}

export const endpointHandler = ({ serverCall, actionType, actionSignal }: EndpointHandlerParams): Promise<Result> => {
  if (actionSignal().running) {
    // prevent concurrent actions
    throw new Error('Another action is already running');
  }
  // set action to running, and clear previous results
  actionSignal.set({ running: true, actionType });
  return firstValueFrom(serverCall)
    .then(data => {
      const lastResult: SuccessResult = { success: true, data };
      actionSignal.set({ running: false, actionType, lastResult });
      return lastResult;
    })
    .catch(e => {
      const lastResult: FailureResult = { success: false, error: e };
      actionSignal.set({ running: false, actionType, lastResult });
      return lastResult;
    });
};

export const successHandler =
  (action: (data: unknown) => void) =>
  (result: Result): Result => {
    if (result.success) {
      action(result.data);
    }
    return result;
  };

export const errorHandler =
  (action: (error: Error) => void) =>
  (result: Result): Result => {
    if (!result.success) {
      action(result.error);
    }
    return result;
  };
```

</details>

When using this in a component, using this service would look like this:

```typescript
@Component({
  selector: 'app-user-detail',
  template: `...`
})
export class UserDetailComponent {
  userId = input<number | undefined>();
  // link the userId signal to the service,
  // so the service knows which user to load
  #userService = inject(UserService).link(this.userId);
  userResource = this.#userService.userResource;
  // show a spinner when an action is running
  actionSpinner = computed(() => {
    return this.#userService.action().running;
  });

  async saveUser(user: User) {
    const result = await this.#userService.update(user);
    if (!result.success) {
      // handle error, maybe show a toast?
      console.error('Failed to save user:', result.error);
    }
  }

  // as this is a detail component, we
  // don't handle create and delete here
  // ad that is not a responsibility of this component
}
```

Let's do a small analysis of this code:

- The service uses an `httpResource` to fetch the user data.
- The service has methods for `create`, `read`, `update`, and `delete`
  that use the `endpointHandler` to handle the async calls.
- The component links its `userId` input signal to the service,
  so the service knows which user to load.
- The component uses the `userResource` from the service to display
  the user data.
- The component shows a spinner when an action is running,
  by computing the `running` state from the service's action signal.

There is some boilerplate code in the service, but that is for an follow-up
article. Overall, the code is clean, and easy to reason about.
All endpoint handlers return a `Promise<Result>`, so the component
can handle success and failure in a uniform way. Also the service has
an exposed `action` signal, so the component can react to the state
of the service, like showing a spinner when an action is running.

Did you notice how little code the component needs? And how easy
it is to reason about what is going on in there?
Still, the component is fully reactive, and has all the state it
needs to inform the user about loading and error states.

So, you still believe resources are better for one-off calls?
If se, please explain to me why you think so. I'm curious. 
I really want to understand. 

## So, let's get on with it

Back to the program. Use resources where they are created for:

> [!IMPORTANT] resources are for fetching data!

But not for one-off calls, like updating/creating/deleting data.
Why is that different? Because fetching data is something your
app does _before_ the user can do anything. The user needs to
wait until it is there. Also, when something fails, the user
probably needs something else as a blank screen. 
Also, we might need to update data that is already on the screen.
because an other user changed it, or, well, whatever reason.
So, for getting data we need:

- a way to tell it is loading
- a way to tell if there was an error
- a way to refetch the data
- a way to update the current value
- a way to have an initial value
- a way to depend on parameters/triggers

A resource provides all that. With a very nice API.

For one-off calls, like saving a form, or deleting an item,
the expectations are different.
They understand that when they take an action, like saving a form,
the machinery is dealing with their request. They expect that.
Popping up a spinner with "Saving..." is what they expect.
Also they expect to be informed when something goes wrong.
and in some occasions even when something goes right.
They took an action, and they expect feedback.

So we have this one-off action, that starts, and after a while ends with
either success or failure. It translates to:

action -> running -> success | failure

Do we have a tool in our box that models this? Well, yes.
this is exactly what a  promise models. You start it, and after a while
it either resolves or rejects. Perfect fit!

In the above example I added a convenience layer, that makes it easier
in the context of Angular. But at its core it is _a promise._

## conclusion

Resources are a powerful tool to fetch data in a reactive way, based on
signals. They provide a clean API to handle loading states and errors, 
and all that is needed around _fetching_ data.

However, quite often I hear a question like:
> But can I use resources for saving data too?

The answer is: No, you should not. For one-off actions like saving,
deleting, or updating data, you should use promises. 
While it is technically possible to use resources, they are a suboptimal
fit for that use case. They add unnecessary complexity and cost,
while promises provide a simpler and more direct way to handle
one-off actions.

So, fetch your resources, and I'll promise you smooth actions!
