/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let child = 0;
  let content = 0;
  let max = 0;
  while (s.length < content && g.length < child) {
    if (s[content] >= g[child]) {
      child++;
      content++;
      max++;
    } else {
      child++;
    }
  }
  return max;
};
