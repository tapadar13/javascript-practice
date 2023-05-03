//Example 1
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive);
console.log(addFive(2));

//Example 2
const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich("Turkey")("Cheese")("Bread");
console.log(mySandwich);
