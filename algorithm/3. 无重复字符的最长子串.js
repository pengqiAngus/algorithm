/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = "";
  let maxLenStr = "";
  for (let i = 0; i < s.length; i++) {
    if (!str.includes(s[i])) {
      str += s[i];
    } else {
      const index = str.indexOf(s[i]);
      if (str.length >= maxLenStr.length) {
        maxLenStr = str;
      }
      str = str.slice(index + 1) + s[i];
    }
  }
  if (str.length >= maxLenStr.length) {
    maxLenStr = str;
  }
  return maxLenStr.length;
};
