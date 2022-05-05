import java.util.Arrays;

public class arrayQueue {

    static class Queue {
        private Integer[] queueArray;
        private Integer front;
        private Integer rear;
        private Integer index;

        public Queue(Integer size) {
            queueArray = new Integer[size];
            front = -1;
            rear = -1;
            index = 0;
        }

        public void printQueue() {
            if (isEmpty() != true) {
                Integer[] printArray = Arrays.copyOfRange(queueArray, front, rear + 1);
                System.out.println(Arrays.toString(printArray));
            } else {
                System.out.println("Array is empty");
            }

        }

        public void enqueue(Integer data) {
            if (isFull()) {
                throw new ArrayIndexOutOfBoundsException();
            }
            queueArray[index] = data;
            index += 1;
            if (isEmpty()) {
                front = 0;
                rear = 0;
            } else {
                rear += 1;
            }
        }

        public Integer dequeue() {
            if (isEmpty()) {
                return null;
            }
            Integer frontValue = queueArray[front];
            front += 1;
            return frontValue;
        }

        public Integer peek() {
            if (isEmpty()) {
                return null;
            }
            return queueArray[front];
        }

        public Integer[] getQueue() {
            return queueArray;
        }

        public boolean isEmpty() {
            if (front == -1 && rear == -1) {
                return true;
            }
            return false;
        }

        public boolean isFull() {
            if (rear == queueArray.length - 1) {
                return true;
            }
            return false;
        }
    }

    public static void main(String[] args) {
        Queue test = new Queue(5);
        test.enqueue(1);
        test.enqueue(2);
        test.enqueue(3);
        test.enqueue(4);
        test.enqueue(5);
        System.out.println(test.dequeue());
        System.out.println(test.peek());
        test.printQueue();
    }
}
