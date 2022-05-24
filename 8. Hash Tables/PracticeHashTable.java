import java.util.HashMap;
import java.util.Map;

class PracticeHashTable {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Aditya Negara");
        map.put(2, "Aura Puteri Negeri");
        map.put(3, "Ayesha Puteri Nagari");
        map.put(4, "test");
        map.put(null, null);
        var value = map.get(3);
        var isThereValueWithKey3 = map.containsKey(3);
        var isThereKeyWithValueTest = map.containsValue("test");
        // System.out.println(isThereKeyWithValueTest);
        // System.out.println(isThereValueWithKey3);
        // System.out.println(value);
        // System.out.println(map);
        for (var item : map.keySet()) {
            System.out.println(map.get(item));
        }
    }
}