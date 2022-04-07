import java.util.Arrays;
import java.util.Stack;

public class balanceExpression {
    public static void main(String[] args) {
        System.out.println(isExpressionBalance(")1+2<"));
    }

    static Boolean isExpressionBalance(String text) {
        Stack<Character> bracketStack = new Stack<>();
        for (int i = 0; i < text.length(); i++) {
            Character currentCharacter = text.charAt(i);
            if (isItOpenBracket(currentCharacter)) {
                bracketStack.push(currentCharacter);
            }
            if (isItCloseBracket(currentCharacter)) {
                if (bracketStack.isEmpty() != true) {
                    Character topBracket = bracketStack.pop();
                    if (checkIsPaired(topBracket, currentCharacter) != true) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
        if (bracketStack.isEmpty() != true) {
            return false;
        } else {
            return true;
        }
    }

    static boolean checkIsPaired(Character opener, Character closer) {
        if (opener == '(' && closer == ')') {
            return true;
        }
        if (opener == '<' && closer == '>') {
            return true;
        }
        if (opener == '{' && closer == '}') {
            return true;
        }
        if (opener == '[' && closer == ']') {
            return true;
        }
        return false;
    }

    static Boolean isItOpenBracket(Character bracket) {
        Character[] openBrackets = { '(', '<', '{', '[' };
        return Arrays.asList(openBrackets).contains(bracket);
    }

    static Boolean isItCloseBracket(Character bracket) {
        Character[] openBrackets = { ')', '>', '}', ']' };
        return Arrays.asList(openBrackets).contains(bracket);
    }
}
