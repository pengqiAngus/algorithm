/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const newHead = head;
  while (newHead) {
    if (newHead.val == newHead.next.val) {
      newHead.next = newHead.next.next;
    } else {
      newHead = newHead.next;
    }
  }
  return head;
};
