const Queue = require('../../src/stackQueue');
describe('Queue From Array', () =>{
    let queue;
    beforeEach(()=>{
        queue = new Queue();
    });
    it('Should fail if dequeue an empty queue', () =>{
        expect(()=> queue.dequeue()).toThrowError('Queue is empty');
    })
    it('Should fail if peek an empty queue', () =>{
        expect(()=> queue.peek()).toThrowError('Queue is empty');
    })
    it('Should able to dequeue a data', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(1);
    })
    it('Should able to peek a data', () =>{
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.peek()).toEqual(1);
        expect(queue.dequeue()).toEqual(1);
    })
});