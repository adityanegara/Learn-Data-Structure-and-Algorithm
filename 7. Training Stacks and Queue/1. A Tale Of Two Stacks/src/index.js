class Queue {
    constructor(){
        this.mainStack = [];
        this.secondStack = [];
    }

    enqueue = (data) =>{
        this.shiftStack(this.mainStack, this.secondStack);
        this.mainStack.push(data);
        this.shiftStack(this.secondStack, this.mainStack);
    }

    shiftStack = (firstStack, secondStack) =>{
        while(firstStack.length !== 0){
            secondStack.push(firstStack.pop());
        }
        return secondStack;
    }

    dequeue = () =>{
        if(this.isEmpty() != true){
            return this.mainStack.pop();
        }else{
            throw new Error('Empty Queue');
        }   
    }

    peek = () =>{
        if(this.isEmpty() != true){
            return this.mainStack[this.mainStack.length -1];
        }else{
            throw new Error('Empty Queue');
        }   
    }

    isEmpty = () =>{
        return (this.mainStack.length == 0) ? true : false;
    }
}

const processInput = (inputs) =>{
    let returnValue = [];
    const queue = new Queue();
    inputs.forEach(operation => {
        switch(operation[0]){
            case '1':
                queue.enqueue(operation[1])
                break
            case '2':
                queue.dequeue();
                break;
            case '3':
                returnValue.push(queue.peek());
                break;
        }
    });
    return returnValue;
}

module.exports = processInput