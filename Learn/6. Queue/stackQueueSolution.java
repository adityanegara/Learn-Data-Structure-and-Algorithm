import java.util.Stack;

public class stackQueueSolution {

    static class Queue {
        private Stack<Integer> mainStack = new Stack<>();
        private Stack<Integer> secondStack = new Stack<>();

        public void enqueue(Integer data) {
            mainStack.push(data);
        }

        public Integer dequeue() {
            if (isEmpty()) {
                throw new IllegalStateException();
            }
            moveStack(mainStack, secondStack);
            return secondStack.pop();
        }

        public Integer peek() {
            if (isEmpty()) {
                throw new IllegalStateException();
            }
            moveStack(mainStack, secondStack);
            return secondStack.peek();
        }

        private void moveStack(Stack<Integer> firstStack, Stack<Integer> secondStack) {
            if (secondStack.isEmpty()) {
                while (firstStack.isEmpty() != true) {
                    secondStack.push(firstStack.pop());
                }
            }
        }

        public boolean isEmpty() {
            return (mainStack.isEmpty() && secondStack.isEmpty());
        }
    }

    public static void main(String[] args) {
        Queue test = new Queue();
        test.enqueue(1);
        test.enqueue(2);
        test.enqueue(3);
        test.enqueue(4);
        var first = test.dequeue();
        System.out.println(first);
    }
}
