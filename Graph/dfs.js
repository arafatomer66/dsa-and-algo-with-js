function dfs(graph, start) {
  const stack = [start]; //
  const visited = new Set(); //  A B D E C F

  while (stack.length > 0) {
    let node = stack.pop(); // Remove last node from stack (LIFO)

    if (!visited.has(node)) {
      visited.add(node); // Mark node as visited

      // Add unvisited neighbors to stack (reverse order to maintain DFS order)
      for (let i = graph[node].length - 1; i >= 0; i--) {
        let neighbor = graph[node][i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return visited; // Returning the Set of visited nodes
}

// Example Graph (Adjacency List)
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"],
};

// simulation
// const stack = [start];  const visited = new Set();
// stack = ["A"]; visited = {}
// node = "A"; stack = []; visited = {"A"}
// neighbor = "C"; stack = ["C"]
// neighbor = "B"; stack = ["C", "B"] why c before b? because we are adding in reverse order why

console.log(dfs(graph, "A")); // Output: Set { 'A', 'B', 'D', 'E', 'C', 'F' }
