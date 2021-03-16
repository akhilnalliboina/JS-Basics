class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  get length() {
    return this.queue.length;
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.length == 0;
  }
}

queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.length);
