# Lazy loaded component sample

In this sample I use ESnext modules with a default export to get the **component** which is exported as _default_ 

[this](./sample-one/sample-one.component.ts) is one of the sample components, which actually does nothing, is an SCAM module.

Then you can [look here](./sample-one/sample-one.component.ts)

By using it in the template like this:
```html
<ng-container [ngComponentOutlet]="component"></ng-container>
```

This enables you to dynamicly lazy load a component and put it in the view, even without injecting anything into the component holding them.
