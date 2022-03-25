class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
    setNextNode = (node) =>{
        this.next = node
    }
    getNextNode = () =>{
        return this.next;
    }
    getValue = () =>{
        return this.value;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addLast = (item) =>{
        const node = new Node(item);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.setNextNode(node);
            this.tail = node;
        }
    }

    addFirst = (item) =>{
        const node = new Node(item);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.setNextNode(this.head);
            this.head = node;
        }
    }

    removeFirst = () =>{
        if(this.isEmpty()){
            throw  "Linked List Empty"
        }
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        const secondNode = this.head.getNextNode();
        this.head.setNextNode(null);
        this.head = secondNode;
    }

    removeLast = () =>{
        if(this.isEmpty()){
            throw  "Linked List Empty"
        }
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        const previousNode = this.getPreviousNode(this.tail);
        this.tail = previousNode;
        this.tail.setNextNode(null);
      
    }

    toArray = () =>{
        const arrays = [];
        let currentNode = this.head;
        let index = 0;
        while(currentNode !== null){
            arrays[index] = currentNode.getValue();
            currentNode = currentNode.getNextNode();
            index+=1;
        }
        return arrays;
    }

    isEmpty = () =>{
      if(this.head === null){
          return true;
      }else{
          return false;
      }
    }

    getPreviousNode = (node) =>{
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.getNextNode() == node){
                return currentNode;
            }
            currentNode = currentNode.getNextNode();
        }
        return null;
    }

    indexOf = (item) =>{
        let index = 0;
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.getValue() == item){
                return index;
            }
            currentNode = currentNode.getNextNode();
            index++;
        }
        return -1;
    }

    reverse = () =>{
        let previousNode = this.head;
        let currentNode = this.head.getNextNode();
        while(currentNode !== null){
            let nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.tail = this.head;
        this.tail.setNextNode(null);
        this.head = previousNode;
    }

    getTheNthNodeFromtTheEnd = (n) =>{
        if((n > this.size()) || (n<1)){
            throw  "Illegal Arguments";
        }
        let firstNode = this.head;
        let secondNode = this.head;
        for(let i =0; i< n-1; i++){
            secondNode = secondNode.getNextNode();
        }
        while(secondNode.next != null){
            firstNode = firstNode.getNextNode();
            secondNode = secondNode.getNextNode();
        }
        return firstNode.getValue();
    }

    size = () =>{
        let count =0;
        let current = this.head;
        while(current != null){
            current = current.getNextNode();
            count++;
        }
        return count;
    }

    contains = (item) =>{
        return (this.indexOf(item) != -1) ? true : false;
    }

    print = () =>{
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.getValue());
            currentNode = currentNode.getNextNode();
        }
    }
}


let list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50)
console.log(list.getTheNthNodeFromtTheEnd(5));


