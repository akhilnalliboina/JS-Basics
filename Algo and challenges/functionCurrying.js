// Function currying using bind method
/*
function multiply(x, y) {
  return x * y;
}
let multiplyByTwo = multiply.bind(this, 2);
let multiplyTwoThree = multiply.bind(this, 2, 3);

console.log(multiplyByTwo(2));
console.log(multiplyTwoThree());
*/

// Function currying using closure
function multiply(x) {
  return function multiplyByTwo(y) {
    console.log(x * y);
  };
}
let multiplyByTwo = multiply(3);
multiplyByTwo(2);
