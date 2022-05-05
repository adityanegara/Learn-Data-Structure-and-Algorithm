const singlyLinkedListModule = require('../../src/singlyLinkedList');
const toArray = singlyLinkedListModule.toArray;
const insertNodeAtTail = singlyLinkedListModule.insertNodeAtTail;
const insertNodeAtHead = singlyLinkedListModule.insertNodeAtHead;
const insertNodeAtPosition = singlyLinkedListModule.insertNodeAtPosition;
const deleteNode = singlyLinkedListModule.deleteNode;
const reverse = singlyLinkedListModule.reverse;
const compareLists = singlyLinkedListModule.compareLists;
const combineLinkedList = singlyLinkedListModule.combineLinkedList;
const sortAscendingLinkedList = singlyLinkedListModule.sortLinkedListAscending;
const getNodeValueFromTail = singlyLinkedListModule.getNodeValueFromTail;
const hasCycle = singlyLinkedListModule.hasCycle;
const SinglyLinkedList = singlyLinkedListModule.SinglyLinkedList;


describe('Singly Linked List', () => {
    let one;
    let two;
    let three;
    let four;
    let secondOne;
    let secondTwo;
    let secondThree;
    beforeEach(function() { 
        one = new SinglyLinkedList(1);
        two = new SinglyLinkedList(2);
        three = new SinglyLinkedList(3);
        four =  new SinglyLinkedList(4);
        one.next = two;
        two.next = three;
        three.next = four;
        secondOne = new SinglyLinkedList(1);
        secondTwo = new SinglyLinkedList(1);
        secondThree = new SinglyLinkedList(2);
        secondOne.next = secondTwo;
        secondTwo.next = secondThree;
     });  
    it('Should return an array consist of the single linked list node', () => {
        expect(toArray(one)).toEqual([1,2,3,4]);
    }); 
    it('Should add the node to the tail of the single linked list', () => {
        expect(toArray(insertNodeAtTail(one, 5))).toEqual([1,2,3,4,5]);
        expect(toArray(insertNodeAtTail(one, 6))).toEqual([1,2,3,4,5,6]);

    })
    it('Should add the node to the head of the single linked list', () => {
        let zeroInsertedInHead = insertNodeAtHead(one, 0);
        expect(toArray(zeroInsertedInHead)).toEqual([0,1,2,3,4]);
        let ninetynNineInsertedInHead = insertNodeAtHead(zeroInsertedInHead, 99);
        expect(toArray(ninetynNineInsertedInHead)).toEqual([99,0,1,2,3,4]);
    })
    it('Should add the node in the specific position', () =>{
        let ninetyNineBetweenTwoandThree = insertNodeAtPosition(one, 99,2);
        expect(toArray(ninetyNineBetweenTwoandThree)).toEqual([1,2,99,3,4]);
        let thirtyThreeBetweenThreeAndFour = insertNodeAtPosition(ninetyNineBetweenTwoandThree, 33, 4);
        expect(toArray(thirtyThreeBetweenThreeAndFour)).toEqual([1,2,99,3,33,4]);
    })
    it('Should delete node at specific index', () =>{
        let removeTwo = deleteNode(one, 1);
        expect(toArray(removeTwo)).toEqual([1,3,4]);
        let removeFour = deleteNode(removeTwo, 1);
        expect(toArray(removeFour)).toEqual([1,4]);
    })
    it('Should be able to reverse the linked list', () =>{
        let reversedLinkedList = reverse(one);
        expect(toArray(reversedLinkedList)).toEqual([4,3,2,1]);
        let originalLinkedList = reverse(reversedLinkedList);
        expect(toArray(originalLinkedList)).toEqual([1,2,3,4]);
    })
    it('Should be able to compare if two linked list is equal', () =>{
        let equalLinkedList = compareLists(one, one);
        expect(equalLinkedList).toEqual(1);
        let notEqualLinkedList = compareLists(one, secondOne);
        expect(notEqualLinkedList).toEqual(0);
    })
    it('Should be able to combine two linked list', () =>{
        let combinedLinkedList = combineLinkedList(one, secondOne);
        expect(toArray(combinedLinkedList)).toEqual([1,2,3,4,1,1,2]);
    })
    it('Should be able to sort linked list ascending', () =>{
        let reverseLinkedList = reverse(one);
        let sortedLinkedList = sortAscendingLinkedList(reverseLinkedList);
        expect(toArray(sortedLinkedList)).toEqual([1,2,3,4]);
    });
    it('Should be able to get value from tail', () =>{
        expect(getNodeValueFromTail(one, 0)).toEqual(4);
        expect(getNodeValueFromTail(one, 1)).toEqual(3);
        expect(getNodeValueFromTail(one, 2)).toEqual(2);
        expect(getNodeValueFromTail(one, 3)).toEqual(1);
    })
    it('Should be able to detect a cycle', () =>{
        let cycleOne = new SinglyLinkedList(1);
        let cycleTwo = new SinglyLinkedList(2);
        let cycleThree = new SinglyLinkedList(3);
        cycleOne.next = cycleTwo;
        cycleTwo.next = cycleThree;
        cycleThree.next = cycleOne;
        expect(hasCycle(cycleOne)).toEqual(1);
        cycleThree.next = null;
        expect(hasCycle(cycleOne)).toEqual(0);
        cycleThree.next = cycleTwo;
        expect(hasCycle(cycleOne)).toEqual(1);
    })
    
    afterEach(() => {
        const myReporter = {
          specDone: (result) => {
            if(result.status === 'passed'){
                console.log('\u001b[' + 32 + 'm' + `Spec Name : ${result.fullName}` + '\u001b[0m');
                console.log('\u001b[' + 32 + 'm' + `Spec Result : ${result.status}` + '\u001b[0m')
            }
          }
        };
        jasmine.getEnv().addReporter(myReporter);
    });
})
  