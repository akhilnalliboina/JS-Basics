class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    //if the list is empty
    if (this.isEmpty()) {
      return null;
    }
    //if the list has only one item
    else if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    }
    // if the list has multiple items
    else {
      let currentNode = this.head;
      let nodeToRemove = this.tail;
      let lastBeforeNode;
      while (currentNode) {
        if (currentNode.next == nodeToRemove) {
          lastBeforeNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      lastBeforeNode.next = null;
      this.tail = lastBeforeNode;
      this.length--;
      return nodeToRemove;
    }
  }

  get(index) {
    // check if the given index is valid
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    } else if (index == 0) {
      return this.head;
    } else if (index == this.length - 1) {
      return this.tail;
    } else {
      let iterator = 0;
      let resultNode = this.head;
      while (iterator < index) {
        iterator++;
        resultNode = resultNode.next;
      }
      return resultNode;
    }
  }
  delete(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    } else if (index == 0) {
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
        this.length--;
      } else {
        this.head = this.head.next;
        this.length--;
      }
    } else if (index == this.length - 1) {
      this.pop();
      this.length--;
    } else {
      let currentNode = this.head;
      let deleteNode = null;
      let nextToDeleteNode = null;
      let prevToDeleteNode = null;
      let iterator = 0;
      while (iterator < index) {
        iterator++;
        prevToDeleteNode = currentNode;
        deleteNode = currentNode.next;
        nextToDeleteNode = deleteNode.next;
        currentNode = currentNode.next;
      }
      prevToDeleteNode.next = nextToDeleteNode;
      this.length--;
    }
  }
}

const list = new SingleLinkedList();
console.log(list.isEmpty());
list.push(0);
list.push(1);
list.push(2);
console.log(list);
list.delete(1);
console.log(list);
