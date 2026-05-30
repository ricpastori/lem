<p align="center">
	<img src="./imgs/lem_logo.png" alt="Lem logo" width="180" />
</p>

# lem

Lightweight pattern matching for expressive JavaScript code.

`lem` is a small JavaScript library for writing branching logic as data: a value,
a list of cases, and a fallback. It is currently in an early stage, with a
minimal API focused on exact primitive matches and simple actions.

## Status

This project is a work in progress.

Current behavior:

- Match primitive values with strict equality.
- Define cases with `on(pattern, action)`.
- Define a fallback case with `otherwise(action)`.
- Use function actions, such as `() => "result"`.
- Use primitive actions, such as `"result"`, `42`, `true`, or `10n`.
- Throw when no case matches and no fallback is provided.

Not supported yet:

- Object patterns.
- Array patterns.
- Predicate patterns.
- Public wildcard patterns.
- TypeScript types.
- npm installation.

## Quick Example

```js
const { match, on, otherwise } = require("./");

const label = match(4, [
	on(1, "one"),
	on(2, "two"),
	otherwise(() => "other"),
]);

console.log(label);
// other
```

## API

### `match(value, cases)`

Evaluates the cases from top to bottom and returns the result of the first
matching case.

```js
match("loading", [
	on("idle", "Waiting"),
	on("loading", "Loading"),
	otherwise("Unknown"),
]);
```

If no case matches and no `otherwise` case exists, `match` throws an error.

### `on(pattern, action)`

Creates a case.

For now, `pattern` is matched with strict equality:

```js
on("success", "Done")
on(404, () => "Not found")
```

### `otherwise(action)`

Creates the fallback case.

```js
otherwise(() => "Fallback")
```

### Actions

Actions are resolved by an internal registry.

Currently supported actions:

- Functions: executed only when their case matches.
- Primitive values: returned as-is.

```js
on("a", () => "computed")
on("b", "static")
```

## Design Goals

- Keep the public API small.
- Stay JavaScript-first and dependency-free.
- Make common branching logic easier to read than long `if` or `switch` blocks.
- Keep pattern matching and action resolving as separate internal concepts.
- Grow by adding small resolvers instead of turning the core into one large
  conditional block.

## Roadmap

### Foundation

- Add `package.json`.
- Add a test runner.
- Publish under the package name `lem`.
- Decide the supported module formats.

### Pattern Matching

- Literal patterns.
- Predicate patterns.
- Array patterns.
- Object patterns.
- Nested patterns.
- Public wildcard pattern.
- Multiple patterns for the same case.

### Actions

- Keep the action resolver registry.
- Decide whether object and array actions should be returned as-is.
- Improve error messages for unsupported actions.
- Consider async actions.

### Developer Experience

- Add TypeScript declarations.
- Add examples for reducers, parsers, and UI state.
- Document edge cases such as `NaN`, `null`, and `undefined`.
- Add comparison examples against `switch`.

## Inspiration

`lem` takes structural inspiration from pattern matching libraries such as
[`ts-pattern`](https://github.com/gvergnaud/ts-pattern) and
[`typescript-pattern-matching`](https://github.com/WimJongeneel/ts-pattern-matching),
while intentionally starting with a smaller JavaScript-first API.

## License

MIT
