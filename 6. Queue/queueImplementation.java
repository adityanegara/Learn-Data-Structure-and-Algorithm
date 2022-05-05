import java.util.ArrayDeque;
import java.util.Queue;

class queueImplementation {
    public static void main(String[] args) {
        Queue<Integer> queue = new ArrayDeque<>();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.add(4);
        queue.add(5);
        Integer frontQueue = queue.remove();
        Integer secondQueue = queue.peek();
        System.out.println(frontQueue);
        System.out.println(secondQueue);
        System.out.println(queue);
    }

}