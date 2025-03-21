/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
   this.val = val === undefined ? 0 : val;
   this.next = next === undefined ? null : next;
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let upNumber = false
    const l3 = new ListNode()
    let l4 = l3;
    while (l1 || l2 || upNumber) {
        let number = 0;
        if (l1) number += l1.val;
        if (l2) number += l2.val;
        if (upNumber) number+=1;
        if (number>=10) {
            number = number % 10
            upNumber=true
        } else {
            upNumber =false
        }
        l1 = l1?.next;
        l2 = l2?.next;
        l4.next = {
          val: number,
          next:  null,
        };
        l4 = l4.next;
    }
    return l3.next
};
