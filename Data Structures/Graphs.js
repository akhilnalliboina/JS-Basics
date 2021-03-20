class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Graph {
  constructor(directed = false) {
    this.undirected = directed;
    this.nodes = [];
  }
  addNode(value) {
    this.nodes.push(new Node(value));
  }
  getNode(value) {
    return this.nodes.find((node) => node.value === value);
  }
  addEdge(value1, value2) {
    const node1 = this.getNode(value1);
    const node2 = this.getNode(value2);
    node1.edges.push(node2);
    if (this.undirected) {
      node2.edges.push(node1);
    }
    return `An edge between ${node1.value} and ${node2.value} was added`;
  }
}

const graph = new Graph();
graph.addNode("Ramanaiah");
graph.addNode("Akhil");
graph.undirected = true;
console.log(graph.addEdge("Ramanaiah", "Akhil"));
console.log(graph.getNode("Ramanaiah"));
console.log(graph.getNode("Akhil"));
