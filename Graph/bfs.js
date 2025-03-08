function bfs(graph, start) {
        const q = [start]; // queue
        const visited = new  Set();


        while (q.length > 0) {
                let node = q.shift();

                if (!visited.has(node)) {
                        visited.add(node);
                }

                // neighbors of the node q[node] = neighbors
                for  (let neighbors of graph[node]) {
                        if (!visited.has(neighbors)) {
                                q.push(neighbors);
                        }
                }
        }

        return visited;
}

const graph = {
        "A": ["B", "C"],
        "B": ["A", "D", "E"],
        "C": ["A", "F"],
        "D": ["B"],
        "E": ["B"],
        "F": ["C"]
    };
    
console.log(bfs(graph, "A")); // A B C D E F