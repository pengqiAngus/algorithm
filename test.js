function serialize(root) {
  if (!root) {
    return "-";
  }
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}
/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  const queue = str.join(",");
  if (!queue) {
    return null;
  }

  const dps = (queue) => {
    if (!queue.length) {
      return null;
    }
    const node = queue.shift();
    if (node !== "-") {
      const newNode = new NodeList(node.val);
      newNode.left = dps(queue);
      newNode.right(dps(queue));
      return newNode;
    }
    return null;
  };
  const root = dps(queue);
  return root;
}

function invertTree(root) {
  if (!root) {
    return null;
  }
  const stack = [root];
  while (stack.length) {
    const node = stack.shift();
    const temp = node.left;
    node.left = node.right;
    node.right = node.left;
    stack.push(node.left);
    stack.push(node.right);
  }
}

function flatten(arr) {
  arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item));
    }
    return acc.concat(item);
  }, []);
}
function classnames(...args) {
  const classes = [];
  if (typeof args === "number" || typeof args === "string") {
    classes.push(args);
  }
  if (Array.isArray(args)) {
    args.forEach((item) => {
      classes.push(classnames(item));
    });
  }
  if (args instanceof Object) {
    Reflect.ownKeys.forEach((key) => {
      if (args[key]) {
        classes.push(key);
      }
    });
  }
}
