import java.util.Arrays;

public class arrayQueueSolution {
    static class ArrayQueue {
        private int[] items;
        private int rear;
        private int count;
        private int front;

        public ArrayQueue(int capacity) {
            items = new int[capacity];
        }

        public void enqueue(int item) {
            if (count == items.length) {
                throw new IllegalStateException();
            }
            items[rear] = item;
            rear = (rear + 1) % items.length;
            count++;
        }

        public int dequeue() {
            var item = items[front];
            items[front++] = 0;
            front = (front + 1) % items.length;
            return item;
        }

        @Override
        public String toString() {
            return Arrays.toString(items);
        }
    }

    public static void main(String[] args) {
        ArrayQueue queue = new ArrayQueue(5);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.dequeue();
        queue.enqueue(6);
        // queue.enqueue(6);
        // var front = queue.dequeue();
        // System.out.println(front);
        System.out.println(queue.toString());
    }
}
