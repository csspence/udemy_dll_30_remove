/*
JavaScript Algorithms and Data Structures Masterclass
DLL - remove Exercise

Implement the following on a DoublyLinkedList class

remove 

This function should remove a node at a specific index in a DoublyLinkedList.  It should return the removed node.  If the index is invalid return undefined.
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;      
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    remove(index){
      let node;
      let counter;
      if(index > this.length || index < 0) {
        return undefined;
      } else if(index > this.length / 2) {
        node = this.tail;
        counter = this.length - 1;
        while(counter !== index) {
          node = node.prev;
          counter--;
        }
      } else {
        node = this.head;
        counter = 0;
        while(counter !== index) {
            node = node.next;
            counter++;
        }
      }
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
      this.length--;
      return node;
    }
}