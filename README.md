<p align="center">
	<img src="./imgs/lem_logo.png" alt="Lem logo" width="180" />
</p>

<h1 align="center">lem</h1>

<p align="center">
	Lightweight pattern matching for expressive JavaScript code.
</p>

<p align="center">
	<a href="#what-is-lem">What is Lem?</a>
	 ·
	<a href="#quickstart">Quickstart</a>
	 ·
	<a href="#roadmap">Roadmap</a>
	 ·
	<a href="#inspiration">Inspiration</a>
</p>

<p align="center">
	<img alt="Status" src="https://img.shields.io/badge/status-experimental-orange" />
	<img alt="Runtime" src="https://img.shields.io/badge/runtime-Node.js-43853d" />
	<img alt="License" src="https://img.shields.io/badge/license-MIT-blue" />
</p>

## What is Lem?

`lem` is a tiny JavaScript library for writing branching logic as a list of
patterns and actions.

Instead of spreading conditional logic across `if`, `else`, and `switch` blocks,
you describe the value you want to match, the cases that can handle it, and the
fallback to use when nothing else matches.

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

Lem is intentionally small right now. It is not trying to compete with mature
pattern matching libraries yet. The goal is to grow from a simple, readable core
into a library that can support richer JavaScript patterns over time.

## How it works

Lem currently gives you three primitives:

### 1. `match(value, cases)`

Receives a value and a list of cases. It returns the result of the first matching
case.

```js
match("loading", [
	on("idle", "Waiting"),
	on("loading", "Loading"),
	otherwise("Unknown"),
]);
```

### 2. `on(pattern, action)`

Defines a case. For now, patterns are matched with strict equality.

```js
on("success", "Done")
on(404, () => "Not found")
```

### 3. `otherwise(action)`

Defines the fallback case.

```js
otherwise(() => "Fallback")
```

If no case matches and no fallback is provided, `match` throws an error.

## Current Features

| Feature | Status |
| --- | --- |
| Literal primitive matching | Available |
| Function actions | Available |
| Primitive actions | Available |
| Fallback cases | Available |
| Object patterns | Planned |
| Array patterns | Planned |
| Predicate patterns | Planned |
| Public wildcard patterns | Planned |
| TypeScript declarations | Planned |

## Quickstart

Lem is not published to npm yet.

For local development, require the project root:

```js
const { match, on, otherwise } = require("./");
```

Then define a match expression:

```js
const status = "error";

const message = match(status, [
	on("idle", "Ready"),
	on("loading", "Loading"),
	on("success", "Done"),
	on("error", () => "Something went wrong"),
	otherwise("Unknown status"),
]);

console.log(message);
```

## Why Lem?

Lem started as a study project: a way to understand how a small pattern matching
library can be designed from the inside out.

That origin is part of the project, not something to hide. It keeps the library
focused on a few questions:

- How small can the public API stay?
- How clearly can pattern matching and action execution be separated?
- Can new matching strategies be added as resolvers instead of one large
  conditional block?
- What would an approachable JavaScript-first pattern matching API look like?

The long-term goal is not only to learn, but to turn that learning into a useful
library with clean internals and a pleasant API.

## Design Principles

- Small public API.
- JavaScript-first ergonomics.
- Dependency-free core.
- Explicit fallback behavior.
- Separate pattern matching from action resolving.
- Grow through small internal registries and resolvers.

## Roadmap

### Foundation

- Add `package.json`.
- Add a test runner.
- Publish under the package name `lem`.
- Decide whether the package should expose CommonJS, ESM, or both.

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

Lem is especially inspired by:

- [`z-pattern-matching/z`](https://github.com/z-pattern-matching/z), for its
  JavaScript-first approach to pattern matching.
- [`gvergnaud/ts-pattern`](https://github.com/gvergnaud/ts-pattern), for its
  expressive API and rich pattern system.

The README structure also takes presentation cues from projects such as
[`NangoHQ/nango`](https://github.com/NangoHQ/nango) and
[`pubkey/rxdb`](https://github.com/pubkey/rxdb): clear positioning, quick
navigation, compact examples, and an honest feature overview.

## Mascot

The lemur in the logo is Lem's mascot: small, quick, and comfortable jumping
from one branch to another.

## License

MIT
