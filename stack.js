class Stack {
  list = [];

  constructor(initialList) {
    if (initialList) this.list = initialList;
  }

  addFront(item) {
    // access state from the front because it's a stack
    this.list.unshift(item);
  }

  push(item) {
    return initialList.push(item);
  }

  get readableList() {
    // access state as a string to see what's there
    return this.list.toString();
  }
  
  get count() {
    // tells you the number of items in the array
    return this.list.length;
  }

  set count(count) {
    return (this.list.length = count);
  }
}

const myStack = new Stack([4, 6, 8]);

myStack.addFront(3);

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null