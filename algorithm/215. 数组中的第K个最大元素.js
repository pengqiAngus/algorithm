
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
    if (parentIndex >= 0 && heap[index] < heap[parentIndex]) {
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
      heap[rightChildIndex] < heap[smallLestIndex]
    ) {
      smallLestIndex = rightChildIndex;
    }
    if (
      leftChildIndex < heap.length &&
      heap[leftChildIndex] < heap[smallLestIndex]
    ) {
      smallLestIndex = leftChildIndex;
    }
    if (smallLestIndex !== index) {
      this.swap(index, smallLestIndex);
      this.heapDown(smallLestIndex);
    }
  }
  insert(index) {
    this.heap.push(index);
    this.heapUp(this.heap.length - 1);
  }
  extraMin() {
    if (this.heap.length === 0) {
      return null;
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapDown(0);
    return minValue;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const miniHeap = new miniHeap();
 for (let i = 0; i < nums.length; i++) {
   if (miniHeap.heap.length < k) {
     miniHeap.insert(nums[i]);
   } else if (nums[i] > miniHeap.heap[0]) {
     miniHeap.heap[0] = nums[i];
     miniHeap.heapDown(0);
   }
 }
    return miniHeap.heap[0]
};