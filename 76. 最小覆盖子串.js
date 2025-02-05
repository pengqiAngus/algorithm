/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const map = {}
    for (const i of t) {
        map[i] = map[i] ? map[i] + 1 : 1;
    }
    let left = 0, right = 0;
    let minStart = 0, minLen = Infinity;
    let count = Object.keys.length
    while (right < s.length) {
        const char = s[right];
        if (map[char] !== undefined) {
          map[char]--;
          if (map[char] === 0) {
            count--;
          }
        }
        right++;
        while (count===0) {
            if (right-left < minLen) {
                minLen = right - left
                minStart =left
            }
            const char = s[left]
            if (map[char] !==undefined) {
                map[char]++;
                if (map[char]>0) {
                    count ++
                }
            }
            left++;
        }
    }
    return minLen === Infinity ? "" : s.substring(minStart, minStart+minLen);
};
