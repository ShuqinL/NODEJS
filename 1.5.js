/* Exercise 1.5
Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

You will have to perform a search on Google to know how to only keep the integer part of a number. */
const readlineSync = require("readline-sync");

let numberOne = readlineSync.question("Please give me a number with decimal part.");
let numberTwo = readlineSync.question("Please give me another number with decimal part.");
let integerOne = new Number(parseInt(numberOne));
 

console.log("The result is "+integerOne*numberTwo);