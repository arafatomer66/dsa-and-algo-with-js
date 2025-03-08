class Graph {
        constructor() {
            this.adjacencyList = {};
        }

        addVertex(vertex) {
                if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        }

        addEdge(vertex1, vertex2) {
                if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
                if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

                this.adjacencyList[vertex1].push(vertex2);
                this.adjacencyList[vertex2].push(vertex1);
        }

        // display the graph
        print() {
                const keys = Object.keys(this.adjacencyList);
                for (let i of keys) {
                        const values = this.adjacencyList[i].join(', ');
                        console.log(`${i} => ${values}`);
                }
        }

}

// Example Usage
const graph = new Graph();

// Add vertices (nodes)
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph

// Add edges (connections)
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "D");

// Print the graph
graph.print();

