class Node {
  constructor(value) {
    this.value = value;
    this.rightChild = null;
    this.leftChild = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  addNode(value) {
    let currentNode = this.root;
    let added = false;
    if (this.root == null) {
      this.root = new Node(value);
      return;
    } else {
      while (!added && currentNode) {
        if (value === currentNode.value) {
          return "Duplicates cannot be added";
        } else if (value < currentNode.value) {
          if (currentNode.leftChild == null) {
            currentNode.leftChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.leftChild;
          }
        } else if (value > currentNode.value) {
          if (currentNode.rightChild == null) {
            currentNode.rightChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }
}
