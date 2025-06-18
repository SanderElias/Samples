# AI Context: Power Meter Angular Component Learnings

## Angular Signals and Dialog Pattern

- Use `signal()` for local state, e.g., dialog open/close.
- Use `model()` for two-way binding of signals between parent and child components.
- Use `linkedSignal(() => { ... })` for computed signals that depend on other signals or inputs.
- Always ensure the return type of a signal matches the expected input type of the child component (e.g., `string` for `[prefix]`).
- For dialog open/close, prefer a model signal and two-way binding: `[(open)]="dialogOpen"`.
- In the dialog component, use `model<boolean>()` for the open state and synchronize dialog visibility with the signal using `afterRenderEffect`.
- Use a property named `_` to hook up side-effectful signal logic (e.g., `afterRenderEffect`).
- When using `viewChild`, type the signal as `Signal<ElementRef<HTMLDialogElement> | undefined>` and access the value with `this.dialogRef()`.
- Dialog components should be self-sufficient: compute their own `name` and `prefix` from the device info, not via inputs.

## Angular Component Patterns

- Prefer class-based components with the signals API for new Angular code (as of 2025).
- Use `input.required<T>()` for required inputs, and `output()` for outputs.
- Avoid decorators for signals; use the function-based API for `input`, `output`, `model`, etc.
- For dialog/modal patterns, manage open/close state in the parent and pass it down as a model signal for two-way binding.
- Avoid using a constructor for component logic; prefer field initializers and signal-based setup.
- Avoid using lifecycle hooks like `ngOnInit`, `ngAfterViewInit`, etc.; prefer `afterNextRender`, `afterRenderEffect`, and similar signal-based hooks.
- Avoid decorators like `@ViewChild`; prefer the `viewChild` signal function and similar signal-based APIs.
- Use `afterRenderEffect` instead of lifecycle hooks like `ngAfterViewInit` for signal-based side effects.
- Mark all component properties as `readonly` and use `private` or `protected` where appropriate for encapsulation and immutability.
- prefer `#` over typescript `private` 

## Error Handling and Debugging

- Always check the type compatibility between signals and component inputs/outputs.
- If you see errors about types not matching (e.g., `Type 'unknown' is not assignable to type 'string'`), ensure your signal returns the correct type.
- For two-way binding, do not use parentheses (e.g., `[(open)]="dialogOpen"`, not `[(open)]="dialogOpen()"`).
- When using `linkedSignal`, the function should return the computed value directly, not an array or object unless expected.

## CSS and UI Patterns

- Use a dedicated CSS file for each component for scoped styling.
- Add spacing between buttons using `button + button { margin-left: 0.5rem; }` for a clean UI.
- Style dialogs and forms for clarity and accessibility.

## Example: Dialog Open State

```typescript
// Parent
export class PowerMeterComponent {
  readonly dialogOpen = signal(false);
  // ...
}

// Template
<power-meter-dialog [(open)]="dialogOpen" ... />

// Child
export class PowerMeterDialogComponent {
  readonly open = model<boolean>();
  readonly _ = afterRenderEffect(() => {
    if (this.open()) {
      this.openDialog();
    } else {
      this.closeDialog();
    }
  });
  // ...
}
```

---
This file summarizes best practices and patterns learned from refactoring and debugging the Power Meter Angular component with signals and dialogs.
