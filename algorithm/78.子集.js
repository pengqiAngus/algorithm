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
function subsets2(nums) {
  const n = nums.length;
  const result = [];
  for (let i = 0; i < 1 << n; i++) {
    const subsets = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subsets.push(nums[j]);
      }
    }
    result.push(subsets);
  }
  return result;
}
// 测试
const nums = [1, 2, 3];
console.log(subsets(nums));
