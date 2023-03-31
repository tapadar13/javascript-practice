const button = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_press");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

const myThrottle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;

    last = now;
    return fn(...args);
  };
};

const throttledCount = myThrottle(() => {
  triggeredCount += 1;
  count.innerHTML = triggeredCount;
}, 1000);

button.addEventListener("click", () => {
  btnPress.innerHTML = pressedCount++;
  throttledCount();
});
