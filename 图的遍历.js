const graph = {
  A: ["B", "C", "D", "E"],
  B: ["A", "C", "E"],
  C: ["B", "E"],
  D: ["B", "C"],
  E: ["A", "D"],
};

const BFS = (graph, start) => {
  const visited = new Set();
  const array = [];
  const stack = [start];
  while (stack.length) {
    const currentVertex = stack.shift();
    if (visited.has(currentVertex)) {
      continue;
    }
    array.push(currentVertex);
    visited.add(currentVertex);
    for (const neighbor of graph[currentVertex]) {
      stack.push(neighbor);
    }
  }
  return array;
};
const array = BFS(graph, "A");
console.log("array", array);

const DFS = (graph, start) => {
  const array = [];
  const visited = new Set();
  array.push(start);
  visited.add(start);
  const dfsNode = (start) => {
    for (const node of graph[start]) {
      if (!visited.has(node)) {
        array.push(node);
        visited.add(node);
        dfsNode(node);
      }
    }
  };
  dfsNode(start);
  return array;
};
const result = DFS(graph, "A");
console.log("result", result);
