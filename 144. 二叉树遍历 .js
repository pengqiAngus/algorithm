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
var preOrderTraversal = function (root) {
  if (!root) {
    return root;
  }
  const stack = [];
  const result = [];
  while (root) {
    result.push(root.val);
    if (root.right) {
      stack.push(root.right);
    }
    if (root.left) {
      root = root.left;
    } else {
      root = stack.pop();
    }
  }
  return result;
};

var inOrderTraversal = function (root) {
  const stack = [];
  const result = [];
  if (!root) {
    return result;
  }
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};

var postOrderTraversal = function (root) {
  const stack = [];
  const result = [];
  let lastVisitNode = null;
  if (!root) {
    return result;
  }
  while (root || stack.length > 0) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const node = stack[stack.length - 1];
      if (node.right && lastVisitNode !== node.right) {
        root = node.right;
      } else {
        result.push(node.val);
        lastVisitNode = stack.pop();
      }
    }
  }
  return result;
};

function bfs(root) {
  const result = [];
  const queue = [];
  if (!root) {
    return result;
  }
  queue.push(root);
    while (queue.length) {
        const node = queue.shift();
        result.push(node.val);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }   
    }
    return result;
}

function levelOrderTraversal(root) { 
    const result = []
    const queue = [root];
    if (!root) {
        return result
    }
    while (queue.length>0) {
        const levelSize = queue.length;
        const currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        result.push(currentLevel);
    }
    return result;
}
