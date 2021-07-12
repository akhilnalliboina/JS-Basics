class Human {
  constructor() {
    this.gender = "Male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // when inheritence used use super to initiate the parent constructor
    this.name = "Akhil";
  }
  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();
