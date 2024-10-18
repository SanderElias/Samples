---toml
title = "Welcome"
---

<!-- markdownlint-disable MD003 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD022 -->
<!-- markdownlint-disable MD024 -->

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
title = ""
---

# Signals, watch the effect
## so, what's that about?

Once upon a time, in a land far far away, there was a developer who used Angular. He had heard about the new `effect()` function and wanted to use it. But he was warned. He was told not to use it. But he did not listen. He used it anyway. And he lived happily ever after. Or did he?

<style>
  h1 {
    width: 20rem;
  }
</style>
---NextSlide
---toml
title = ""
---

# Signals, watch the effect
## bummer!

Well, to be honest, he did.

<style>
  h1 {
    width: 20rem;
  }
  h2 {
    animation: myEntry 3s;
  }
</style>
---NextSlide
---toml
title = ""
---

# Signals, watch the effect
## shortest talk ever!

### the end!

<style>
  h1 {
    width: 20rem;
  }
  h2{
    animation: myEntry 4s;
  }
  h3 {
    font-size: 5rem;
    animation: myEntry 2.5s;
  }

</style>
---NextSlide
---toml
title = ""
---

# Shortest talk ever!
## or is it?


<style>

</style>
---NextSlide
---toml
title = "Takeaways"

---

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 33.694 122.88" enable-background="new 0 0 33.694 122.88" xml:space="preserve"><g><path d="M6.402,104.495h20.799v18.385H6.402V104.495L6.402,104.495z M27.19,94.451H6.406C4.341,69.195,0,42.066,0,16.845 C0,7.543,7.545,0,16.847,0s16.847,7.543,16.847,16.845C33.694,42.053,29.299,69.214,27.19,94.451L27.19,94.451z"/></g></svg>
<div>

# key takeaway

- do not use `effect()`.
- do really not use `effect()`.
- really! Do not use `effect()`.
<div>
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
    height: calc(100vh - 9rem);
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
    height: calc(100vh - 30px);
    object-fit: contain;
  }
  div#slide {
    grid-template-columns: .8fr 1fr;
    gap: 2rem;
    align-items: top
  } 
  h1 {
    width: 23rem;
    padding: 0 2rem ;

  }
  ul {
    list-style: none;
  }
  svg {
    width: anchor-size(width);
    height: 7.6rem;
    transform: scaleX(3.5) translateY(-.55rem);

    position: absolute;
    position-anchor: --my-title;
    position-area: center center;
    color: --var(--text-1);
  }
</style>

---NextSlide
---toml
title = "Questions"

---
# testing

![exml](/assets/exclamation.svg)

<style>
  img {
    height: calc(100vh - 30px);
    object-fit: contain;
  }
</style>
