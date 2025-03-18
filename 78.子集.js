function subsets(nums) {
  const result = [];
  const subset = [];
  const bk = (start) => {
    result.push([...subset]);
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      bk(i + 1);
      subset.pop();
    }
  };
  bk(0);
  return result;
}

// 测试
const nums = [1, 2, 3];
console.log(subsets(nums));
