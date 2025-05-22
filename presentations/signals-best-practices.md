<!-- markdownlint-disable MD003 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD022 -->
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD041 -->
<div>

# Signals, best practices

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

<div>

# Signals, best practices

## but first!

</div>


- Questions? feel free to interrupt me!
- I will be around after the presentation
- Also on BlueSky and Mastodon
- github.com/SanderElias/Samples
- I am not a designer!

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }

  li {
    font-size: calc(2 * var(--base-font-size));
  }
</style>
---NextSlide

<div>

# Signals, best practices

## contents

</div>

- demo of crud app
- a little bit of theory
- dive into the code
- another bit of theory
- what have we learned

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# Signals, best practices

## Choises, choises choises

</div>

- CouchDB as backend
- Always display the first 10 rows only.
- Empty/busy rows have disabled buttons
- Keep current rows until new results arrive
- Only use signals and promises
- Search highlight
- _Use the platform_

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# Signals, best practices

## lets show!

</div>

### Demo

<style>
  h2 {
    animation: myEntry 2s;
  }

  h3 {
    animation: myEntry 1s;
  }

  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(6 * var(--base-font-size)) 1fr;
    align-items: center;
  }

  h3 {
    font-size: calc(12* var(--base-font-size));
    margin-top: 0;
  }
</style>

---NextSlide

<div>

# Signals, best practices

## theory, I warned you!

</div>

- When do we reach optimal performance?
- How do we know?
- Fine, but what has this to do with signals?

<style>
    h2 {
    animation: myEntry 2s;
  }
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# Signals, best practices

## I'm glad I asked!

</div>

### lets review the code

<style>
  h2 {
    animation: myEntry .5s;
  }

  h3 {
    animation: myEntry 2s;
  }

  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(7 * var(--base-font-size)) 1fr;
    align-items: center;
  }

  h3 {
    font-size: calc(7* var(--base-font-size));
    text-align: center;
    margin-top: 0;
  }
</style>
