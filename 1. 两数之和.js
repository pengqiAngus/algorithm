/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let rest = 0;
  const numsSet = new Map();
  for (let i = 0; i < nums.length; i++) {
    rest = target - nums[i];
    if (numsSet.has(rest)) {
      return [i, numsSet.get(rest)];
    }
    numsSet.set(nums[i], i);
  }
};
