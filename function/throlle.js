function throttleByTimestamp(func, delay) {
  let lastTime = 0;

  return function (...args) {
    const currentTime = Date.now();
    if (currentTime - lastTime >= delay) {
      func.apply(this, args);
      lastTime = currentTime;
    }
  };
}

// 示例用法：
function handleScroll() {
  console.log("Scrolling...");
  // 在这里执行滚动相关的处理
}

const throttledScrollHandler = throttleByTimestamp(handleScroll, 200); // 每 200 毫秒最多执行一次

window.addEventListener("scroll", throttledScrollHandler);
