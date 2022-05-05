import java.util.Arrays;

public class createPriorityQueue {
    static class PriorityQueue {
        Integer[] queue;
        Integer index = -1;

        public PriorityQueue(Integer size) {
            queue = new Integer[size];
            index = -1;
        }

        public Integer dequeue() {
            var front = queue[index];
            queue[index] = null;
            index -= 1;
            return front;
        }

        public Integer peek() {
            return queue[index];
        }

        public void enqueue(Integer data, boolean isDebug) {
            if (isFull()) {
                System.out.println("is full");
                throw new ArrayIndexOutOfBoundsException();
            }
            for (int i = queue.length - 1; i >= 0; i--) {
                if ((i == 0) && (queue[i] == null)) {
                    if (isDebug) {
                        System.out.println("I == 0 and queue[i] == null" + queue[i]);
                    }
                    queue[i] = data;
                    break;
                }
                if ((queue[i] == null)) {
                    if (isDebug) {
                        System.out.println("queue[i] == null" + queue[i]);
                    }
                    continue;
                }
                if (queue[i] > data) {
                    if (isDebug) {
                        System.out.println("queue[i] > data" + queue[i]);
                    }
                    if (i == 0) {
                        System.out.println("here" + queue[i]);
                        queue[i + 1] = queue[i];
                        queue[i] = data;
                        break;
                    } else {
                        queue[i + 1] = queue[i];
                    }

                }
                if (queue[i] < data) {
                    if (isDebug) {
                        System.out.println("queue[i] < data" + queue[i]);
                    }
                    queue[i + 1] = data;
                    break;
                }
                if (queue[i] == data) {
                    System.out.println("queue[i] = " + queue[i]);
                    System.out.println("[i] = " + i);
                    queue[i + 1] = data;
                    break;

                }

            }
            index++;
        }

        public void print() {
            System.out.println(Arrays.toString(queue));
        }

        public Integer dequeue(Integer data) {
            return 1;
        }

        public Integer peek(Integer data) {
            return 1;
        }

        public boolean isFull() {
            // print();
            return (queue[queue.length - 1] != null);
        }

        public boolean isEmpty() {
            return true;
        }
    }

    public static void main(String[] args) {
        PriorityQueue test = new PriorityQueue(5);
        test.enqueue(1, false);
        test.enqueue(3, false);
        test.enqueue(5, false);
        test.enqueue(7, false);
        test.enqueue(1, false);
        var front = test.dequeue();
        var frontTwo = test.peek();
        System.out.println(front);
        System.out.println(frontTwo);
        test.print();
    }
}
