const PriorityQueue = require('../../src/priorityQueue');

describe('Priority Queue', () =>{
    let queue;
    beforeEach(()=>{
        queue = new PriorityQueue();
    });
    it('Should be able to sort a queue based on number', () =>{
        queue.enqueue(5);
        queue.enqueue(3);
        queue.enqueue(6);
        queue.enqueue(1);
        queue.enqueue(4);
        expect(queue.dequeue()).toEqual(6);
        expect(queue.dequeue()).toEqual(5);
        expect(queue.dequeue()).toEqual(4);
        expect(queue.dequeue()).toEqual(3);
        expect(queue.dequeue()).toEqual(1);
    });
    it('Should be able to return true if the queue is empty', () =>{
        expect(queue.isEmpty()).toEqual(true);
    })
    it('Should be able to return false if the queue isnt empty', () =>{
        queue.enqueue(1);
        expect(queue.isEmpty()).toEqual(false);
    })
});