/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) {
        return 0
    }
  let minDepth = Infinity;
  const stack = [];
    let node = { root, depth: 1 };
  while (node) {
    const { root, depth: currentDepth } = node;
    if (root.right) {
      stack.push({ root: root.right, depth: currentDepth + 1 });
    }
    if (root.left) {
      node = { root: root.left, depth: currentDepth + 1 };
    } else {
      node = stack.pop();
    }
    if (!root.left && !root.right) {
      minDepth = currentDepth < minDepth ? currentDepth : minDepth;
    }
  }
  return minDepth;
};


var minDepth = function (root) {
  if (!root) {
    return 0;
  }
    const queue = [[root, 1]]
    while (queue.length>0) {
        const [root, n] = queue.shift();
        if (!root?.left && !root?.right) {
            return n 
        }
        if (root?.left) {
            queue.push([root.left,n+1]);
        }
        if (root?.right) {
            queue.push([root.left,n+1]);
        }
    }
};
