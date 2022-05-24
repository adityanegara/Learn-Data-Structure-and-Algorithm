import java.util.Map;
import java.util.TreeMap;

public class FindTheFirstNonRepeatedCharacter {
    public static void main(String[] args) {
        System.out.println(findRepeated("ABCDEFGHIJKLMNOPQRSTUVWXYZA"));
    }

    static String findRepeated(String text) {
        Map<String, Integer> map = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) != ' ') {
                if (map.containsKey(String.valueOf(text.charAt(i)))) {
                    return String.valueOf(text.charAt(i)).toLowerCase();
                } else {
                    map.put(String.valueOf(text.charAt(i)), 0);
                }
            }
        }
        return "None";
    }
}
