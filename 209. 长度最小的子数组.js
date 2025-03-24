

var minSubArrayLen = function (target, nums) {
  let maxLen = Infinity;
  let right = 0,
    left = 0;
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      maxLen = Math.min(maxLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return maxLen === Infinity ? 0 : maxLen;
};