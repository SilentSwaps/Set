declare global {
  interface Set<T> {
	/** Checks if all given elements are present in the set. */
    includes(o: T[]): boolean;
	/** Checks if only some given elements are present in the set. */
    some(o: T[]): boolean;
  }
}

Set.prototype.includes = function <T>(o: T[]): boolean {
  for (const item of o) {
    if (!this.has(item)) return false;
  }
  return true;
};

Set.prototype.some = function <T>(o: T[]): boolean {
  for (const item of o) {
    if (this.has(item)) return true;
  }
  return false;
};

export {};
