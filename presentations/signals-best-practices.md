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

---NextSlide

<div>

# Signals, best practices

## lessons learned

</div>

- Keep things as local as possible
- Minimize the payloads
- Be smart about caching
- Lazy-load everything
- Use the platform

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

## Wait, what about signals?

</div>

- Signals are the big enabler
- Localize the state
- Make everything reactive
- Are simple to reason about
- Probably will be in the platform
- Are the future of Angular

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

## In short:

### Using signals **is** _the best practice_!

</div>

<style>
    h2 {
    animation: myEntry 2s;
    font-size: calc(3* var(--base-font-size));

  }
    h3 {
     animation: myEntry 3s;
     padding-inline-start: 2rem;
     font-size: calc(3* var(--base-font-size));
  }
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows:  1fr;
    align-items: center;
  }
</style>

---NextSlide

<div>

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

</div>
## PS, this presentation is and Angular app too.

<style>
  img {
    height: calc(100cqh - 3rem);
    object-fit: contain;
  }
  div#slide {
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 1fr 3rem;
    gap: 2rem;
    align-items: center
  } 
  h1 {
    width: 23rem;
    padding: 0 2rem ;
    anchor-name: --my-title;
  }
  h4 {
    grid-column: 1/3;
     animation: myEntry 3s;
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
