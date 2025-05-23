class TimeLimit {
  cache: Map<string | number, { value: Number; expire: number }>;
  constructor() {
    this.cache = new Map();
  }
  set(key: number | string, value: number, expire:number) {
    let exist = false;
    const now = Date.now();
    if (this.cache.has(key)) {
      const data = this.cache.get(key);
      if (data && data.expire > now) {
        exist = true;
      }
    }
    this.cache.set(key, { value, expire: now+expire });
    return exist;
  }
  get(key: number | string) {
    const now = Date.now();
    if (this.cache.has(key)) {
      const data = this.cache.get(key);
      if (data && data.expire > now) {
        return data.value;
      }
    }
    return -1;
  }
  count() {
    let count = 0;
    for (const [_, item] of this.cache) {
      if (item.expire > Date.now()) {
        count++;
      }
    }
    return count;
  }
}
const cache = new TimeLimit();
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