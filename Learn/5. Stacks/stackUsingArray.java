import java.util.Arrays;
import java.util.EmptyStackException;

public class stackUsingArray {

    static class Stack {
        private Integer[] stackArray;
        private Integer stackSize;
        private Integer index = 0;

        public Stack(Integer size) {
            stackArray = new Integer[size];
            stackSize = size;
        }

        private boolean isStackFull(Integer stackSize, Integer index) {

            if (index == stackSize) {
                return true;
            }
            return false;
        }

        public void push(Integer value) {
            if (isStackFull(stackSize, index) == true) {
                throw new StackOverflowError("Stack is full");
            }
            stackArray[index] = value;
            index += 1;

        }

        public Integer pop() {
            if (isEmpty()) {
                throw new EmptyStackException();
            }
            Integer returnValue = stackArray[index - 1];
            stackArray[index - 1] = null;
            index -= 1;
            return returnValue;
        }

        public Integer peek() {
            if (isEmpty()) {
                throw new EmptyStackException();
            }
            return stackArray[index - 1];
        }

        public boolean isEmpty() {
            if (index == 0) {
                return true;
            }
            return false;
        }

        public Integer[] getStack() {
            return stackArray;
        }
    }

    public static void main(String[] args) {
        Stack test = new Stack(5);
        test.push(5);
        test.push(4);
        test.push(3);
        test.push(2);
        test.push(1);
        System.out.println(test.pop());
        System.out.println(test.peek());
        System.out.println(Arrays.toString(test.getStack()));
    }
}
