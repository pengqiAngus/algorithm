class TimeLimitCache {
  private cache: Map<number | string, { value: number; expiration: number }>;

  constructor() {
    this.cache = new Map();
  }

  set(key: number | string, value: number, duration: number): boolean {
    const now = Date.now();
    let existed = false;
    if (this.cache.has(key)) {
      const data = this.cache.get(key);
      if (data && data.expiration > now) {
        existed = true;
      }
    }
    this.cache.set(key, { value, expiration: now + duration });
    return existed;
  }

  get(key: number | string): number {
    const now = Date.now();
    const data = this.cache.get(key);
    if (data && data.expiration > now) {
      return data.value;
    }
    return -1;
  }

  count(): number {
    const now = Date.now();
    let count = 0;
    for (const [_, data] of this.cache) {
      if (data.expiration > now) {
        count++;
      }
    }
    return count;
  }
}

const cache = new TimeLimitCache();
cache.set("a", 1, 3000);
cache.set("b", 2, 4000);
cache.set("c", 3, 5000);
cache.set("d", 4, 6000);

setTimeout(() => {
  console.log("a", cache.get("a"));
  console.log("b", cache.get("b"));
  console.log("c", cache.get("c"));
  console.log("d", cache.get("d"));
  console.log(cache.count());
}, 2000);
setTimeout(() => {
  console.log("a", cache.get("a"));
  console.log("b", cache.get("b"));
  console.log("c", cache.get("c"));
  console.log("d", cache.get("d"));
  console.log(cache.count());
}, 3000);
setTimeout(() => {
  console.log("a", cache.get("a"));
  console.log("b", cache.get("b"));
  console.log("c", cache.get("c"));
  console.log("d", cache.get("d"));
  console.log(cache.count());
}, 4000);
setTimeout(() => {
  console.log("a", cache.get("a"));
  console.log("b", cache.get("b"));
  console.log("c", cache.get("c"));
  console.log("d", cache.get("d"));
  console.log(cache.count());
}, 6000);
