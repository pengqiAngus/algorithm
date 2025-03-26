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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const array = [];
  const stack = [];
  while (root) {
    array.push(root.val);
    if (root?.left) {
      root = root.left;
    } else {
      root = stack.pop();
    }
    if (root?.right) {
      stack.push(root.right);
    }
  }
  return array;
};
