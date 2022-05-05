const arrayQueueModule = require('../../src/arrayQueue');
const Queue = arrayQueueModule.Queue;

describe('Queue From Array', () =>{
    let queue;
    beforeEach(()=>{
        queue = new Queue(5);
    });
    it('Should return null when dequeueing a empty queue', () =>{
        expect(queue.dequeue()).toEqual(null);
    })

    it('Should be able to enqueue a data', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        let frontValue = queue.dequeue();
        expect(frontValue).toEqual(1);
    })
    it('Should fail if queue is full', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(()=> queue.enqueue(6)).toThrowError('Queue is Full');
    })
    it('Should be able to dequeue a data', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.dequeue()).toEqual(3);
        expect(queue.dequeue()).toEqual(4);
        expect(queue.dequeue()).toEqual(5);
    })
    it('Should be able to dequeue a data and enqueue ', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        queue.enqueue(6);
        expect(queue.dequeue()).toEqual(6);
    })
    it('Should be able to peek queue', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.peek()).toEqual(1);
        expect(queue.dequeue()).toEqual(1);
    });
    it('Should be able to return true if its empty', () =>{
        expect(queue.isEmpty()).toEqual(true);
    })
    it('Should be able to return false if its not empty', () =>{
        queue.enqueue(1);
        expect(queue.isEmpty()).toEqual(false);
    })
    it('Should be able to return true if its full', () =>{
        expect(queue.isFull()).toEqual(false);
    })
    it('Should be able to return false if its not full', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.isFull()).toEqual(true);
    })
});