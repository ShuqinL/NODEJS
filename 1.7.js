/* Exercice 1.7
Ask to the user its shoe size and its birth year. Then make the following calculation:

Multiply the shoe size by 2
Add 5 to the result
Multiply that by 50
Subtract the birth year
Add 1766
Test with your own birth year and your shoe size. */

const readlineSync = require("readline-sync");

let shoeSize = new Number(readlineSync.question("What is your shoe size?"));
let birthYear = new Number(readlineSync.question("What is your birth year?"));
let result = (shoeSize*2+5)*50-birthYear+1766;

console.log("The result is "+ result);