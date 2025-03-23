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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.right) {
      node.right.val += node.val;
      stack.push(node.right);
    }
    if (node.left) {
      node.left.val += node.val;
      stack.push(node.left);
    }
    if (!node.left && !node.right) {
      if (node.val === targetSum) {
        return true;
      }
    }
  }
  return false;
};
