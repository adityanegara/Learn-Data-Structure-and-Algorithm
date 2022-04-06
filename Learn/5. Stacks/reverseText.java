import java.util.Stack;

public class reverseText {
    public static void main(String[] args) {
        System.out.println(reverseString("12345"));
    }

    static String reverseString(String text) {
        Stack<Character> textStack = new Stack<>();
        String reversedText = "";
        for (int i = 0; i < text.length(); i++) {
            textStack.push(text.charAt(i));
        }
        while (textStack.isEmpty() != true) {
            reversedText += textStack.pop();
        }
        return reversedText;
    }

}
