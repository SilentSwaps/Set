declare global {
  interface Set<T> {
    includes(o: T[]): boolean;
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
