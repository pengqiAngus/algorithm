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
