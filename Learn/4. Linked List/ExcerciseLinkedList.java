public class ExcerciseLinkedList {
    static class Node {
        private Integer value;
        private Node next;

        public void setValue(Integer value) {
            this.value = value;
        }

        public void setNextNode(Node nextNode) {
            this.next = nextNode;
        }

        public Integer getValue() {
            return this.value;
        }

        public Node getNextNode() {
            return this.next;
        }
    }

    static class LinkedList {
        private Node first;
        private Node last;

        public void addFirst(int value) {
            Node newNode = new Node();
            newNode.setValue(value);
            newNode.setNextNode(first);
            this.first = newNode;
            if (this.last == null) {
                this.last = newNode;
            }
        }

        public void addLast(Integer value) {
            Node newNode = new Node();
            newNode.setValue(value);
            if (this.last != null) {
                this.last.setNextNode(newNode);
            }
            this.last = newNode;
            if (this.first == null) {
                this.first = newNode;
            }
        }

        public void deleteFirst() {
            this.first = this.first.getNextNode();
        }

        public void deleteLast() {
            Node currentNode = this.first;
            Node nodeBeforeLast = new Node();
            while (currentNode.getNextNode() != null) {
                if (currentNode.getNextNode().getNextNode() == null) {
                    nodeBeforeLast = currentNode;
                }
                currentNode = currentNode.getNextNode();
            }
            nodeBeforeLast.setNextNode(null);
            this.last = nodeBeforeLast;
        }

        public Boolean contains(int searchValue) {
            Node currentNode = this.first;
            while (currentNode.getNextNode() != null) {
                if (currentNode.getValue() == searchValue) {
                    return true;
                }
                currentNode = currentNode.getNextNode();
                if (currentNode.getValue() == searchValue) {
                    return true;
                }
            }
            return false;
        }

        public Integer indexOf(Integer searchValue) {
            Node currentNode = this.first;
            if (currentNode != null) {
                Integer count = 0;
                if (currentNode.getValue() == searchValue) {
                    return count;
                }
                while (currentNode.getNextNode() != null) {
                    if (currentNode.getValue() == searchValue) {
                        return count;
                    }
                    count = count + 1;
                    currentNode = currentNode.getNextNode();
                }
            }

            return -1;
        }

        public void print() {

            Node printNode = this.first;
            if (printNode != null) {
                while (printNode.getNextNode() != null) {
                    System.out.println(printNode.getValue());
                    printNode = printNode.getNextNode();
                }
                System.out.println(printNode.getValue());
            }
        }
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(100);
        System.out.println(list.indexOf(-5));
        // list.deleteFirst();
        // list.print();
    }
}
