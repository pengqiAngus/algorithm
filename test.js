/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let l3 = new ListNode();
  let l4 = l3;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      l4.next = {
        val: list1.val,
        next: null,
      };
      list1 = list1.next;
    } else {
      l4.next = {
        val: list2.val,
        next: null,
      };
      list2 = list2.next;
    }
    l4 = l4.next;
  }
  if (list1) {
    l4.next = list1;
  }
  if (list2) {
    l4.next = list2;
  }
  return l3.next;
};
