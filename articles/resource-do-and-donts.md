# Resources, what not to do

## what are resources?

Well, we have state, which in Angular usually resides into a signal.
As we know a signal is a reactive primitive that holds data in a sync way.
That means, however, as those are sync, and the way we interface with
the rest of the ecosystem is mostly async, we need a way to bridge
that gap. Resources in Angular bridge this gap. They allow us to
fetch the data in a async way, while still being able to use signals
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

They have all a similar API, but differ in how they handle the
async part. First, lets dig into the commonalities:

## Commonalities

All resources share a common API, Let me list the most important
ones here:

- `value()`: A signal that holds the current value
  of the resource. If the resource is still loading, it will hold
  `undefined` (or the initial value you provided).
- 'isLoading()`: A signal that tells you if the resource
  is currently loading or not.
- `error()`: A signal that holds the current error
  of the resource, if any, otherwise it is `undefined`.
- `reload()`: this is a method that allows you to reload
  the resource.

There is a little bit more, but those are the important ones,
and shared between all resources.

witch that out of the way, lets dig into each resource type.

### resource

This is the most basic resource, and the others are mostly build on
top of this one. Let us do a basic example:

```typescript
@injectable({ providedIn: 'root' })
export class StupidSample {
  source = signal<undefined|number>(undefined);
  myResource = resource({
    params: this.source, // don't do anything as long as source is undefined
    defaultValue: 0, // initial value
    loader: async ({params}) => {
      // a small pause to simulate async work
      await new Promise((r) => setTimeout(r, 250));
      if (math.random() < 0.2) {
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
@injectable({ providedIn: 'root' })
export class StupidSample {
  userId = signal<undefined | number>(undefined);
  #userUrl = computed(() => {
    const id = this.#userUrl();
    return id ? `https://api.example.com/users/${id}` : undefined;
  });
  userResource = httpResource(this.userUrl);
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

I have a strong opinion that you should not longer use
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

Ah, someone is paying attention! Lets dig a bit into that.
Resources do have a cost. For every value you fetch from the
backend there is a whole state machine running, on top of
what you needed to do before. This means more memory usage,
and more CPU usage.

Is that a problem? When used for the right things, no. Because
for fetching data, you need most of this state machine anyway.
But you needed to build tha manually before, and over and over
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

### I don't believer that!

Good! Always question things.
Let me sample you a simple CRUD endpoint service:

````typescript
@Injectable()
export class UserService {
  #http = inject(HttpClient);
  #base = signal(signal<number | undefined>(undefined).asReadonly());
  #userId = linkedSignal(() => this.#base()());
  #userUrl = computed(() => {
    const id = this.#userId();
    return id ? `https://api.example.com/users/${id}` : undefined;
  });
  userResource = httpResource<User>(this.#userUrl);
  actionRunning = signal(false);
  lastError = signal<Error | undefined>(undefined);

  #handleEndpoint = (p: Observable<unknown>): Promise<boolean> => {
    this.actionRunning.set(true);
    this.lastError.set(undefined);
    return firstValueFrom(p)
      .then(() => true)
      .catch(e => {
        this.lastError.set(e as Error);
        return false;
      }) // retrowing, so the caller can also handle it
      .finally(() => this.actionRunning.set(false));
  };

  link(idSignal: Signal<number | undefined>) {
    this.#base.set(idSignal);
    return this; // convenience for chaining
  }

  create(user: User): Promise<boolean> {
    return this.#handleEndpoint(this.#http.post('https://api.example.com/users/user', user));
  }

  read(id: number) {
    this.#userId.set(id);
  }

  update(user: User): Promise<boolean> {
    return this.#handleEndpoint(this.#http.put(`https://api.example.com/users/${user.id}`, user)).then(success => {
      if (success) {
        this.userResource.value.set(user);
      }
      return success;
    });
  }

  delete(id: number): Promise<boolean> {
    return this.#handleEndpoint(this.#http.delete(`https://api.example.com/users/${id}`)).then(success => {
      if (success) {
        this.#userId.set(undefined);
        this.userResource.value.set(undefined);
      }
      return success;
    });
  }
}```

Wow, that is a lot of code. I agree there, but abstracting that away
is going to be in a follow-up article. The important part here is that
we only use the `httpResource` for the `read` operation. The other operations
are one-off calls, and don't need the full state machine of the resource.
This makes using this service easy to reason about, and efficient.
Also, it implicitly handles the `error` and the `isGoing` states.
In my follow-up article I will show how to abstract this, and as a added bonus
I will expose an `isGoing` signal from the service itself, so the
consuming component can easily show a 'busy' indicator when needed.

In a component, using this service would look like this:

```typescript
@Component({
  selector: 'app-user-detail',
  template: `...`
})
export class UserDetailComponent {
  userId = input<number | undefined>();
  #userService = inject(UserService).link(this.userId);
  userResource = this.#userService.userResource;
  showSaving = this.#userService.actionRunning;

  async saveUser(user: User) {
    const success = await this.#userService.update(user);
    if (!success) { // handle error, maybe show a toast?
      console.error('Failed to save user:', this.#userService.lastError());
    }  
  }
}
````

There is still a bit of boilerplate for handling the showSaving state,
but that is manageable, and also going to be addressed in the follow-up article.
