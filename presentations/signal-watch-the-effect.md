<!-- markdownlint-disable MD003 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD022 -->
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD041 -->
<div>

# Signals, watch the effect

## a presentation by Sander Elias

</div>

<style>
  section {
    background-image: url('/assets/angular_signals.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  section div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 2rem;
  }

</style>

---NextSlide

![me](/assets/sander.png)

<div>

# Who I am

- Sander Elias
- husband
- father of 4
- GDE in web and Angular
- Consultant
- building software since 1979
- I love to share knowledge

</div>

<style>
  div#slide {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  } 
</style>

---NextSlide

![me](/assets/sander.png)

<div>

## What I do/did

- Angular Performance Engineer at FeDex
- HeroDevs - Principal Engineer
- Pandora - Angular Architect
- Dutch Angular Group
- Validointi
- consulting
- Scully

 <aside>note: those are sorted on visual length. I am not sure if that is the right order ;)</aside> 
</div>

<style>

  div#slide {
    display: grid;
    grid-template-columns: 35cqi 60cqi;
    grid-template-rows: 1fr;
  }

  aside {
    margin-top: 2rem;
    text-align: right;
    font-size: calc(.65 * var(--base-font-size));
  }
</style>

---NextSlide

<div>

# Signals, watch the effect

## so, what's that about?

Once upon a time, in a land far far away, there was a developer who used Angular. He had heard about the new `effect()` function and wanted to use it. But he was warned. He was told not to use it. But he did not listen. He used it anyway. And he lived happily ever after. Or did he?

</div>

---NextSlide

<div>

# Signals, watch the effect

## bummer!

Well, to be honest, he did.

<div>
<style>
  h2 {
    animation: myEntry 3s;
  }
</style>

---NextSlide

<div>

# Signals, watch the effect

## shortest talk ever!

### The end!

</div>
<style>
  h2{
    animation: myEntry 4s;
  }
  section div#slide div h3 {
    font-size: calc(7 * var(--base-font-size));
    font-weight: bold;
    animation: myEntry 2s;
    margin: calc(7 * var(--base-font-size))0;
    text-align: center;
  }

</style>

---NextSlide

<div>

# The shortest talk ever?

## Yeah, right!

- `signals` are synchronous
- `effect()`'s not (so much)
- `AfterRenderEffect` is really not
- because of that, glitches can occur
- (unless you want to demo those glitches,  
  then they _never_ occur)

</div>

<style>
  h2{
    animation: myEntry 2s;
  }


</style>

---NextSlide

<div>

# Why do I _need_ effects?

## _checks manual_

- to bridge the gap between sync and async
- for the handling of side effects
  - **me:** _skips the cautions_
- to do DOM updates after the render
  - When there is no other way
  - something read/wri.(_stopped reading_)
  - **me:** _stops reading manual_
- **me:** _I know what I'm doing_, <span>**lets build**</span>

</div>
<style>
  h2 { animation: myEntry 2s; }
  li span { font-size:0; }
  li.revealed span { animation: myAppear 1.5s forwards; }
</style>

---NextSlide

<div>

# Create an userService class

## after all, we need some data

```typescript
type MyResourceParams = { resource: number; abortSignal?: AbortSignal };

@injectable({ providedIn: 'root' })
class UserService {
  // gets a user by id, this operation will _never_ fail!!!
  getUser = async ({ request, abortSignal }: MyResourceParams): Promise<User> => {
    return fetch(`https://api.example.com/users/${request}`, { signal: abortSignal })
      .then(response => response.json())
      .catch(() => ({}));
  };

  saveUser = async (user: User): Promise<User> => {
    // I have saved the user to the backend, pinky promise!
    return true;
  };
  /** I'm using fetch here, but `firstValueFrom(http.get<User>(url))`
      would work just as well.   */
}
```

</div>
<style>
  h2 { animation: myEntry 1s; }
</style>
---NextSlide

<div>

# And then the component

## we can do this!

```typescript
class MyComponent {
  us = inject(UserService);
  userId = input<number>();
  user = signal<User>({} as User); // 🔥 this is fine 🔥
  save = this.us.saveUser;

  _ = effect(async () => {
    const id = this.userId();
    if (id) {
      const user = await this.us.getUser({ request: id });
      this.user.set(user);
    }
  });
}
```

</div>
<style>
  h2 { animation: myEntry 1s; }
</style>

---NextSlide

<div>

# Done! Push to production

## not so fast

- what happens when the id gets updated?
  - before the previous call is done?
  - results are out of sync?

</div>
<style> h2 { animation: myEntry 3s; } </style>

</div>
---NextSlide

<div>

# Urg, Fine............!

## not frustrated<span> at all</span>

```typescript
class MyComponent {
  us = inject(UserService);
  userId = input<number>();
  user = signal<User>({} as User); // 🔥 this is fine 🔥
  save = this.us.saveUser;

  ab = new Abortcontroller();
  _ = effect(async () => {
    const id = this.userId();
    this.ab.abort();
    this.ab = new Abortcontroller();
    const abortSignal = this.ab.signal;

    if (id) {
      const user = await this.us.getUser({ request: id, abortSignal });
      this.user.set(user);
    }
  });
}
```

</div>
<style> 
h2 { animation: myEntry 2s; } 
h2 {
  span {
    display: inline;
    font-size: 0;
    animation: myAppear 3s forwards;
  }
}
</style>
---NextSlide

<div>

# Done! Now, Push to production

## ahum, <span>but...</span>

- don't we need a spinner?
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

</div>
<style> h2 { animation: myEntry 2s; }
h2 {
  span {
    display: inline;
    font-size: 0;
    animation: myAppear 3s forwards;
  }
} </style>

</div>
---NextSlide

<div>

# Grmbl beeeeeeep..erdebeep.......!

## I love my craft<span>, totally</span>

```typescript
class MyComponent {
  us = inject(UserService);
  userId = input<number>();
  user = signal<User>({} as User); // 🔥 this is fine 🔥
  save = this.us.saveUser;
  spinner = signal(false);

  ab = new Abortcontroller();
  _ = effect(async () => {
    const id = this.userId();
    this.ab.abort();
    this.ab = new Abortcontroller();
    const abortSignal = this.ab.signal;

    if (id) {
      this.spinner.set(true);
      const user = await this.us.getUser({ request: id, abortSignal });
      this.user.set(user);
      this.spinner.set(false);
    }
  });
}
```

</div>
<style> 
h2 { animation: myEntry 1.5s; } 
h2 {
  span {
    display: inline;
    font-size: 0;
    animation: myAppear 2.3s forwards;
  }
}
---NextSlide

<div>

# Ok! Now, Push to production!

## Yes of course<span>, but...</span>

- what about error handling?
- should we have a way to refresh?
- ...
- see where this is going?

</div>
<style> h2 { animation: myEntry 2s; }
h2 {
  span {
    display: inline;
    font-size: 0;
    animation: myAppear 3s forwards;
  }
} </style>

</div>

---NextSlide

<div>

# Ok, no `effect()` but what then?

## Now<span>, let me show you</span>

### linked signals:

```typescript
class MyComponent {
  userId = input<number>();

  state = computed(() = {
    const id = this.userId();
    return {
      id,
      loading: signal(true)
    };
  });

  _ = effect(() => { // we will replace this later.
    const { id, loading } = this.state();
    if (id) {
      this.us.getUser({ request: id })
        .then(user => {
          this.user.set(user);
          loading.set(false);
        });
    }
  });
}
```

</div>
<style> h2 { animation: myEntry 2s; }
h2 {
  span {
    display: inline;
    font-size: 0;
    animation: myAppear 3s forwards;
  }
}

</style>

---NextSlide

<div>

# Ok, no `effect()` but what then?

## Now<span>, let me show you</span>

### linkedSignal (experimental in Ng19):

```typescript
class MyComponent {
  userId = input<number>();

  loading = linkedSignal({
    resource: this.userId,
    compute: () => true
  });

  _ = effect(() => {
    // we will replace this later.
    const id = this.userId();
    if (id) {
      this.us.getUser({ request: id }).then(user => {
        this.user.set(user);
        this.loading.set(false);
      });
    }
  });
}
```

</div>
<style> h2 { animation: myEntry 2s; }
h2 {
  span {
    display: inline;
    font-size: 0;
    animation: myAppear 3s forwards;
  }
}

</style>
---NextSlide

<div>

# Ok, no `effect()` but what then?

## Now<span>, let me show you</span>

### resource (experimental in Ng19):

```typescript
class MyComponent {
  userId = input<number>();

  userResource = resource({
    resource: this.userId,
    loader: this.us.getUser
  });

  user = this.userResource.value; // a writable signal
  loading = this.userResource.isLoading; // a signal
}
```

</div>
<style> h2 { animation: myEntry 2s; }
h2 {
  span {
    display: inline;
    font-size: 0;
    animation: myAppear 3s forwards;
  }
}

</style>

---NextSlide

<div>

# Ok, no `effect()` but what then?

## Now<span>, let me show you</span>

- `linkedSignal` and `resource` are experimental
- asyncComputed is also an option (`npm install @se-ng/signal-utils`)
- deferredAsync
- rxMethod
- many
- many more

</div>
---NextSlide

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 33.694 122.88" enable-background="new 0 0 33.694 122.88" xml:space="preserve"><g><path d="M6.402,104.495h20.799v18.385H6.402V104.495L6.402,104.495z M27.19,94.451H6.406C4.341,69.195,0,42.066,0,16.845 C0,7.543,7.545,0,16.847,0s16.847,7.543,16.847,16.845C33.694,42.053,29.299,69.214,27.19,94.451L27.19,94.451z"/></g></svg>

<div>

# key takeaways

- `effect()`'s:
  - are not the only way
  - are hard to get right
  - should be avoided
  - unless there is really no other option
  </div>
  <style>
    div#slide {
      grid-template-columns: .15fr 1fr;
      gap: 2rem;
      align-items: top
    }
    li {
      margin-bottom: .5rem;
    }
    svg {
      grid-row: span 2;
      height: calc(100cqh - 9rem);
    }

</style>

---NextSlide

<div>

# Signals, watch the effect

## for real this time

### The end!

</div>
<style>
  h2{
    animation: myEntry 4s;
  }
  section div#slide div h3 {
    font-size: calc(7 * var(--base-font-size));
    font-weight: bold;
    animation: myEntry 2s;
    margin: calc(7 * var(--base-font-size))0;
    text-align: center;
  }

</style>

---NextSlide

![me](/assets/sander.png)

# Thank you!

<svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 78.667 78.667" xml:space="preserve">
<g>
<path d="M9.49,73.833c-1.493,0-2.943-0.24-4.309-0.713l-3.113-1.077l2.392-2.265c3.165-2.997,3.964-6.455,4.016-9.046
		C3.004,54.666,0,47.097,0,39.334c0-19.023,17.645-34.5,39.333-34.5s39.334,15.477,39.334,34.5
		c0,19.022-17.646,34.498-39.334,34.498c-6.458,0-12.827-1.399-18.505-4.057C18.689,71.289,14.366,73.833,9.49,73.833z
		 M20.361,65.078l1.148,0.581c5.397,2.729,11.561,4.173,17.824,4.173c19.483,0,35.334-13.682,35.334-30.498
		c0-16.818-15.851-30.5-35.334-30.5S4,22.516,4,39.334c0,6.99,2.814,13.823,7.925,19.238l0.52,0.552l0.024,0.757
		c0.087,2.72-0.401,6.407-2.818,9.951c4.63-0.074,8.89-3.298,9.705-3.95L20.361,65.078z"/>
</g>
</svg>

<style>
  img {
    height: calc(100cqh - 3rem);
    object-fit: contain;
  }
  div#slide {
    grid-template-columns: 0.8fr 1fr;
    gap: 2rem;
    align-items: center
  } 
  h1 {
    width: 23rem;
    padding: 0 2rem ;
    anchor-name: --my-title;
  }
  ul {
    list-style: none;
  }
  svg {
    position-anchor: --my-title;
    width: anchor-size(width);
    height: calc(9.65 * var(--base-font-size));
    transform: scaleX(3.5) translateY(-.55rem);
    position: absolute;
    position-anchor: --my-title;
    position-area: center center;
    color: --var(--text-1);
  }
</style>
