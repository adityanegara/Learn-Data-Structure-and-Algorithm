import java.util.HashMap;
import java.util.Map;

public class FindTHeFirstNonRepeatedCharacterSolution {
    public static void main(String[] args) {
        System.out.println(findNonRepated("ab"));
    }

    static char findNonRepated(String text) {
        Map<Character, Integer> map = new HashMap<>();
        var textToChar = text.toCharArray();
        for (var ch : textToChar) {
            var count = map.containsKey(ch) ? map.get(ch) : 0;
            map.put(ch, count + 1);
        }
        for (var ch : textToChar) {
            if (map.get(ch) == 1) {
                return ch;
            }
        }
        return Character.MIN_VALUE;
    }
}
