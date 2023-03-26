// ----- Creating an HTMLCollection -----
// const elems = document.getElementsByTagName("p");
// console.log(elems);

// ----- Accessing elements in the HTMLCollection -----
// const p = document.getElementsByTagName("p")[1];
// console.log(p);

// ----- Length of the HTMLCollection -----
// const elems = document.getElementsByTagName("p");
// console.log(elems.length);

// ----- Looping through the collection -----
// const elems = document.getElementsByTagName("p");
// for (let i = 0; i < elems.length; i++) {
//   elems[i].style.color = "green";
// }

// ----- Iterating over an HTMLCollection using "for...of" -----
// const elems = document.getElementsByTagName("p");
// for (p of elems) {
//   console.log(p.innerText);
// }

// ----- Iterating over an HTMLCollection using "forEach()" -----
// const elems = document.getElementsByTagName("p");
// Array.from(elems).forEach((elem) => {
//   console.log(elem.innerText);
// });
