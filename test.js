/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  class MiniHeap {
    constructor() {
      this.heap = [];
    }
    getParentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
      return i * 2 + 1;
    }
    getRightChildIndex(i) {
      return i * 2 + 2;
    }
    down(i) {
      const heap = this.heap;
      const leftIndex = this.getLeftChildIndex(i);
      const rightIndex = this.getRightChildIndex(i);
      let smallLestIndex = i;
      if (
        rightIndex < heap.length &&
        heap[smallLestIndex].val > heap[rightIndex].val
      ) {
        smallLestIndex = rightIndex;
      }
      if (
        leftIndex < heap.length &&
        heap[smallLestIndex].val > heap[leftIndex].val
      ) {
        smallLestIndex = leftIndex;
      }
      if (smallLestIndex !== i) {
        this.swap(smallLestIndex, i);
        this.down(smallLestIndex);
      }
    }
    up(i) {
      const heap = this.heap;
      const parentIndex = this.getParentIndex(i);
      if (parentIndex >= 0 && heap[i].val < heap[parentIndex].val) {
        this.swap(i, parentIndex);
        this.up(parentIndex);
      }
    }
    swap(i, j) {
      const heap = this.heap;
      [heap[i], heap[j]] = [heap[j], heap[i]];
    }
    isEmpty() {
      return this.heap.length === 0;
    }
    extraMini() {
      if (this.heap.length === 0) {
        return null;
      }
      const heap = this.heap;
      const miniVal = heap[0];
      const lastOne = heap.pop();
      if (!this.isEmpty()) {
        heap[0] = lastOne;
        this.down(0);
      }
      return miniVal;
    }
    size() {
      return this.heap.length;
    }
    insert({ val, next }) {
      this.heap.push({ val, next });
      this.up(this.heap.length - 1);
    }
  }
  const heap = new MiniHeap();
  lists.forEach((item) => {
    heap.insert(item);
  });
  const res = new ListNode(0);
  let temp = res;
  while (heap.size()) {
    const node = heap.extraMini();
    temp.next = node;
    temp = temp.next;
    if (node.next) {
      heap.insert(node.next);
    }
  }
  return res.next;
};
