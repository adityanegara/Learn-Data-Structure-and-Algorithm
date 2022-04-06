import java.util.Stack;

class learnStacks {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println(stack);
        Integer top = stack.pop();
        System.out.println(top);
        System.out.println(stack);
        Integer peekTop = stack.peek();
        System.out.println(peekTop);
        System.out.println(stack.isEmpty());
    }

}