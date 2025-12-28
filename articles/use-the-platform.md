# use the platform

might be a phrase you have heard before. When you heard it from me, it meant that
I want you to use the browser. More specifically, I mean,

**DON'T SHIP CODE FOR EXISITING THINGS**

Yes, the amount of code I see in projects that just re-implement existing browser
functionality is staggering.different versions of the same component, just because
"we need a different design on a smaller screen" (yes, CSS can do that for you).
Or, even buttons that are build on top of an `<div>` instead of just using
`<button>`. (again, CSS can help you style it the way you want). Just take some
time every year to see what new features have landed in [Baseline](https://web-platform-dx.github.io/web-features/).
There is a huge change that your editor already can tell you that the feature you
want to use is supported by all browsers.

So please, before you start coding something new, check if the platform already
has what you need.

## Very low hanging fruits

### model dialogs

This is one of the most common things I see being implemented from scratch. Most
of those implementations are not accessible, and have complex API's,
not to mention the amount of bugs, and hoops you need to jump with templates or
portals, or sinkholes, or ....; Yeah, I have seen all kinds of crazy
implementations for something that is natively supported by the browser.

Lets implement a simple modal dialog:

```html
<dialog id="myDialog" closedby="any">
  <h3>HTML is awesome!</h3>
  <p>Modal dialogs are natively supported by the browser</p>
  <button
    aria-controls="myDialog"
    commandfor="myDialog"
    command="close">
    Close dialog
  </button>
</dialog>

<button aria-controls="myDialog" commandfor="myDialog" command="show-modal">
  Open dialog
</button>
```

Let us test it:

<dialog id="myDialog" closedby="any">
  <h3>HTML is awesome!</h3>
  <p>Modal dialogs are natively supported by the browser</p>
  <button aria-controls="myDialog" commandfor="myDialog" command="close">
    Close dialog
  </button>
</dialog>

<button aria-controls="myDialog" commandfor="myDialog" command="show-modal">
  Open dialog
</button>

Look Ma, _not a single piece of JavaScript code!_ A fully accessible modal dialog,
with light dismiss, with focus trapping, screen reader support, and all the other
goodies that come with it.

I hear you thinking, But I need to act when the user closes the dialog. Or opens
it. No problem, it fires off events for that. Sure, right, (your following
thought!), I still need to open it programmatically, because of reasons.
No problem, it has methods for that too.

```js
document.getElementById('myDialog').showModal();
```

Oh, did you notice the blur effect in the background? That is done with CSS only!
No JavaScript needed!

```css
::backdrop {
  backdrop-filter: blur(2px);
}
```

But, wait, but In our apps we have 10 different types of dialogs, with different
designs, and different sizes, and different animations, and different ...

_Stop right there._

First of all, _really?_ ever heard of [uniformity](https://www.andyrutledge.com/gestalt-principles-3.html)?
Also, its an HTML element, and CSS does already exist for a while now....

Oh, and your app makes heavy use of `z-index`. We got your covered, a dialog is
set on the [top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer),
it will show on top of anything else by design!

When you are reading this, somehow you might be using Angular. (or another
framework, but most likely Angular). Let me give you a simple component,
that utilizes the native dialog element.

```ts
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'dialog [shown]',
  template: `<ng-content />`
})
export class DialogComponent {
  shown = model(false);
  dialog = this.elementRef.nativeElement as HTMLDialogElement;

  _ afterRenderEffect(() => {
    if (this.shown()) {
      this.dialog.showModal();
    } else {
      this.dialog.close();
    }
  });
}
```

**TADA!** A fully function modal dialog, with _no need_ for `ng-template` or `@if`
or whatever you want to use. All the accessibility, and browser quirks are
handled by the browser.

### Foldable's

A bit less common, but still a lot of implementations to show/hide content based
on interactions.

```html
<details>
  <summary>Click to toggle details</summary>
  <h4>Details</h4>
  <p>This is some detailed content that can be shown or hidden.</p>
</details>
```

Demo:

<details>
  <summary>Click to toggle details</summary>
  <h4>Details</h4>
  <p>This is some detailed content that can be shown or hidden.</p>
</details>

this one is very versatile, and can be styled into almost anything you want.

```html
<details name="demoAccordion">
  <summary>Top</summary>
  <h4>This is the top section</h4>
  <p>This is some detailed content that can be shown or hidden.</p>
</details>
<details name="demoAccordion">
  <summary>Middle</summary>
  <h4>Middle</h4>
  <p>This is some detailed content that can be shown or hidden.</p>
</details>
<details name="demoAccordion">
  <summary>Bottom</summary>
  <h4>End here it ends</h4>
  <p>TThis is what an exclusive accordion looks like in HTML</p>
</details>
```

Demo:

<details name="demoAccordion">
  <summary>Top</summary>
  <h4>This is the top section</h4>
  <p>This is some detailed content that can be shown or hidden.</p>
</details>
<details name="demoAccordion">
  <summary>Middle</summary>
  <h4>Middle</h4>
  <p>This is some detailed content that can be shown or hidden.</p>
</details>
<details name="demoAccordion" >
  <summary>Bottom</summary>
  <h4>End here it ends</h4>
  <p>TThis is what an exclusive accordion looks like in HTML</p>
</details>

Yes, an exclusive accordion. Just give all your details the same `name` attribute.
And if you where paying close attention, you have seen I added some animation to
it as well. While those are poorly done, that is on me, being sucky as CSS animations.
The possibilities for `<details>` are endless. You can even use it for tabs,
and so on.

### autocompletion

An often re-invented wheel is autocompletion. You know, that thing where you
start typing in an input field, and it autocomplete known values for you?

```html
<label for="browser">
  <span>Pick your browser</span>

  <input list="browsers" id="browser" name="browser" />
  <datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Safari" />
    <option value="Edge" />
  </datalist>
</label>
```

Demo:

<label for="browser">
  <span>Pick your browser</span>

  <input list="browsers" id="browser" name="browser" />
  <datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Safari" />
    <option value="Edge" />
  </datalist>
</label>

### Styling select elements

This is not yet supported in all browsers, but as it is coming soo, I'll show you
anyway. Also, when your browsers doesn't support it, it will just fallback to a
normal select that isn't that bad either.

<form>
  <p>
    <label for="pet-select">Select pet:</label>
    <select id="pet-select">
      <button>
        <selectedcontent></selectedcontent>
      </button>
      <option value="">Please select a pet</option>
      <option value="cat">
        <span class="icon" aria-hidden="true">🐱</span
        ><span class="option-label">Cat</span>
      </option>
      <option value="dog">
        <span class="icon" aria-hidden="true">🐶</span
        ><span class="option-label">Dog</span>
      </option>
      <option value="hamster">
        <span class="icon" aria-hidden="true">🐹</span
        ><span class="option-label">Hamster</span>
      </option>
      <option value="chicken">
        <span class="icon" aria-hidden="true">🐔</span
        ><span class="option-label">Chicken</span>
      </option>
      <option value="fish">
        <span class="icon" aria-hidden="true">🐟</span
        ><span class="option-label">Fish</span>
      </option>
      <option value="snake">
        <span class="icon" aria-hidden="true">🐍</span
        ><span class="option-label">Snake</span>
      </option>
    </select>
  </p>
</form>
<style>
select,
::picker(select) {
  appearance: base-select;
}
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
select:open::picker-icon {
  rotate: 180deg;
}
option {
  display: flex;
  justify-content: flex-start;
  gap: var(--size-6);
  border: 2px solid #var(--surface-3);
  background: var(--surface-2);
  padding: 10px;
  transition: 0.4s;
}
option:first-of-type {
  border-radius: 8px 8px 0 0;
}
option:last-of-type {
  border-radius: 0 0 8px 8px;
}
::picker(select) {
  border-radius: 8px;
}
option:not(option:last-of-type) {
  border-bottom: none;
}
option:nth-of-type(odd) {
  background: var(--surface-3);
}
option:hover,
option:focus {
  background: plum;
}
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
</style>

<details>
<summary>Styled select element source</summary>

```html
<form>
  <p>
    <label for="pet-select">Select pet:</label>
    <select id="pet-select">
      <button>
        <selectedcontent></selectedcontent>
      </button>
      <option value="">Please select a pet</option>
      <option value="cat">
        <span class="icon" aria-hidden="true">🐱</span>
        <span class="option-label">Cat</span>
      </option>
      <option value="dog">
        <span class="icon" aria-hidden="true">🐶</span>
        <span class="option-label">Dog</span>
      </option>
      <option value="hamster">
        <span class="icon" aria-hidden="true">🐹</span>
        <span class="option-label">Hamster</span>
      </option>
      <option value="chicken">
        <span class="icon" aria-hidden="true">🐔</span>
        <span class="option-label">Chicken</span>
      </option>
      <option value="fish">
        <span class="icon" aria-hidden="true">🐟</span>
        <span class="option-label">Fish</span>
      </option>
      <option value="snake">
        <span class="icon" aria-hidden="true">🐍</span>
        <span class="option-label">Snake</span></option>
    </select>
  </p>
</form>
<style>
  select,
  ::picker(select) {
    appearance: base-select;
  }
  select::picker-icon {
    color: #999999;
    transition: 0.4s rotate;
  }
  select:open::picker-icon {
    rotate: 180deg;
  }
  option {
    display: flex;
    justify-content: flex-start;
    gap: var(--size-6);

    border: 2px solid #var(--surface-3);
    background: var(--surface-2);
    padding: 10px;
    transition: 0.4s;
  }
  option:first-of-type {
    border-radius: 8px 8px 0 0;
  }
  option:last-of-type {
    border-radius: 0 0 8px 8px;
  }
  ::picker(select) {
    border-radius: 8px;
  }
  option:not(option:last-of-type) {
    border-bottom: none;
  }
  option:nth-of-type(odd) {
    background: var(--surface-3);
  }
  option:hover,
  option:focus {
    background: plum;
  }
  option .icon {
    font-size: 1.6rem;
    text-box: trim-both cap alphabetic;
  }
</style>
```

</details>


### Yes, there is more.

But I just wanted to show you a few low hanging fruits. All of the above are
just that. And they allow you to build rich UI's with no Typescript/JavaScript
code at all. *Just HTML and CSS*! And the progress is accelerating. More and more
features are landing in browsers that allow you to build complex UIs without
needing to ship code for existing things.

## Call to action

So, when you need something in your app. **Check if the platform already has it**.
This has become much easier nowadays with with the Baseline project, and tools
it that can show you support probably in your own editor already. Then there is 
the MDN web docs, caniuse.com, and so on.
I also can not forget mentioning the [Interop project](https://github.com/web-platform-tests/interop), that runs since 2019. Every year
they try to align browser vendors on a set of features that should be implemented
by all browsers. For [this year(2025)](https://wpt.fyi/interop-2025), most things
 are done already! You can weven help out there.

## Conclusion

The web platform is evolving rapidly, and more and more features are landing.
Do yourself a favor, and use them. It gives you less code to maintain, less bugs
to fix, and more time to focus on the unique parts of your application.
I didn't even mention performance improvements, because native browser features 
are often more optimized than custom implementations.
Oh, and don't think that this article mentions everything. It is not. There are 
things like [popovers(HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover)
for tooltips, snackbars and so on. Css has now [anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-position),
that gives you relational positioning based on other elements. 

There is to much to mention.


So, please, _use the platform_.


