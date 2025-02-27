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
var maxDepth = function (root) {
    let depth = 0;
    const stack = [{node:root,nodeDepth:0}]
    while (stack.length>0) {
        const root = stack.pop();
        const { node, nodeDepth } = root;
        depth = Math.max(nodeDepth,depth)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return depth;
};
