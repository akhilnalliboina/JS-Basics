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
}

const list = new SingleLinkedList();
console.log(list.isEmpty());
list.push(0);
list.push(1);
list.push(2);
console.log(list);
console.log(list.isEmpty());
console.log(list.pop());
console.log(list.get(1));
