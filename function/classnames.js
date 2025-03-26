function classnames(...args) {
  const classes = [];

  args.forEach((arg) => {
    if (!arg) return;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      // 字符串或数字直接加入
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      // 数组递归处理
      const inner = classnames(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === "object") {
      // 对象：遍历 key，值为 true 的 key 加入
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(" ");
}
