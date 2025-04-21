var combinationSum = function (candidates, target) {
  const result = [];
  const path = [];
  const backtracking = (candidates, target, startIndex) => {
    if (target === 0) {
      result.push([...path]);
      return;
    }
    if (target < 0) {
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtracking(candidates, target - candidates[i], i);
      path.pop();
    }
  };
  backtracking(candidates, target, 0);
  return result;
};
