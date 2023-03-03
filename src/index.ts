declare global {
  interface Set<T> {
    includes(o: T[]): boolean;
    some(o: T[]): boolean;
  }
}

/** Checks if all given elements are present in the set. */
Set.prototype.includes = function <T>(o: T[]): boolean {
  for (const item of o) {
    if (!this.has(item)) return false;
  }
  return true;
};

/** Checks if only some given elements are present in the set. */
Set.prototype.some = function <T>(o: T[]): boolean {
  for (const item of o) {
    if (this.has(item)) return true;
  }
  return false;
};

export {};
