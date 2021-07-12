import person from "export_default.js"; // import it as any variable without any braces
import {
  Attributes as attributes,
  Education as eductation,
} from "export_multiple.js"; //import with braces exactly with its names

console.log(
  `My name is ${person.name}. I am ${attributes.height} tall, My masters is in ${eductation.Masters}`
);
