function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: capacity + 1 }).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = capacity; j >= weights[i]; j--) {
      const restCapacity = j - weights[i];
      dp[j] = Math.max(dp[j], dp[restCapacity] + values[i]);
    }
  }
  return dp[capacity];
}

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;

console.log(knapsack(weights, values, capacity)); // 输出 7
