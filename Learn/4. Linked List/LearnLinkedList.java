import java.util.LinkedList;

class LearnLinkedList {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addFirst(5);
        System.out.println(list);
        System.out.println(list.contains(1));
        System.out.println(list.indexOf(2));
        System.out.println(list.size());
    }
}