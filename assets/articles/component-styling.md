# Component Styling

This is where it begins. You are tasked with styling a component.
The designer has send you a mockup. The product owner has approved it.
The marketing team is eagerly waiting to see it live. The CEO wants it
yesterday. It is your job to make it happen. Let say it is a  button. 
How hard can it be? Lets find out.

## Basic component styling

Lets take a look at a simple button:

```html
<button>I am a button</button>
```

<button>I am a button</button>

Hmm, that looks styled. Let us see if we can get rid of that styling:

```html
<button style="all: revert;">I am a button</button>
```

<button style="all: revert;">I am a button</button>

Yup, that's unstyled. Lets get to work.

```html
<style>
  button.blog-sample-styled {
    all: revert; /* reset to unstyled */
    background-color: purple;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
      background-color: darkmagenta;
      text-decoration: underline;
    }
  }
</style>
<button class="blog-sample-styled">I am a button</button>
```

<style>
  button.blog-sample-styled {
    all:revert;
    background-color: purple;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
      background-color: darkmagenta;
      text-decoration: underline;
    }
  }
</style>

<button class="blog-sample-styled">I am a button</button>

### Ok, LGTM, PR approved.

Now go forth and style all the things!

## If only...

If only life was that simple. In reality your component doesn't live in isolation.
Usually it is part of an application. There is a reasonable chance that it exists
inside of a design system. Or worse, multiple design systems.

Multiple design systems? That makes no sense!, right? Right? I would love to agree
with you there, but in reality, it happens a lot. Every 3rth party component comes
with its own design system, and its own set of styles. Quite often, it happens that
the chosen 3rth party, doesn't have all the tings we need, so we end up adding
multiple 3rth party components, each with their own design system.
And, because our lives wouldn't be complicated enough, suddenly our app needs to
have a dark mode. And then again, out of the blue, the marketing teams wants us
to have an "unique" look, setting us apart from the competition.
When you think, that is where the nightmare ends, the CEO want to have a campaign
specific look for a couple of weeks. I would love to say that it ends there.
But no, this is only the tip of the iceberg. There is more. Much more. It will
_never end_.

## Is there a way out?

Sure, quite your job, and become a monk. Problem solved.

## But seriously

Well, it is not all gloom and doom. There are ways to manage this madness.
First step is to create a solid foundation. Call it a a guardrail if you will.
A set of rules that everyone agrees on, and follows. Things like:

- What Font(s) are we (going to) use? (typography)
- what are the sizes of those fonts? (typography)
- Which font are we going to use for what? (typography)
- What colors are we going to use? (color palette)
- What are the spacing rules? (spacing system)
- What are the border radius rules? (shape system)
- What are the shadow rules? (elevation system)
- What are the animation rules? (motion system)
- add whatever else you think is relevant to your project(s)

Then think about the list, and what you want to be able to change. For sure
the colors, because of theming (dark mode, unique looks, campaigns, etc).
probably some spacing values. (I'm going to plug [OpenProps](https://open-props.style/)
once more here, because it makes this so much easier).

Oh, one more thing. Don't overdo it. Keep it simple. Don't try to cater for
every exception. You can address exceptions when they arise. I'll show you how
later on. Also, don't try to make it perfect from the start. It will evolve over
time anyway. Try to get as many things proportional to each other as possible.
That way, when you need to change something, you can do it in one go.

Use Modern size units, that fits your needs. Do you need responsiveness? Are you
really, **really**, sure you don't? Then distill your rules into CSS custom properties.
As little as possible, but as much as needed. Really, less is more here.

You might end up with something like this:

```css
:root {
  /* typography */
  --font-base: 'Inter', sans-serif;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-sm: 0.875rem;

  /* colors */
  --color-primary: #6200ee;
  --color-on-primary: #ffffff;
  --color-secondary: #03dac6;
  --color-on-secondary: #000000;

  /* spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;

  /* shape */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;

  /* shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.16);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.19);
}
```

(euh, hey autocomplete, that wasn't too bad! I'll give you
that one. And I'll leave it in) But I want you to thin a bit more abstract.

```css
:root {
  --brand-color: #6200ee;
  --brand-font: 'Inter', sans-serif;

  /* color for text and borders */
  --base-color: #cfcfcf;
  --highlight-color: #ffffff;
  --muted-color: #7a7a7a;
  --link-color: #03dac6;

  /* background colors */
  --surface-1: #101010; /* the main background */
  --surface-2: #21233bff; /* cards, modals, etc */
  --surface-3: #373b67ff; /* tooltips, popovers, etc */
  --surface-4: #4f537aff; /* dropdowns, menus, etc */

  --base-radius: 1rem;
  --base-spacing: 1rem;
}
```

Then create an HTML file that contains all the elements that you are using in your
application. add a few "panels", so you can showcase the different background colors.
Style them according to the rules you have set. As an example, a panel could look like this:

```css
html,
body {
  margin: 0;
  padding: 0;
  font-family: var(--font-base);
  background-color: var(--surface-1);
  color: var(--base-color);
}

.panel {
  inline-size: 300px; /* the width for the showcase panel */
  block-size: 300px; /* the height for the showcase panel */
  background-color: var(--surface-1);
  border-radius: var(--border-radius-md);
  padding: var(--base-spacing);
  margin: var(--base-spacing);
}
.panel-1 {
  background-color: var(--surface-2);
}
.panel-2 {
  background-color: var(--surface-3);
}
.panel-3 {
  background-color: var(--surface-4);
}
:where(h1, h2, h3, h4, h5, h6) {
  color: var(--highlight-color);
}
```

Then make sure the HTML contains all the elements to cover your needs. And that
the way it looks is approved by all stakeholders. This will be your reference point.
While building the HTML file, you might find you need to add a few more properties.
When you can't compose them from the existing ones, add them to your setup.

The sample above focuses mostly on colors, But quite often that the colors alone
will get you at least 80% of the way there. Add the Font(s) and that goes up to
90%. Spacing will get you to 95%. Probably that is good enough.

## But, but, but...

We can't just style some basic HTML and call it a day!. Life is not _that_ simple.
True, but I just have covered the first 80% if your styling issues. Even without
doing anything more as this, you will have an application that will look decent.
And will cater to changes easily. You can even change the base settings using JS.
Allowing for even user-specific theming. Follow along, and the remaining 20%
will unfold, there are a few more things you should know/do.

## Embrace the cascade.

What the heck? Where does this come from? Somehow, we as developers have forgotten
about the cascade. CSS stands for _Cascading_ Style Sheets after all. In the end,
it is our friend. It means that we can set base styles, and then override them
when needed. When you do this with intent, it makes your life so much easier.

All I have talked about above, is setting up a solid base, for the HTML you use
to build your application. From here on, you can just use plain HTML in your
templates, and it will look and feel consistent. Heck, even most off your 3rth party
components might look decant now. But I'll get back to that.

## handling exceptions

Inevitably, you will run into situations where you need to deviate from the base
styles. I'm going to give a stupid but simple example. Lets say we have a
component, that needs to be more positive, and stand out. So we have settled on
making all text inside that component green. How do we do that, without
messing up the rest of the styling? Lets call the component `<positive-message>`.

```css
positive-message {
  /* color for text and borders */
  --base-color: #9aed4bff;
  --highlight-color: #97c56cff;
  --muted-color: #9aed4bff;
  --link-color: #35b9acff;
}
```

By redefining the relevant CSS custom properties, we can easily change the look.
also _all_ child elements will automatically pick up the new values. No need to
change anything else. Neat, right?

### but I don't want to change the children

Ah, yes, you want donut-styling. The component itself should have the new colors,
but the children should remain unaffected. There are multiple ways.
One way is using the [CSS Scopes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:scope)
As this article is already getting long, I will not go into details here.

### But what about 3rth party components?

Your guess is as good as mine. Sometimes they play nice, sometimes they don't. However,
quite often, those 3rth party components also expose a styling API. This means
that you can write some "adaptor" CSS that maps your design system to theirs.
Modern 3rth parties often expose this API using CSS custom properties as well.

For example, let's say we are using a 3rth party component `<fancy-button>`, that
exposes the following CSS custom properties:

```css
fancy-button {
  --fancy-bg-color: var(--surface-2);
  --fancy-text-color: var(--base-color);
  --fancy-border-radius: var(--base-radius);
}
```

By mapping their properties to ours, we ensure that the `<fancy-button>` component
blends seamlessly with our design system. If we ever need to change our design,
the `<fancy-button>` will automatically adapt to those changes without any
additional effort.

### That didn't work???

Well, it happens. Sometimes 3rth party components are not built with customization
in mind. Even worse, they might depend on browser defaults, that we have overridden.
Remember the button at the start of this article? Where we had to use `all: revert;`
to get rid of my custom styling? we can use the same trick for this kind of situation.

```css
fancy-button {
  all: revert; /* reset to unstyled */
  /* now apply our design system */
  background-color: var(--surface-2);
  color: var(--base-color);
  border-radius: var(--base-radius);
}
```

[`revert`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/revert)
will reset all properties to the browser default. There are other options as well.
`unset`, `initial`, and `inherit`. Each with their own use cases.
But probably, you don't want to use the `all` part in there. Resetting the
conflicting properties is a better solution. Its kind of the `any` of CSS, a
last resort.

### euh? even that didn't work???

Well, the monk option is still open. There are more things possible.
Also, I'm available for hire. going deeper is outside of the scope of this article,
though. But feel free to reach out.

## Additional thoughts

Being a monk is a viable option. However, as long as you have hairs to pull, there
is a developer job to be done. By setting up a solid design foundation, and
embracing the cascade, you can make your life a lot easier.

Minimalism is your friend. Less is more. Don't add complexity unless absolutely
necessary. And when you do, try to contain it as much as possible. Don't use
classNames, unless you really have to. Let the cascade do its work. Use CSS custom
properties to your advantage. They are powerful tools that can help you create
flexible and maintainable designs.

## Refrerences

A lot of inspiration was taken from [OpenProps - CSS Design System](https://open-props.style/)
by [Adam Argyle](https://argyleink.com/). I'm using it for this blog as well. Have
a look at the [Normalize Demo page](https://codepen.io/argyleink/pen/KKvRORE). It
has a HTML file, similar to what I described above. Its the only CSS framework
I ever really liked. I might have mentioned it before 😉.

When you are looking for a design system build upon those thoughts, have a
look at [Open Props UI](https://open-props-ui.netlify.app). It has a set of components
that are build using HTML and CSS only, using OpenProps.

## Omissions

There is a lot more to say about this topic. But this article is already
getting long. A few things I have not covered, but are worth mentioning:

- [CSS layers](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer) will help with specificity issues.
- [CSS nested](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Nesting) will help keep your CSS organized. Did use it, but didn't mention it.
- [Introduction to the CSS cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction) is a good read to understand the cascade better.

## Angular specifics

Then a special mention for Angular. It has you covered. By default,
Angular uses view encapsulation. This means that the styles you define in
a component are scoped to that component only. This prevents styles from leaking
out of the component, and affecting other parts of the application. But it also
means that it prevents the cascade. So setting a style in a component won't
affect child components. It prevents the cascade. However, custom properties
are an exception to this rule. They do cascade through component boundaries.
Use that to your advantage.

## Conclusion

Styling components is never done in isolation. By thinking ahead, and setting up
a basic foundation, you can make your life easier. Embrace the cascade. Use
CSS-vars to your advantage. Keep it simple. When your project has skipped this
step, your not to late. You can still introduce it. Start small. Evolve. And
sooner as you think you will start removing wads of now unnecessary CSS.

But it will never be just:

**Component styling!**
