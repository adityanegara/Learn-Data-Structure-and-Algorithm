class Queue {
    constructor(){
      this.mainStack = [];
      this.secondStack = [];
    }

    enqueue = (data) =>{
        this.moveItemFromStack(this.mainStack, this.secondStack);
        this.mainStack.push(data);
        this.moveItemFromStack(this.secondStack, this.mainStack);
    }
    
    dequeue = () =>{
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.mainStack.pop();
    }

    peek = () =>{
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.mainStack[this.mainStack.length -1];
    }

    isEmpty = () =>{
        if(this.mainStack.length > 0 != true){
            return true;
        }else{
            return false;
        }
    }

    moveItemFromStack(firstStack, secondStack){
        while(firstStack.length > 0){
            secondStack.push(firstStack.pop());
        }
    }
}


const reverseQueue = (queue) =>{
   let stack = [];
   let reversedQueue = new Queue();
   while(queue.isEmpty() !== true){
       stack.push(queue.dequeue());
   }
   while(stack.length !== 0){
       reversedQueue.enqueue(stack.pop());
   }
   return reversedQueue;
}

module.exports = {
    Queue,
    reverseQueue
}