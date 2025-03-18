function subsets(nums) {
  const result = [];
  const subset = [];
    const bk = (start) => {
        if (start===nums.length) {
            result.push([...nums])
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[i],nums[start]] = [nums[start],nums[i]]
            bk(start + 1);
           [nums[start], nums[i]]=[(nums[i], nums[start])]; 
        }
    }
    bk(0)
    return result;
}

// 测试
const nums = [1, 2, 3];
console.log(subsets(nums));
