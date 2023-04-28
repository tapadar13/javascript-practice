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

let promiseNew = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

//Promise Chaining

let example = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

example
  .then(function succesValue1(result) {
    console.log(result);
  })
  .then(function successValue2() {
    console.log("We can call multiple functions like this");
  });
