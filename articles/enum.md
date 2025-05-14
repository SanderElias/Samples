# what about ENUM's in typescript?

Enums are a feature in TypeScript that allow you to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```typescript
const enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
```

Which you then can use as:

```typescript
move(Direction.Up);
```

Which is a lot more readable than:

```typescript
move(1);
```

However, there are some things to keep in mind when using enums. They are a TypeScript feature, not a Javascript feature.
That means that after compilation the whole `ENUM` is gone.

The above sample would be compiled to:

```javascript
move(1);
```

Also, there is no way to inspect a `ENUM` at runtime. So, you can't do something like:

```typescript
console.log(Direction);
// logs nothing...
// NOT: { Up: 1, Down: 2, Left: 3, Right: 4 }
```
