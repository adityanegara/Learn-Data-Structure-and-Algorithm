public class OofNSquare {
    public static void main(String[] args) {
        Integer[] numbers = { 1, 2, 3, };
        callAllNumbersSquare(numbers);
    }

    static void callAllNumbersSquare(Integer[] numbers) {
        for (int number : numbers) {
            for (int numberTwo : numbers) {
                System.out.println(numberTwo);
            }
        }

    }
}
