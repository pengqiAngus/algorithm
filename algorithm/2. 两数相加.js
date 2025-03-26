/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let upNumber = false;
  const l3 = new ListNode();
  let l4 = l3;
  while (l1 || l2 || upNumber) {
    let value = (l1?.val || 0) + (l2?.val || 0);
    let l3Value = 0;
    if (upNumber) {
      value += 1;
    }
    if (value >= 10) {
      l3Value += value % 10;
      upNumber = true;
    } else {
      l3Value += value;
      upNumber = false;
    }
    l1 = l1?.next;
    l2 = l2?.next;
    l4.next = {
      val: l3Value,
      next: l1 || l2 ? new ListNode() : null,
    };

    l4 = l4.next;
  }
  return l3.next;
};
