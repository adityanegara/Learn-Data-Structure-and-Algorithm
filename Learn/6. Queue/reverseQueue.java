import java.util.Queue;
import java.util.ArrayDeque;
import java.util.Stack;

public class reverseQueue {
    public static void main(String[] args) {
        Queue<Integer> queue = new ArrayDeque<>();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.add(4);
        queue.add(5);
        reverseQueueSolution(queue);
        System.out.println(queue);
    }

    public static void reverseQueueSolution(Queue<Integer> queue) {
        Stack<Integer> queueStack = new Stack<>();
        while (queue.isEmpty() != true) {
            queueStack.push(queue.remove());
        }
        while (queueStack.isEmpty() != true) {
            queue.add(queueStack.pop());
        }
    }

    static Queue reverseQueue(Queue<Integer> queue) {
        Queue<Integer> reverseQueue = new ArrayDeque<>();
        Integer queueSize = queue.size();
        Integer[] queueInArray = new Integer[queueSize];
        for (int i = 0; i < queueSize; i++) {
            queueInArray[i] = queue.remove();
        }
        for (int i = queueInArray.length - 1; i >= 0; i--) {
            reverseQueue.add(queueInArray[i]);
        }
        return reverseQueue;
    }
}
