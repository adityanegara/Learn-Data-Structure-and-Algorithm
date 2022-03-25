import java.util.Arrays;
import java.util.NoSuchElementException;

public class SolutionLinkedList {

    static class LinkedList {
        private class Node {
            private Integer value;
            private Node next;

            public Node(int value) {
                this.value = value;
            }
        }

        private Node first;
        private Node last;

        public void addLast(int item) {
            var node = new Node(item);
            if (isEmpty()) {
                first = last = node;
            } else {
                last.next = node;
                this.last = node;
            }
        }

        public void addFirst(int item) {
            var node = new Node(item);
            if (isEmpty()) {
                first = last = node;
            } else {
                node.next = first;
                this.first = node;
            }
        }

        public void removeFirst() {
            if (isEmpty()) {
                throw new NoSuchElementException();
            }
            if (first == last) {
                first = last = null;
                return;
            }
            var second = first.next;
            first.next = null;
            first = second;
        }

        public void removeLast() {
            if (isEmpty()) {
                throw new NoSuchElementException();
            }
            if (first == last) {
                first = last = null;
                return;
            }
            var previous = getPrevious(last);
            last = previous;
            last.next = null;
        }

        private Node getPrevious(Node node) {
            var current = first;
            while (current != null) {
                if (current.next == node) {
                    return current;
                }
                current = current.next;
            }
            return null;
        }

        public int indexOf(int item) {
            int index = 0;
            var current = first;
            while (current != null) {
                if (current.value == item)
                    return index;
                current = current.next;
                index++;
            }
            return -1;
        }

        public int size() {
            int count = 0;
            var current = first;
            while (current != null) {
                current = current.next;
                count++;
            }
            return count;
        }

        public int[] toArray() {
            int[] listArray = new int[size()];
            var current = first;
            for (int i = 0; i < listArray.length; i++) {
                listArray[i] = current.value;
                current = current.next;
            }
            return listArray;
        }

        public boolean contains(int item) {
            return indexOf(item) != -1;
        }

        public void reverse() {
            int[] listArray = toArray();
            removeAll(listArray.length);
            addFirstArrray(listArray);
        }

        public void reverseSolution() {
            if (isEmpty())
                return;
            var previousNode = first;
            var currentNode = first.next;
            while (currentNode != null) {
                var nextNode = currentNode.next;
                currentNode.next = previousNode;
                previousNode = currentNode;
                currentNode = nextNode;
            }
            last = first;
            last.next = null;
            first = previousNode;
        }

        private void removeAll(int linkedListSize) {
            for (int i = 0; i < linkedListSize; i++) {
                removeLast();
            }
        }

        private void addFirstArrray(int[] array) {
            for (int i = 0; i < array.length; i++) {
                addFirst(array[i]);
            }
        }

        public void print() {
            var current = first;
            while (current != null) {
                System.out.println(current.value);
                current = current.next;
            }
        }

        private boolean isEmpty() {
            return first == null;
        }
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.reverseSolution();
        System.out.println(Arrays.toString(list.toArray()));

    }
}
