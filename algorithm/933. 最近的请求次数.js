var RecentCounter = function () {
  this.pings = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pings.push(t);
  const pings = this.pings;
  for (let i = 0; i < pings.length; i++) {
    if (pings[i] < t - 3000) {
      pings.splice(i, 1);
    }
  }
  return pings.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
