class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    let existed = false;
    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      if (entry.expiration > now) {
        existed = true;
      }
    }
    this.cache.set(key, { value, expiration: now + duration });
    return existed;
  }

  get(key) {
    const now = Date.now();
    const entry = this.cache.get(key);
    if (entry && entry.expiration > now) {
      return entry.value;
    }
    return -1;
  }

  count() {
    const now = Date.now();
    let count = 0;
    for (const [_, entry] of this.cache) {
      if (entry.expiration > now) {
        count++;
      }
    }
    return count;
  }
}
