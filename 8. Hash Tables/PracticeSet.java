import java.util.HashSet;
import java.util.Set;

class PracticeSet {
    public static void main(String[] args) {
        Set<Integer> set = new HashSet<>();
        int[] numbers = { 1, 2, 3, 3, 2, 1, 4 };
        for (var number : numbers) {
            set.add(number);
        }
        System.out.println(set);
        set.remove(3);
        System.out.println(set.contains(2));
    }
}