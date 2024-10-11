---toml
title = "Welcome"
---

<!-- markdownlint-disable MD003 -->
<!-- markdownlint-disable MD033 -->

# Signals, watch the effect

## a presentation by Sander Elias

<style>
  section {
    background-image: url('/assets/angular_signals.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: contain;
  }

</style>

---NextSlide
---toml
title = "Who I am"

---

![me](/assets/sander.png)

<div>

## About me

- Sander Elias
- husband
- father of 4
- GDE in web and Angular
- Consultant
- building software since 1979
- I love to share knowledge

</div>

<style>
  img {
    height: calc(100vh - 30px);
    object-fit: contain;
  }
  div#slide {
    grid-template-columns: 1fr 1fr;
  } 
</style>

---NextSlide
---toml
title = "What I do"

---

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
  img {
    height: calc(100vh - 30px);
    object-fit: contain;
  }
  div#slide {
    grid-template-columns: .7fr 1fr;
  } 
  aside {
    margin-top: 2rem;
    text-align: right;
    font-size: .5rem;
  }
</style>

---NextSlide
---toml
title = "Takeaways"

---

<svg fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>exclamation</title>
<path d="M10.656 8.864q0-2.208 1.568-3.776t3.776-1.568 3.776 1.568 1.6 3.776q0 0.256-0.064 0.448l-1.76 6.944q-0.096 1.408-1.12 2.368t-2.432 0.96q-1.376 0-2.4-0.928t-1.152-2.304q-0.32-0.96-0.672-2.112t-0.736-2.784-0.384-2.592zM12.416 24.928q0-1.472 1.056-2.496t2.528-1.056 2.528 1.056 1.056 2.496q0 1.504-1.056 2.528t-2.528 1.056-2.528-1.056-1.056-2.528z"></path>
</svg>

<div>

# key takeaway

- do not use `effect()`.
- do really not use `effect()`.
- really! Do not use `effect()`.
<div>
<style>
  div#slide {
    grid-template-columns: .4fr 1fr;
    gap: 2rem;
    align-items: top
  }
  li {
    margin-bottom: .5rem;
  }
  svg {
    grid-row: span 2;
    height: calc(100vh - 10px);
    transform: scale(3);
  }
  

</style>

---NextSlide
---toml
title = "Thank you"

---

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
    height: calc(100vh - 10px);
    object-fit: contain;
  }
  div#slide {
    grid-template-columns: .8fr 1fr;
    gap: 2rem;
    align-items: top
  } 
  h1 {
    width: 20rem;
    padding: 0 2rem ;
  }
  svg {
    width: anchor-size(width);
    position: absolute;
    position-anchor: --my-title;
    position-area: center center;
    color: --var(--text-1);
  }
</style>
