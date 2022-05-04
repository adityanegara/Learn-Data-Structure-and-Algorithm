class Queue {
    constructor(size){
        this.queueArray = [];
        this.front = -1;
        this.rear = -1;
        this.index = 0;
        this.size = size;
    }

    enqueue = (data) =>{
        if(this.isFull()){
            throw new Error("Queue is Full")
        }
        this.queueArray[this.index] = data;
        this.index += 1;
        if(this.isEmpty()){
            this.front = 0;
            this.rear = 0;
        }else{
            this.rear+=1;
        }
    }

    dequeue = () =>{
        if(this.isEmpty()){
            return null;
        }
        const frontValue = this.queueArray[this.front];
        this.front +=1;
        this.rear -=1;
        return frontValue;
    }

    peek = () =>{
        if(this.isEmpty()){
            return null;
        }
        return this.queueArray[this.front];
    }
    
 
    isFull = () =>{
      return (this.rear == this.size - 1) ? true : false;
    }

    isEmpty = () =>{
        return (this.front == -1 && this.rear == -1) ? true : false;
    }
}
queue = new Queue(5);

module.exports = {
    Queue
}