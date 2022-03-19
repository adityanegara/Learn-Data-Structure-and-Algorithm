public class OofN {
    public static void main(String[] args) {
        Integer[] numbers = { 1, 2, 3, 4, 5 };
        String[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
        callAllNumbers(numbers);
        callAllNumbersAndStrings(numbers, cars);
    }

    static void callAllNumbers(Integer[] numbers) {
        for (int number : numbers)
            System.out.println(number);
    }

    static void callAllNumbersAndStrings(Integer[] numbers, String[] names) {
        for (int number : numbers)
            System.out.println(number);

        for (String name : names)
            System.out.println(name);
    }
}
