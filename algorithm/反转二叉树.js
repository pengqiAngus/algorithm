function invertTree(root) {
  if (root === null) {
    return null;
  }
  const queue = [root]; // 使用队列存储节点
  while (queue.length > 0) {
    const node = queue.shift(); // 取出当前节点
    // 交换左右子节点
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    // 将子节点加入队列
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return root;
}

