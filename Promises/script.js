//Synchronous operation

// const count = true;

// const valueCount = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is a count value");
//   } else {
//     reject("There is no count value");
//   }
// });

// console.log(countValue);

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

promise.then((success) => console, log(success));

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

//--------------- Promise Chaining ----------------

// then() method

let example = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

example
  .then(function successValue1(result) {
    console.log(result);
  })
  .then(function successValue2() {
    console.log("We can call multiple functions like this");
  });

// catch() method

let example2 = new Promise(function (resolve, reject) {
  reject("Promise rejected");
});

example2
  .then(function successValue(result) {
    console.log(result);
  })
  .catch(function errorValue(result) {
    console.log(result);
  });

// finally() method

let example3 = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

example3
  .then((success) => {})
  .catch((error) => {})
  .finally(function greet() {
    console.log("This code is executed");
  });
