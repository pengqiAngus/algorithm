function permute(nums) {
  const result = [];
  const brk = (start) => {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      brk(start + 1);
      [nums[i], nums[start]] = [nums[start], nums[i]];
    }
  };
  brk(0);
  return result;
}

// 测试
const nums = [1, 2, 3];
console.log(permute(nums));
