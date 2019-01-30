/* Exercise 1.6
Ask two integers to the user. Display the rest of the integer division of the two numbers. */
const readlineSync = require("readline-sync");

let integerOne = readlineSync.question("Please give me an integer.");
let integerTwo = readlineSync.question("Please give me another integer.");

console.log("The rest of the division is "+integerOne%integerTwo);