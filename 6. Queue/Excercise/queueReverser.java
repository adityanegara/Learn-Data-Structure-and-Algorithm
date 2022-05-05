package Excercise;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Stack;

public class queueReverser {

    public static void main(String[] args) {
        Queue<Integer> queue = new ArrayDeque<>();
        queue.add(10);
        queue.add(20);
        queue.add(30);
        queue.add(40);
        queue.add(50);
        queue = reverser(queue, 3);
        System.out.println(queue);
    }

    static Queue<Integer> reverser(Queue<Integer> queue, Integer k) {
        if (k > queue.size()) {
            throw new IllegalStateException();
        }
        Queue<Integer> reverseQueue = new ArrayDeque<>();
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < k; i++) {
            stack.push(queue.remove());
        }
        while (stack.isEmpty() != true) {
            reverseQueue.add(stack.pop());
        }
        while (queue.isEmpty() != true) {
            reverseQueue.add(queue.remove());
        }
        return reverseQueue;
    }

}
