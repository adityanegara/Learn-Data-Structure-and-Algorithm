class SinglyLinkedList{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}



const toArray = (head) =>{
    let array = [];
    while(head != null){
        array.push(head.data)
        head = head.next;
    }
    return array;
}

const insertNodeAtTail = (head, data) =>{
    if(head === null) return new SinglyLinkedList(data);
    let lastNode = head;
    while(lastNode.next !== null){
        lastNode = lastNode.next;
    }
    let newNode = new SinglyLinkedList(data);
    lastNode.next = newNode;
    return head;
}

const insertNodeAtHead = (head,data) =>{
    if(head === null) return new SinglyLinkedList(data);
    let newNode = new SinglyLinkedList(data);
    newNode.next = head;
    head = newNode;
    return head;
}

const insertNodeAtPosition = (head,data, position) =>{
    let next = head.next;
    let current = head;
    let counter = 1;
    while(next !== null && counter < position){
        current = current.next;
        next=next.next;
        counter++;
    }
    let newNode = new SinglyLinkedList(data);
    newNode.next = next;
    current.next = newNode;
    return head;
}

const printReverse = (head) =>{
    let array = toArray(head);
    for(let i =array.length-1; i>=0;i--){
        console.log(array[i]);
    }
}

const deleteNode = (head, position) =>{
    if(position == 0){
        return head.next
    }
    let current = head;
    let next = head.next;
    let counter  = 1;
    while(next != null && counter < position ){
        current = current.next;
        next = next.next;
        counter++;
    }    
    if(next){
        current.next = next.next;
    }
    return head;
}

const reverse = (head) =>{
    let current = head;
    let before = null;
    while(current != null){
        let oldCurrentNext = current.next;
        current.next = before;
        before = current;
        current = oldCurrentNext;
    }
    return before;
}

const compareLists = (listOne, listTwo) =>{
    while(listOne != null || listTwo!= null){
        if(listOne.data != listTwo.data){
            return 0;
        }else{
            listOne = listOne.next;
            listTwo = listTwo.next;
        }
    }
    return 1
}

const combineLinkedList = (listOne, listTwo) =>{
   let lastNodeOfTheFirstList = listOne;
   while(lastNodeOfTheFirstList.next != null){
    lastNodeOfTheFirstList = lastNodeOfTheFirstList.next;
   }
   lastNodeOfTheFirstList.next = listTwo;
   return listOne;
}

const sortLinkedListAscending = (head) =>{
    let current = head;
    let index = null;
    while(current != null){
        index = current.next;
        while(index != null){
            if(current.data > index.data){
                let temp = current.data;
                current.data = index.data;
                index.data = temp;
            }
            index = index.next;
        }
        current = current.next;
    }

    return head;
}

const getNodeValueFromTail = (head, positionFromTail) =>{
    let current = head;
    let index = head;
    for(let i =0; i< positionFromTail; i++){
        index = index.next;
    }
    while(index.next != null){
        index = index.next;
        current = current.next;
    }
    return current.data;
}

const deleteDuplicate = (head) =>{
    let curernt = head;
    let index =  head.next;
    while(index != null){
        if(curernt.data === index.data){
         curernt.next = index.next;
         index = index.next;
         continue;
        }
        index = index.next;
        curernt = curernt.next;
    }
    return head;
}

const hasCycle = (head) =>{
   let slow = head;
   let fast = head;
   while(fast !== null){
       slow = slow.next;
       if(fast.next == null){
           return 0;
       }
       fast = fast.next.next;
       if(fast == slow){
           return 1;
       }
   }
   return 0;
}


function findMergeNode(headA, headB) {
    const aNodes = listToArray(headA)
    let currentNode = headB
    while (aNodes.indexOf(currentNode) === -1) {
        currentNode = currentNode.next
    }
    return currentNode.data
}

function listToArray(head) {
    const array = []
    let currentNode = head
    while (currentNode) {
        array.push(currentNode)
        currentNode = currentNode.next
    }
    return array
}

// [1->2->3->4]
// [5->6->2->3->4]
let firstOne = new SinglyLinkedList(1);
let firstTwo = new SinglyLinkedList(2);
let firstThree = new SinglyLinkedList(3);
let secondOne = new SinglyLinkedList(1);
let secondTwo = new SinglyLinkedList(2);
let secondThree = new SinglyLinkedList(3)
let combiner = new SinglyLinkedList(99);
firstOne.next = firstTwo;
firstTwo.next = firstThree;
firstThree.next = combiner;
secondOne.next = firstTwo;
secondTwo.next = secondThree;
secondThree.next = combiner;
console.log(findMergeNode(firstOne, secondOne));




// let secondOne = new SinglyLinkedList(1);
// let secondTwo = new SinglyLinkedList(2);
// let secondThree = new SinglyLinkedList(97);
// secondOne.next = secondTwo;
// secondTwo.next = secondThree;







module.exports = {
    insertNodeAtTail,
    toArray,
    reverse,
    insertNodeAtHead,
    insertNodeAtPosition,
    deleteNode,
    compareLists,
    combineLinkedList,
    sortLinkedListAscending,
    getNodeValueFromTail,
    hasCycle,
    SinglyLinkedList
};