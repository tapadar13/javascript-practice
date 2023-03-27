const button = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_press");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

const myDebounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const debouncedCount = myDebounce(() => {
  triggeredCount++;
  count.innerHTML = triggeredCount;
}, 1000);

button.addEventListener("click", () => {
  btnPress.innerHTML = pressedCount++;
});

debouncedCount();
