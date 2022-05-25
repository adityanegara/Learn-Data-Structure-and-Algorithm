import java.util.HashSet;
import java.util.Set;

class FirstRepeatedCharacterSolution {
    public static void main(String[] args) {
        System.out.println(findFirstRepeatedChar("a green apple"));
    }

    static char findFirstRepeatedChar(String str) {
        Set<Character> set = new HashSet<>();
        for (var ch : str.toCharArray()) {
            if (set.contains(ch)) {
                return ch;
            }
            set.add(ch);
        }
        return Character.MIN_VALUE;
    }
}
