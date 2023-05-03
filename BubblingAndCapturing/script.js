const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("GrandParent");
    e.stopPropagation();
  },
  false
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent");
  },
  false
);

child.addEventListener(
  "click",
  () => {
    console.log("Child");
  },
  false
);
