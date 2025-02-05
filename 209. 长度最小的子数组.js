

   var minSubArrayLen = function (target, nums) {
     const n = nums.length;
     let maxNum = Infinity;
     let sum = 0; 
     let left = 0; 
     for (let right = 0; right < n; right++) {
       sum += nums[right];
       while (sum >= target) {
         maxNum = Math.min(maxNum, right - left + 1);
         sum -= nums[left++]; 
       }
     }
     return maxNum <= n ? maxNum : 0;
   };