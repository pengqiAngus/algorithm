var inOrderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const stack = [];
  const result = [];
  while (root || stack.length > 0) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const node = stack.pop();
      result.push(node.val);
      if (node.right) {
        root = node.right;
      }
    }
  }
  return result;
};
