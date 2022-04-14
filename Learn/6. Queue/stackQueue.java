import java.util.Stack;

public class stackQueue {

    static class queue {
        private Stack<Integer> mainStack = new Stack<>();
        private Stack<Integer> secondStack = new Stack<>();

        public void enqueue(Integer data) {
            moveItemFromStack(mainStack, secondStack);
            mainStack.push(data);
            moveItemFromStack(secondStack, mainStack);
        }

        public boolean isEmpty() {
            return mainStack.isEmpty();
        }

        public Integer dequeue() {
            return mainStack.pop();
        }

        public Integer peek() {
            return mainStack.peek();
        }

        public void print() {
            System.out.println(mainStack);
        }

        private void moveItemFromStack(Stack<Integer> firstStack, Stack<Integer> secondStack) {
            while (firstStack.isEmpty() != true) {
                secondStack.push(firstStack.pop());
            }
        }

    }

    public static void main(String[] args) {
        queue test = new queue();
        test.enqueue(1);
        test.enqueue(2);
        test.enqueue(3);
        Integer frontValue = test.dequeue();
        Integer frontValuePeek = test.peek();
        System.out.println(frontValue);
        System.out.println(frontValuePeek);
        test.print();
    }

}
