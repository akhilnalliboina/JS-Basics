"use strict";
var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var display = document.querySelector(".greeting");
var inputForm = document.querySelector("form");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetail = function () {
        return "My name is " + this.name + ". I am " + this.age;
    };
    return Person;
}());
inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    display.innerText = person.getDetail();
    console.log(person.getDetail());
    inputForm.reset();
});
