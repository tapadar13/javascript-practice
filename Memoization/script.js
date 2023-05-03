const initApp = () => {
  const multiplyBy10 = memoizedMultiplyBy10();
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(5));
  console.log(multiplyBy10(5));
};

document.addEventListener("DOMContentLoaded", initApp);

const multiplyBy10 = (num) => {
  return num * 10;
};

const memoizedMultiplyBy10 = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      console.log(cache);
      return cache[num];
    }
    const result = num * 10;
    cache[num] = result;
    return result;
  };
};
