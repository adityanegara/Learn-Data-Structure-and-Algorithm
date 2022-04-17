package Excercise;

import java.util.LinkedList;

public class queueWithLinkedList {
    static class Queue {
        LinkedList<Integer> list = new LinkedList();

        public void enqueue(Integer data) {
            list.addLast(data);
        }

        public Integer dequeue() {
            return list.removeLast();
        }

        public Integer peek() {
            return list.peekLast();
        }

        public Integer size() {
            return list.size();
        }

        public boolean isEmpty() {
            return list.isEmpty();
        }

        public void print() {
            System.out.println(list);
        }
    }

    public static void main(String[] args) {
        Queue test = new Queue();
        test.enqueue(1);
        test.enqueue(2);
        test.enqueue(3);
        test.enqueue(4);
        test.enqueue(5);
        Integer front = test.dequeue();
        Integer frontTwo = test.peek();
        System.out.println(front);
        System.out.println(frontTwo);
        test.print();
    }
}
