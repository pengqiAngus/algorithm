var postOrderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const stack = [];
  const result = [];
  let lastVisitNode = null;
  while (root || stack.length > 0) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const node = stack[stack.length - 1];
      if (node.right && node.right !== lastVisitNode) {
        root = node.right;
      } else {
        const current = stack.pop();
        result.push(current);
        lastVisitNode = current;
      }
    }
  }
  return result;
};

