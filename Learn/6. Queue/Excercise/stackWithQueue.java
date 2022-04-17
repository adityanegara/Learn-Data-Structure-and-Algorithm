package Excercise;

import java.util.ArrayDeque;
import java.util.Queue;

public class stackWithQueue {
    static class Stack {
        Queue<Integer> mainQueue = new ArrayDeque<>();
        Queue<Integer> secondQueue = new ArrayDeque<>();

        public void push(Integer item) {
            moveItemFromQueue(mainQueue, secondQueue);
            mainQueue.add(item);
            moveItemFromQueue(secondQueue, mainQueue);
        }

        private void moveItemFromQueue(Queue<Integer> mainQueue, Queue<Integer> secondQueue) {
            while (mainQueue.isEmpty() != true) {
                secondQueue.add(mainQueue.remove());
            }
        }

        public Integer pop() {
            return mainQueue.remove();
        }

        public Integer peek() {
            return mainQueue.peek();
        }

        public Integer size() {
            return mainQueue.size();
        }

        public boolean isEmpty() {
            return mainQueue.isEmpty();
        }

        public void print() {
            System.out.println(mainQueue);
        }

    }

    public static void main(String[] args) {
        Stack test = new Stack();
        test.push(1);
        test.push(2);
        test.push(3);
        test.push(4);
        test.push(5);
        Integer upperStack = test.pop();
        Integer secondUpperStack = test.peek();
        System.out.println(upperStack);
        System.out.println(secondUpperStack);
        System.out.println(test.isEmpty());
        System.out.println(test.size());
        test.print();
    }
}
