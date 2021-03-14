class Stack {
  constructor() {
    this.stack = [];
  }
  get length() {
    return this.stack.length;
  }
  pop() {
    return this.stack.pop();
  }
  push(item) {
    this.stack.push(item);
  }
  peek() {
    return this.stack[this.length - 1];
  }
  isEmpty() {
    return this.length == 0;
  }
}
