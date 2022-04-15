import java.util.PriorityQueue;

public class priorityQueue {
    public static void main(String[] args) {
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        queue.add(5);
        queue.add(4);
        queue.add(1);
        queue.add(3);
        queue.add(2);
        while (queue.isEmpty() != true) {
            System.out.println(queue.remove());
        }

    }
}
