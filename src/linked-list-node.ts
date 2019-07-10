/**
 * Single node within a linked list
 */
export class LinkedListNode<T> {
  /**
   * The value for this node
   */
  public value: T;

  /**
   * The next node in the linked list
   */
  public next: LinkedListNode<T>;

  /**
   * Instantiate a new linked list node
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
