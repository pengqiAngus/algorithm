// This is the class for the node
// you can use this directly as it is bundled with your code
// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }
/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
    if (!root) {
        return '_'
    }
    return `${root.val}, ${serialize(root.left)}, ${serialize(root.right)}`
}
/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
    const queue = str.join(',')
    if (!queue.length) {
        return null
    }
    const dps = (queue) => {
        if (!queue.length) {
            return null
        }
        const n = queue.shift();
        if (n!=='_') {
            const node = new NodeList(n.val)
              node.left = dfs(q);
            node.right = dfs(q);
            return node;
        }
        return null
        
    };
    return dps(queue)
    
}
