import java.util.HashSet;
import java.util.Set;

public class FirstRepeatedCharacter {
    public static void main(String[] args) {
        System.out.println(findRepeated("abccbba"));
    }

    static Character findRepeated(String text) {
        Set<Character> set = new HashSet<>();
        char[] chars = text.toCharArray();
        for (char ch : chars) {
            if (ch != ' ') {
                if (set.contains(ch)) {
                    return ch;
                } else {
                    set.add(ch);
                }

            }
        }
        return ' ';
    }
}
