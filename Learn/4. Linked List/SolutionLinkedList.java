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

        private int getTheNthNodeFromTheEnd(int n) {
            if ((n > size()) || (n < 1)) {
                throw new IllegalArgumentException();
            }
            var firstNode = first;
            var secondNode = first;
            for (int i = 0; i < n - 1; i++) {
                secondNode = secondNode.next;
            }
            while (secondNode.next != null) {
                firstNode = firstNode.next;
                secondNode = secondNode.next;
            }
            return firstNode.value;

        }

        public void printMiddleSolution() {
            if (isEmpty()) {
                return;
            }
            var pointerNode = first;
            var lastNode = first;
            while (lastNode.next != null) {
                if (lastNode.next.next == null) {
                    lastNode = null;
                    break;
                }
                lastNode = lastNode.next.next;
                pointerNode = pointerNode.next;
            }
            System.out.println(pointerNode.value);
            if (lastNode == null) {
                System.out.println(pointerNode.next.value);
            }
        }

        public void printMiddle() {
            if (isEmpty()) {
                return;
            }
            int firstIndex = size() / 2;
            int secondIndex = -1;
            if (size() % 2 == 0) {
                secondIndex = firstIndex + 1;
            } else {
                firstIndex += 1;
            }
            var current = first;
            for (int i = 0; i < firstIndex; i++) {
                if (i == firstIndex - 1) {
                    System.out.println(current.value);
                }
                current = current.next;
            }
            if (secondIndex != -1) {
                current = first;
                for (int i = 0; i < secondIndex; i++) {
                    if (i == secondIndex - 1) {
                        System.out.println(current.value);
                    }
                    current = current.next;
                }
            }
        }
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.addLast(40);
        list.addLast(50);
        list.addLast(60);
        list.addLast(70);
        list.addLast(80);
        list.printMiddleSolution();
        // System.out.println(list.getTheNthNodeFromTheEnd(5));
    }
}
