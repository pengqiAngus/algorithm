/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) set2.add(nums2[i]);
  }
  return Array.from(set2);
};
