# CSS specificity

I was asked about `@layer` last week, and it got me thinking about [CSS specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)
in general. Why does a question about `layers` lead me to think about specificity?
Good question! Let get on with it!

## Why is specificity something to think about?

Well, specifically, because it is the largest source of confusion. The concept is
fairly simple, but it is often misunderstood, or even simply ignored. Ignoring it
is something that is easy to do, because in most cases, it "just works". But
when it doesn't, it can be a nightmare to debug.

BTW, I think "just works" is something that is underappreciated. It is a
testimony to the design of CSS, and browsers, that in most cases, you can write
styles without having to think about specificity. I'll tip my hat to the
designers of CSS for that.

Still, I'm writing about it. So yeah, automagically (not a typo!) handling gets
you only so far.

### the basics of specificity

Well, I can try to explain, but [Brammus](https://www.bram.us/about/) has already
done a great job explaining this in [his CSS-day talk on specificity](https://www.bram.us/2022/06/28/the-css-cascade-a-deep-dive-2022-06-09-css-day/).
So I recommend you watch that. It is does a great job on explaining the problem
with specificity, and how to deal with it. I was lucky enough ti see that one live!
Also the MDN article I linked to above has a great amount of details.

### what is the _root_ problem.

The root problem is that specificity calculations are not exactly intuitive.
those calculations can have the same result for different selectors, and different
results for similar selectors.

A sample of different selectors with the same specificity:

```css
body header h1 {
  color: green;
}
html header h1 {
  color: purple;
}
```

What color will the `h1` be? Green or purple? The answer is: "purple". Why?
Because both selectors have the same specificity.
When two selectors have the same specificity, the one that comes last in the
CSS wins. So in this case, the second selector wins. When those 2 come from
different stylesheets, the one that is loaded last wins. Also, that would be
much harder to spot, right?

### Why is that `!important`?

Lame, I know. But you should know that you should avoid using `!important`,
Why? Because it doesn't solve your issue, it just makes it harder to reason
about your CSS. And it makes it harder for others (and yourself in the future)
to amend your styling. So avoid it, unless you really, _really_ have to use it.
It is the "cast to `any`" of CSS.

## Lets add some layers.

Now we are ready to understand where `@layer` fits in this whole specificity
thing. `@layer` adds another dimension to the specificity calculation. Layers
are ordered, and layers that come later in the order win over layers that come
earlier. So if you have:

```css
@layer theme {
  header h1 {
    color: purple;
  }
}
@layer base {
  header h1 {
    color: green;
  }
}
```

The `h1` will be green, because the `base` layer comes after the `theme` layer.
I hear you thinking, "but that is the same as the last example". Well, yes and no.
The difference is that now you can control the order of the layers.
put this on top of your CSS: (or on top of your very top CSS file)

```css
@layer base, theme;
```

This will make sure that the `base` layer comes before the `theme` layer, and
thus the `h1` will be purple. This is a powerful way to control the cascade
of your CSS. It allows you to create a base layer that contains all your
default styles, and then a theme layer that contains all your theme specific
styles. This way, you can easily switch themes by changing the order of the
layers.

### Is that all?

No, not by a long shot, there is much more to layers.
you can use the same layer in different files. You can "namespace" your layers.

I assume you have read [my article on Componet Styling](/blog/component-styling),
right? If not, go read it now!

Let me show you an idea about how to use layers in component styling:

```css
/* somewhere on top in your CSS three */
@layer base, utils ,theme, components;

/* in your components.css */
@layer components.componentName {
  /** in this component, we need all text to be green */
  --base-color: var(--green-3) --highlight-color: var(--green-9);

  @layer overrides {
    /** except when it is an header */
    :is(header) {
      --base-color: var(--purple-3);
      --highlight-color: var(--purple-9);
    }
  }
}
```

The top layer order defines the global order of layers. You can decide what you
to put in which layer. You can even `@import` things into specific layers.

But I digress. The point is that layers add to specificity. In the abo
ve example, the `overrides` layer will win over the `components.componentName`
layer, because it comes later in the order. This allows you to create a hierarchy
of layers that can be used to control the cascade of your CSS in a more granular
way. The sample above doesn't show the true power of the layering system, but
it gives you an idea of how to use it.

Another thing to note is the namespace of layers. In the example above, the
`components.componentName` layer is a namespace for the `componentName` component.
This allows you to create layers that are specific to a component, and thus avoid
conflicts with other components. This is especially useful when you are creating
a design system or a component library. This way, you can create component styles
that are isolated from each other. In a standard way. It takes a very disciplined
way of working, but it is worth the effort. (note to Angular developers;
you get something similar _for free!_)

## Conclusion

As usual, there are more layers to this story.
Specificity rocks. Layers make it dance. Use them wisely. It allows you to make
your CSS more maintainable. More predictable. More robust. More versatile.
Now, go develop some awesome [styled components](/blog/component-styling) and

Be specific!
