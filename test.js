const graph = {
  A: ["B", "C", "D", "E"],
  B: ["A", "C", "E"],
  C: ["B", "E"],
  D: ["B", "C"],
  E: ["A", "D"],
};

const BFS = (graph, start) => {
  const array = [start];
  const result = [];
  const visited = new Set();
  while (array.length) {
    const current = array.shift();
    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);
      for (const element of graph[current]) {
        array.push(element);
      }
    }
  }
  return array;
};
const array = BFS(graph, "A");
console.log("array", array);

const DFS = (graph, start) => {
  const result = [];
  const visited = new Set();
  const dfsNode = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      for (const element of graph[node]) {
        dfsNode(element);
      }
    }
  };
  dfsNode(start);
  return result;
};
const result = DFS(graph, "A");
console.log("result", result);
