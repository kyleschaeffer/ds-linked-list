import { LinkedListNode } from './linked-list-node';

/**
 * Linked list data structure
 *  - Unlike a list, deletes are very performant
 *  - Lookup/get is expensive
 */
export class LinkedList<T> {
  /**
   * First item in the linked list (head)
   */
  public head: LinkedListNode<T>;

  /**
   * Last item in the linked list (tail)
   */
  public tail: LinkedListNode<T>;

  /**
   * Size of the linked list (length)
   */
  private length: number;

  /**
   * Instantiate a new linked list
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Add a new value to the end of the linked list
   */
  public push(value: T): void {
    // Create node
    const node: LinkedListNode<T> = new LinkedListNode<T>(value);

    // Add first/subsequent node
    if (!this.head) this.head = node;
    else this.tail.next = node;

    // Update tail
    this.tail = node;

    // Increment length
    this.length++;
  }

  /**
   * Remove the last item from the linked list and return it
   */
  public pop(): T {
    // Pop
    const popped: LinkedListNode<T> = this.tail;

    // Delete last item
    this.delete(this.length - 1);

    return popped.value;
  }

  /**
   * Search for a value in the list; return index if found, null otherwise
   */
  public find(value: T, compare = (a: T, b: T) => a === b): number|null {
    // Traverse the list
    let current: LinkedListNode<T> = this.head;
    for (let i = 0; i < this.length; i++) {
      // Found
      if (compare(value, current.value)) return i;

      // Get next
      current = current.next;
    }

    // Not found
    return null;
  }

  /**
   * Get value of item at given index
   */
  public get(index: number): T {
    return this.getNode(index).value;
  }

  /**
   * Delete an item from the list at given index
   */
  public delete(index: number): void {
    // Out of range
    if (index >= this.length) throw new Error(`Index [${index}] out of range`);

    // Traverse list for item at index
    let previousNode: LinkedListNode<T> = null;
    let currentNode: LinkedListNode<T> = this.head;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    // Get next node
    const nextNode: LinkedListNode<T> = currentNode.next;

    // Delete references to deleted node
    if (previousNode) previousNode.next = nextNode;

    // Update head & tail
    if (!previousNode) this.head = nextNode;
    if (!nextNode) this.tail = previousNode;

    // Decrement length
    this.length--;
  }

  /**
   * Get the current linked list size (length)
   */
  public size(): number {
    return this.length;
  }

  /**
   * Get node at given index
   */
  private getNode(index: number): LinkedListNode<T> {
    // Out of range
    if (index >= this.length) throw new Error(`Index [${index}] out of range`);

    // Traverse list for item at index
    let current: LinkedListNode<T> = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }
}
