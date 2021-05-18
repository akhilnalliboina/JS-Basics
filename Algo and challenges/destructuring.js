//Array destructuring
let colors = ["blue", "red", "purple"];
//desctructure here based on index
let [color1, color2, color3] = colors;
console.log(color1, color2, color3);

//Object desctructuring
let planets = { x: "Saturn", y: "Mars", z: "Neptune" };
// Destructure here based on name of the object property
let { x, y, z } = planets;
console.log(x, y, z);

// function parameters destructuring
let prairieRose = {
  name: "Prairie Rose",
  scientificName: "Rosa arkansana",
  kingdom: "Plantae",
  genus: "Rosa",
  use: "ornamental",
};

// destructuring params based on object property names
const printPlantInfo = ({ name, scientificName, kingdom }) => {
  console.log(
    `The ${name}, or ${scientificName}, is in the kingdom ${kingdom}`
  );
};

printPlantInfo(prairieRose);
