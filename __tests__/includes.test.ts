import '../src/index';

const numberSet = new Set([1, 2, 3])
const stringSet = new Set<string>(["one", "two", "three"])

const testObjectA = { a: 1, b: 2}
const testObjectB = {c: 3, d: 4}
const objectSet = new Set<object>([testObjectA, testObjectB])

test("Returns true when given numbers are present", () => {
	expect(numberSet.includes([1, 2])).toBe(true)
})

test("Returns false when given numbers are not present", () => {
	expect(numberSet.includes([4, 5])).toBe(false)
})

test("Returns true when given string are not present", () => {
	expect(stringSet.includes(["one", "three"])).toBe(true)
})

test("Returns false when given string are not present", () => {
	expect(stringSet.includes(["five"])).toBe(false)
})

test("Returns true when given objects are present", () => {
	expect(objectSet.includes([testObjectA, testObjectB])).toBe(true) 
});

test("Returns false when given objects are not present", () => {
	expect(objectSet.includes([testObjectA,{e: 5, f: 6}])).toBe(false) 
});