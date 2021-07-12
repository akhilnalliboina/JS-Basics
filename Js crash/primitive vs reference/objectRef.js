const Person = {
  name: "Akhil",
};

const newPerson = Person;
Person.name = "Akhil N"; // as array, objects are reference types the main value gets changed
// other things like num,string, boolean are primitive types
console.log(newPerson);

//To copy the person into newPerson instead of reference, we can use spread operator
const newPersonSpread = {
  ...Person,
};

Person.name = "Akhil"; //doesnt effect the Person as the value of name is alread copied as "Akhil N"

console.log(newPersonSpread);
