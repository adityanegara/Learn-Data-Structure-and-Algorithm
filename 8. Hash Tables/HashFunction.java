import java.util.HashMap;
import java.util.Map;

class HashFunction {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(hashInteger(123456), "adit");
        map.put(hashString("123456-A"), "aura");
        String s = "de";
        System.out.println(s.hashCode());
        System.out.println(map);
    }

    public static int hashInteger(int number) {
        return number % 100;
    }

    public static int hashString(String text) {
        var number = 0;
        for (var ch : text.toCharArray()) {
            number += ch;
        }
        return number % 100;
    }
}