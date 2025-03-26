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
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
      return index * 2 + 1;
    }
    getRightChildIndex(index) {
      return index * 2 + 2;
    }
    swap(i, j) {
      const heap = this.heap;
      [heap[i], heap[j]] = [heap[j], heap[i]];
    }
    heapUp(index) {
      const parentIndex = this.getParentIndex(index);
      const heap = this.heap;
      if (parentIndex >= 0 && heap[index].val < heap[parentIndex].val) {
        this.swap(index, parentIndex);
        this.heapUp(parentIndex);
      }
    }
    heapDown(index) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      const heap = this.heap;
      let smallLestIndex = index;

      if (
        rightChildIndex < heap.length &&
        heap[rightChildIndex].val < heap[smallLestIndex].val
      ) {
        smallLestIndex = rightChildIndex;
      }
      if (
        leftChildIndex < heap.length &&
        heap[leftChildIndex].val < heap[smallLestIndex].val
      ) {
        smallLestIndex = leftChildIndex;
      }
      if (smallLestIndex !== index) {
        this.swap(index, smallLestIndex);
        this.heapDown(smallLestIndex);
      }
    }
    insert({ val, next }) {
      this.heap.push({ val, next });
      this.heapUp(this.heap.length - 1);
    }
    isEmpty() {
      return this.heap.length === 0;
    }
    size() {
      return this.heap.length;
    }
    extraMin() {
      if (this.heap.length === 0) {
        return null;
      }
      const minValue = this.heap[0];
      const lasestElemnt = this.heap.pop();
      if (!this.isEmpty()) {
        this.heap[0] = lasestElemnt;
        this.heapDown(0);
      }
      return minValue;
    }
  }
  const miniHeap = new MiniHeap();
  lists.forEach((item) => {
    if (item) {
      miniHeap.insert(item);
    }
  });
  let res = new ListNode(0);
  let p = res;
  while (miniHeap.size()) {
    const node = miniHeap.extraMin();
    p.next = node;
    p = p.next;
    if (node.next) {
      miniHeap.insert(node.next);
    }
  }
  return res.next;
};
