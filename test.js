function debounce(func, wait) {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args);
    }, wait);
  };
}
function throttle(func, wait) {
  let time = null;
  return (...args) => {
    const now = Date.now();
    if (now - time >= wait) {
      func(args);
    }
    time = now;
  };
}
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
Function.prototype.myBind = function (context, ...args) {
  const self = this;
  return function (...newArgs) {
    self.apply(context, [...args, ...newArgs]);
  };
};

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    const total = promises.length;
    let completed = 0;

    if (total === 0) {
      resolve([]);
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          result[index] = res;
          completed++;
          if (completed === total) {
            resolve(result);
          }
        })
        .catch((error) => {
          return reject(error);
        });
    });
  });
}
function deepClone(obj, cache = new WeakMap()) {
  if (obj instanceof null || obj instanceof undefined) {
    return obj;
  }
  if (typeof obj === "function") return obj;

  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Map) {
    const cloneMap = new Map();
    obj.forEach((value, key) => {
      cloneMap.set(key, deepClone(value));
    });
    return cloneMap;
  }
  if (obj instanceof Set) {
    const cloneSet = new Set();
    obj.forEach((item) => {
      cloneMap.add(deepClone(item));
    });
    return cloneSet;
  }
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  const cloneObj = Array.isArray(obj) ? [] : {};
  Reflect.ownKeys(obj).forEach((key) => {
    cloneObj[key] = deepClone(obj[key], cache);
  });
  return cloneObj;
}
function addLargeNumbers(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";
  while (i || j || carry) {
    let iValue = i ? parseInt(a[i]) : 0;
    let jValue = j ? parseInt(b[j]) : 0;
    let value = jValue + iValue + carry;
    if (value >= 10) {
      value = value % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result += value;
    i--;
    l--;
  }
  return result;
}

function permute(nums) {
  const result = [];
  const bk = (start) => {
    if (start === nums.length) {
      return result.push([...nums]);
    }
    for (let i = start; i < nums.length; i++) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      bk(start + 1);
      [nums[start], nums[i]] = [(nums[i], nums[start])];
    }
  };
  bk(0);
  return result;
}

function subsets(nums) {
  const subset = [];
  const result = [];
  const bk = (start) => {
    result.push([...subset]);
    for (let i = start; i < array.length; i++) {
      subset.push(nums[i]);
      bk(i + 1);
      subset.pop();
    }
  };
  bk(0);
  return result;
}

function subsets2(nums) {
  const n = nums.length;
  const result = [];
  for (let i = 0; i < 1 << n; i++) {
    const subsets = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subsets.push(nums[i]);
      }
    }
    result.push(subsets);
  }
  return result;
}
