/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return;
    const stack = [node]
    const visited = new Map();
    const clone = new Node(node.val,[])
     visited.set(node, clone);
    while (stack.length>0) {
        const node = stack.pop();
        const currentClone = visited.get(node);
        for (let neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                const newNeighbor = new Node(neighbor.val, []);
                visited.set(neighbor, newNeighbor);
            }
            currentClone.neighbors.push(visited.get(neighbor));
        }
    }
    return clone
};




