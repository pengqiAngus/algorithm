var RecentCounter = function () {
  this.pings = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

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
var reverseList = function (head) {};

var minSubArrayLen = function (target, nums) {
    let maxLen = Infinity;
    let right = 0, left = 0;
    let sum = 0;
   while (right<nums.length) {
       sum += nums[right]
       while (sum>=target) {
           maxLen = Math.min(maxLen, right - left + 1);
           sum -= nums[left];
           left++;
       }
       right++;
   }
    return maxLen === Infinity ? 0 : maxLen;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const set3 = new Set()
    for (const key in set1) {
        if (set2.has(key)) {
            set3.add(key)
        }
    }
    return Array.from(set3)
};
