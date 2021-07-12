const array = [1, 2, 3];
const newArray = [array, 4];
const newArrayUsingSpread = [...array, 4];

console.log(newArray);
console.log(newArrayUsingSpread);

const object = {
  name: "Akhil",
};
const newObject = {
  object,
  age: 26,
};

const newObjectUsingSpread = {
  ...object,
  age: 26,
};

console.log(newObject);
console.log(newObjectUsingSpread);
