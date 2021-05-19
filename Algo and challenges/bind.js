let person = {
  firstName: "Akhil",
  secondName: "Nalliboina",
};

let fullName = function (place) {
  console.log(
    `My fullname is ${this.firstName} ${this.secondName}. I am from ${place}`
  );
};

//calling a function with a particular object and arguments
//The call() method calls a function with a given this value and arguments provided individually.
fullName.call(person, "Nellore");
//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
fullName.apply(person, ["Germany"]);
//bind lets to create a copy of a function with the provided this value, to be run later
let myName = fullName.bind(person, "Nellore");
myName();
