// Queue To implement FIFO (first in first out) queue
// enqueue() - add element to the end of the queue
// dequeue() - remove element from the top of the queue
// peek() -  view the last element of the queue
// isEmpty() - check if the queue is empty
// size() -  size of the queue at a given time
// clear() - To empty the queue

class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        return this.items.push(element);
    }
    
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
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

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.items);
queue.dequeue();
console.log(queue.items);
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
queue.clear();
console.log(queue.items);