import java.util.Arrays;

public class excerciseArray {

    static class Array {
        int[] a;

        public Array(int length) {
            a = new int[length];
        }

        public int[] getArray() {
            return a;
        }

        public int getIndexOf(int index) {
            for (int i = 0; i < a.length; i++) {
                if (a[i] == index) {
                    return i;
                }
            }
            return -1;
        }

        public void insert(int value) {
            if (checkIfArrayIsFull() == true) {
                resizeArrayUp();
            }
            for (int i = 0; i < a.length; i++) {
                if (a[i] == 0) {
                    a[i] = value;
                    break;
                }
            }
        }

        public void removeAt(int index) {
            for (int i = 0; i < a.length; i++) {
                if (i == index) {
                    a[i] = 0;
                }
            }
        }

        private boolean checkIfArrayIsFull() {
            for (int i = 0; i < a.length; i++) {
                if (a[i] == 0) {
                    return false;
                }
            }
            return true;
        }

        private void resizeArrayUp() {
            int[] newArray = new int[a.length + 1];
            for (int i = 0; i < getArray().length; i++) {
                newArray[i] = getArray()[i];
            }
            a = newArray;
        }

    }

    public static void main(String[] args) {
        Array testing = new Array(3);
        testing.insert(1);
        testing.insert(2);
        testing.insert(3);
        testing.insert(4);
        testing.insert(5);
        testing.insert(6);
        testing.insert(7);
        testing.insert(8);
        testing.removeAt(7);
        testing.insert(9);
        System.out.println(Arrays.toString(testing.getArray()));
        System.out.println(testing.getIndexOf(9));
    }
}
