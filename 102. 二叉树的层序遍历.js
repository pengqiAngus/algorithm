function bfs(root) {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return queue;
}

function levelOrderTraversal(root) {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const currentLevel = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
}
