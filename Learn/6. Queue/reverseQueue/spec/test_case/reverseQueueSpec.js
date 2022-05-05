const reverseQueueModule = require('../../src/reverseQueue');
const Queue = reverseQueueModule.Queue;
const reverseQueue = reverseQueueModule.reverseQueue;

describe('Reverse a queue', () =>{
    let queue;
    beforeEach(()=>{
        queue = new Queue();
    });
    it('Should be able to reverse a queue', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        const reversedQueue = reverseQueue(queue);
        expect(reversedQueue.dequeue()).toEqual(5);
        expect(reversedQueue.dequeue()).toEqual(4);
        expect(reversedQueue.dequeue()).toEqual(3);
        expect(reversedQueue.dequeue()).toEqual(2);
        expect(reversedQueue.dequeue()).toEqual(1);
    });
});