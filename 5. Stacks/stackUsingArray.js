class Stack {
    constructor(size){
        this.size = size;
        this.index = 0;
        this.stack = [];
    }
    push = (element) =>{
        if(this.isFull()){
            throw 'Stack is Full!'
        }else{
            this.stack[this.index] = element;
            this.index+=1;
        }
    }
    pop = () =>{
        if(this.isEmpty()){
            throw 'Stack is empty';
        }else{
            let returnElement = this.stack[this.index - 1];
            this.stack[this.index -1] = null;
            this.index -=1;
            return returnElement;
        }
    }
    peek = () =>{
        if(this.isEmpty()){
            throw 'Stack is empty';
        }else{
            return this.stack[this.index - 1];
        }
    }
    isFull = () =>{
         if(this.index == this.size){
             return true
         }
         return false;
     }

     isEmpty = () =>{
         if(this.index == 0){
             return true;
         }
         return false;
     }

     clear = () =>{
         for(let i = 0; i< this.size;i++){
            this.stack[i] = null;
         }
     }
     print = () =>{
         console.log(this.stack);
     }
}

let test = new Stack(3);
test.push(1);
test.push(2);
test.push(3);
test.print();