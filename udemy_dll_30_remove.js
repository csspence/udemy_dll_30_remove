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
        this.val = val
        this.next = null;      
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
    remove(){
        
    }
}