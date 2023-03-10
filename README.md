# Extended Set

Extended Set is a small package that allows you to pass in an array of values instead of calling `Set.has()` multiple times yourself.

## Usage
`Set.includes()` returns true if all given values are present in the set.
```ts
import "extended-set"

const x = new Set([1, 2, 3, 4])

if(x.includes([1, 3])){ // Will return true because 1 and 3 are in the set.
	// Do something
}
```

`Set.some()` returns true if a single value is present in the set.
```ts
import "extended-set"

const x = new Set([1, 2, 3, 4])

if(x.some([6, 5, 4])) { // Will return true because 4 is in the set.
	// Do something
}
```
