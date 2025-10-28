<!-- markdownlint-disable MD003 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD022 -->
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD041 -->
<div>

# Architect for speed

## using signals

### a presentation by Sander Elias

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

# Architect for speed

## Using<span> signals!</span>

</div>

<p>
First things first,<br>
Demo-time!
</p>

<style>
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }

  h1 > span {
    animation: myAppear 3s forwards;
  }

  p {
    font-size: calc(5* var(--base-font-size));
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    animation: myEntry 2s ;
  }

  h2 {
    animation: myAppear 2s forwards;

    span {
      animation: myAppear 3s forwards;
    }
  }

</style>

---NextSlide

<div>

# Architect for speed

## Using<span> signals!</span>

</div>

- Well that was boring, right?
- the demo _is_ fast, but....
- I know, I know, let's dive deeper!

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

<div>

# Architect for speed

## Using<span> signals!</span>

</div>

- How can we architect for speed?
  - KISS <small>(no not the band)</small>
  - single responsibility principle
  - Law of Demeter <small>(aka principle of least knowledge)</small>
  - localize as much as possible
  - keep things reactive
  - lazy-load everything
  - use the platform (HTML and CSS)
  - yield the power of Angular
    - services
    - signals

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

<div>

# Architect for speed

## Using<span> signals!</span>

</div>

- Wait-what?
- finally <span>code-time!</span>

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

  li > span {
    font-size: calc(3* var(--base-font-size));
    font-weight: bold;
  }

</style>

---NextSlide

<div>

# Architect for speed

## Using<span> signals!</span>

</div>

- When do we reach optimal performance?
- How do we know?
- Fine, but what about signals?

<style>
    h2 {
    animation: myAppear 2s forwards;

    span {
      animation: myAppear 3s forwards;
    }
  }

  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# Architect for speed

### what about signals?

</div>

- Signals are the big enabler
- Are simple to reason about.
- Localize! the state
- Make everything reactive
- Are the future of Angular

<style>
    h3 {
    animation: myAppear 2s;
  }
  div#slide {
    display: grid;
    grid-template-columns:1fr;;
    grid-template-rows: calc(9 * var(--base-font-size)) 1fr;
  }
</style>

---NextSlide

<div>

# Architect for speed

## Using<span> signals!</span>

</div>

<p>
Thank you!
</p>



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

  p {
    font-size: calc(7* var(--base-font-size));
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    animation: myEntry 4s ;
  }

</style>
