let message = "Hello World";
console.log(message);

let lodash = require("lodash");

let name = "brittany";
console.log("Name: " + name);

// call the upperFirst() function in lodash to convert the first letter of the string to uppercase
name = lodash.startCase(name);
console.log("Revised name: " + name);