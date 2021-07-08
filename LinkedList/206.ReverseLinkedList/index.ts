/**
 * 206. Reverse Linked List
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode  {
  next: ListNode | null
  val: number
}

function reverseList(head: ListNode | null): ListNode | null {
  let behind = null
  while (head) {
    let next = head.next
    head.next = behind
    behind = head
    head = next
  }
  return behind
}
