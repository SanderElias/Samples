
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

- FedEx = Angular Performance Engineer
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

# Signals, best practices

## Explained with a simple CRUD app
</div>
