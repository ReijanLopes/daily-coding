class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }
  }
  export class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(value) {
      const newNode = new Node(value);
      if (this.tail) {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = this.tail.next;
      } else {
        this.head = newNode;
        this.tail = this.head;
      }
      this.length++;
    }
    pop() {
      const lastValue = this.tail.value;
      this.tail = this.tail.previous;
      this.length--;
      return lastValue;
    }
    shift() {
      const firstValue = this.head.value;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return firstValue;
    }
    unshift(value) {
      const newNode = new Node(value);
      if (this.head) {
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = this.head.previous;
      } else {
        this.head = newNode;
        this.tail = this.head;
      }
      this.length++;
    }
    delete(value) {
      if (this.length === 1 && this.head.value === value) {
        this.head = null;
        this.tail = null;
        this.length--;
      } else {
        let currentNode = this.head;
        while (currentNode) {
          if (currentNode.value === value) {
            if (currentNode.previous) {
              currentNode.previous.next = currentNode.next;
            } else {
              this.head = null;
            }
            if (currentNode === this.tail) {
              this.tail = this.tail.previous;
            } else {
              currentNode.next.previous = currentNode.previous;
            }
            this.length--;
            break;
          }
          currentNode = currentNode.next;
        }
      }
    }
    count() {
      return this.length;
    }
  }