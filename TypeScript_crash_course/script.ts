const inputName = document.querySelector("#name") as HTMLInputElement;
const inputAge = document.querySelector("#age") as HTMLInputElement;
const display = document.querySelector(".greeting") as HTMLDivElement;
const inputForm = document.querySelector("form")!;

interface PersonInterface {
    name: string,
    age: number
}

class Person implements PersonInterface {
    constructor(public name: string, public age: number) {
    }
    getDetail() {
        return `My name is ${this.name}. I am ${this.age}`
    }
}

inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const person = new Person(inputName.value, inputAge.valueAsNumber)
    display.innerText = person.getDetail()
    console.log(person.getDetail())
    inputForm.reset()
})

