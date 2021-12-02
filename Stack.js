// Stack To implement LIFO (last in first out)
// add() - add element to the end of the stack
// remove() - remove element from the top of the stack
// peek() -  view the last element of the stack
// isEmpty() - check if the stack is empty
// size() -  size of the stack at a given time
// clear() - To empty the stack

class Stack {
    constructor() {
        this.items = [];
    }
    
    add(element) {
        return this.items.push(element);
    }
    
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
console.log(stack.items);
stack.remove();
console.log(stack.items);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.items);