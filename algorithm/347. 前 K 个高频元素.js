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
    if (parentIndex >= 0 && heap[index].times < heap[parentIndex].times) {
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
      heap[rightChildIndex].times < heap[smallLestIndex].times
    ) {
      smallLestIndex = rightChildIndex;
    }
    if (
      leftChildIndex < heap.length &&
      heap[leftChildIndex].times < heap[smallLestIndex].times
    ) {
      smallLestIndex = leftChildIndex;
    }
    if (smallLestIndex !== index) {
      this.swap(index, smallLestIndex);
      this.heapDown(smallLestIndex);
    }
  }
  insert({ times, key }) {
    this.heap.push({ times, key });
    this.heapUp(this.heap.length - 1);
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  extraMin() {
    if (this.heap.length === 0) {
      return null;
    }
    const minValue = this.heap[0];
    const lastElement = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.heapDown(0);
    }
    return minValue;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var topKFrequent = function (nums, k) {
  const miniHeap = new MiniHeap();
  const visited = new Map();
  for (let i = 0; i < nums.length; i++) {
    visited.set(nums[i], visited.get(nums[i] || 0) + 1);
  }
  visited.forEach((times, key) => {
    miniHeap.insert({ times, key });
    if (miniHeap.size() > k) {
      miniHeap.extraMin();
    }
  });
  const array = [];
  while (!miniHeap.isEmpty()) {
    array.unshift(miniHeap.extraMin().key);
  }
  return array;
};
