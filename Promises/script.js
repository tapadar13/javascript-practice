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
