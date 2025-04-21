// 定义链表节点类
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reorderList(head) {
  if (!head || !head.next) {
    return head;
  }
  // 找到链表的中间节点
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 反转链表的后半部分
  let secondHalf = slow.next;
  slow.next = null;
  let prev = null;
  while (secondHalf) {
    let nextNode = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = nextNode;
  }
  // 合并两个链表
  let firstHalf = head;
  secondHalf = prev;
  while (secondHalf) {
    let nextFirst = firstHalf.next;
    let nextSecond = secondHalf.next;
    firstHalf.next = secondHalf;
    secondHalf.next = nextFirst;
    firstHalf = nextFirst;
    secondHalf = nextSecond;
  }
  return head;
}

// 辅助函数：将数组转换为链表
function arrayToLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// 辅助函数：将链表转换为数组
function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// 测试示例
const arr = [1, 2, 3, 4];
const head = arrayToLinkedList(arr);
const reorderedHead = reorderList(head);
console.log(linkedListToArray(reorderedHead));
