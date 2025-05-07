function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      // 如果当前元素是数组，递归调用 flatten
      return acc.concat(flatten(item));
    } else {
      // 否则直接加入结果数组
      return acc.concat(item);
    }
  }, []);
}

// 实现一个数组去重，如果是对象，对象属性一样也是相同的
function uniqueArrayWithObjects(arr) {
  const seen = new Map();
  return arr.filter((item) => {
    if (typeof item === "object" && item !== null) {
      const sortedKeys = Object.keys(item).sort();
      const keyString = sortedKeys
        .map((key) => `${key}:${item[key]}`)
        .join(",");
      if (!seen.has(keyString)) {
        seen.set(keyString, true);
        return true;
      }
      return false;
    } else {
      const strItem = String(item); // 统一转换为字符串进行比较，区分 1 和 '1'
      if (!seen.has(strItem)) {
        seen.set(strItem, true);
        return true;
      }
      return false;
    }
  });
}
