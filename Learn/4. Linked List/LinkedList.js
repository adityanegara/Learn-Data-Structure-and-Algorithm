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
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.addLast(4);
list.removeLast();
list.print();


