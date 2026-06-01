<!-- markdownlint-disable MD003 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD022 -->
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD041 -->
<div>

# Angular 22 - update from 20

## whats new and what to expect

### a presentation by Sander Elias and Jeffrey Bosch

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

- Looking for a new challenge.
- FedEx - Angular Performance Engineer
- HeroDevs - Principal Engineer
- Pandora - Angular Architect
- Dutch Angular Group
- Validointi
- Consulting
- Scully

</div>

<style>

  div#slide {
    display: grid;
    grid-template-columns: 35cqi 60cqi;
    grid-template-rows: 1fr;
  }


</style>

---NextSlide

![Jeffrey](/assets/jeffrey.png)

<div>

## about Jeffrey

- fill
- this
- in
- with your
- own
- information
- Also, put a picture of yourself in the /assets an update the above link.
</div>

<style>
  div#slide {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
</style>

---NextSlide

<div>

# What is new since Angular 20?

## lets go over the numbers!

</div>

- 49 releases from `21.0.0` (2025-11-19) through `22.0.0-rc.2` (2026-05-28).
- 280 fixing commits
- 120 feature commits
- 19 refactor commits
- 13 performance improvement commits

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear 2s forwards;

    span {
      animation: myAppear 3s forwards;
    }
  }

</style>

---NextSlide

# Impressive!<span>, right?</span>

<style>
  div#slide {
    align-items: center;
    justify-content: center;  
  }

  h1 {
     font-size: calc(7 * var(--base-font-size));
    font-weight: bold;
    animation: myEntry .5s;

    span {
      animation: myAppear 3s forwards;
    }
  }
</style>

---NextSlide

<div>

# First, version 21

## what was new in Angular 21?

</div>

- stability
- stability
- and more stability

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear 2s forwards;
  }

</style>

---NextSlide

# Boring<span>, right!</span>

<style>
  div#slide {
    align-items: center;
    justify-content: center;  
  }

  h1 {
     font-size: calc(7 * var(--base-font-size));
    font-weight: bold;
    animation: myEntry .5s;

    span {
      animation: myAppear 2s forwards;
    }
  }
</style>

---NextSlide

<div>

# Well, Actually...

## What really happened in Angular 21

</div>

- Took time to address some long-standing issues
- Fixed some of the most annoying bugs
- prepared the ground for upcoming releases
- remember:
  - 280 fixes
  - 19 refactors
  - 13 performance
- Most of those where in 21

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear 2s forwards;
  }

</style>

---NextSlide

<div>

# Let's open with the bad news

## breaking changes

</div>

| Area           | Change                                                                  |
| -------------- | ----------------------------------------------------------------------- |
| **Router**     | 'paramsInheritanceStrategy' default → 'always'                          |
| **Router**     | 'TitleStrategy.getResolvedTitleForRoute' typed as 'string \| undefined' |
| **Forms**      | 'min'/'max' validators no longer accept string values                   |
| **Core**       | 'script' elements rejected as dynamic component hosts                   |
| **Animations** | Nested leave animations scoped to component boundaries                  |
| **Compiler**   | Namespaced SVG 'script' elements stripped at compile time               |

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear .5s forwards;
  }

</style>

---NextSlide

<div>

# Now, to the fun part!

## generic features and improvements

</div>

- '@Service' decorator introduced (and stable!)
- 'InjectAsync' helper
- Signal debouncing support
- template support for anonymous functions
- Better language service support for templates
- 'OnPush' set as the default 'changeDetectionStrategy' for new components
- **Resources are now stable**
<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear .5s forwards;
  }
  </style>

---NextSlide

<div>

# Now, to the fun part!

## AI and tooling features

</div>

- 'provideWebMcpTools' / 'DeclareWebMcpTool' — in-page AI/MCP debugging tools
- Angular DI graph in-page AI tool
- Resource caching for SSR
- Incremental hydration made the default behavior
- Bootstrap Angular apps under Shadow DOM roots
- NodeJS 26 support
- TypeScript 5.9 support dropped

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear .5s forwards;
  }

</style>

---NextSlide

<div>

# Now, to the fun part!

## Forms

</div>

- 'FieldState.getError()'
- 'reloadValidation', async validator debounce
- 'ngNoCva' opt-out for 'ControlValueAccessors'
- Custom CVA mode with legacy 'NG_VALIDATORS' shim
- **Signal Forms APIs graduated to stable**

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear .5s forwards;
  }

</style>

---NextSlide

<div>

# Now, to the fun part!

## Moar?

</div>

- many more features and improvements across the board, including:
  - Router
  - Templates / Compiler
  - Testing
  - HTTP
  - and more!
- I picked the ones I found most interesting, but check out the changelog for the full list!

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear .5s forwards;
  }

</style>

---NextSlide

<div>

# At your '@Service'

</div>

- '@Service' decorator introduced (and stable!)
- replaces 'Injectable' for most use cases
- more concise and better aligned with the concept of services
- disallows constructor injection.
- By default provided in 'root',
- but can optionally be not provided

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# 'InjectAsync', whut?

</div>

- 'InjectAsync' helper for asynchronous injection
- Allows you to lazy-load dependencies.
- returns a '<Promise\<InjectedThing\>>'
- useful for large dependencies
- or those that are only needed in certain scenarios.

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# SignalForms APIs graduated to stable

</div>

- If you haven't yet, go migrate now!
- No more 'experimental' APIs, so you can use them with confidence.
- support for hybrid forms, so you can migrate part by part.

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# Resources are now stable

</div>

- Stable APIs for defining and consuming resources.
  - 'resource' function for creating generic ones
  - 'rxResource' for wrapping observables
  - 'httpResource' for making HTTP requests
- Built-in support for error handling, and loading states.

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# the elephant in the resoures

## uehm room, I meant room!.

</div>

- 'httpResource' is for **_fetching_** data, not for mutating it.
- For mutations, use 'httpClient' with the 'firstValueFrom' helper to get a promise.
- caching???

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear 2.5s forwards;
  }
</style>

---NextSlide

# **Demo**

<style>
  div#slide {
    align-items: center;
    justify-content: center;  
  }

  h1 {
     font-size: calc(7 * var(--base-font-size));
    font-weight: bold;
    animation: myEntry .5s;

    span {
      animation: myAppear 2s forwards;
    }
  }
</style>

---NextSlide

<div>

# What did we just see?

</div>

- 'httpResource' is awesome for **_fetching_** data!
- Caching is an issue?
- Remember, its build on top of httpClient!
- could we use an interceptor to add caching?

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear 2.5s forwards;
  }
</style>

---NextSlide

# **Demo**

<style>
  div#slide {
    align-items: center;
    justify-content: center;  
  }

  h1 {
     font-size: calc(7 * var(--base-font-size));
    font-weight: bold;
    animation: myEntry .5s;

    span {
      animation: myAppear 2s forwards;
    }
  }
</style>

---NextSlide

<div>

# What did we just learn?

</div>

- We can use an interceptor to add caching to 'httpResource'!
- This way, we can have the best of both worlds:
  - the simplicity of 'httpResource' for fetching data
  - and the power of 'httpClient' for for example caching.
- And we can do all this without changing our components at all!
- I picked caching as an example, but caching just one thing.

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
  h2 {
    animation: myAppear 2.5s forwards;
  }
</style>

---NextSlide

# Thank you!

## for your attention

<style>
  div#slide {
    align-items: center;
    justify-content: center;  
  }

  h1 {
     font-size: calc(7 * var(--base-font-size));
    font-weight: bold;
    animation: myEntry .5s;

  }
  h2 {
    animation: myAppear 2s forwards;
  }
</style>
