/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const paris = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const leftPari = Object.keys(paris);
  if (!leftPari.includes(s[0])) {
    return false;
  }
  const leftArray = [];
  for (let i = 0; i < s.length; i++) {
    if (leftPari.includes(s[i])) {
      leftArray.push(s[i]);
    }
    if (!leftPari.includes(s[i])) {
      if (s[i] !== paris[leftArray.pop()]) {
        return false;
      }
    }
  }
  return leftArray.length === 0;
};
