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

// Imagine you’re building a navigation component for a product website we’ll call “Rainforest”. Users can navigate from the home page to different product pages within the site. For example, a user flow might be Home > Kitchen > Small Appliances > Toasters.
//Build a navigation component that displays the list of previously visited pages as well as a back button which lets the user go back to the previous page.

stack = new Stack();
stack.push("Home");
stack.push("Kitchen");
stack.push("Bathroom");
stack.peek();
stack.pop("Bathroom");
stack.isEmpty();
stack.length;
