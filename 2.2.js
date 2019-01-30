/* Exercise 2.2
Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

Bonus 2: be polite in the error messages. (facultative) */

const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question("How many steps did you walk minimum per day?"));
let max = new Number(readlineSync.question("How many steps did you walk maximum per day?"));
let current = new Number(readlineSync.question("How many steps did you walk today?"));

if (current>=min && current<=max){
    console.log("Keep walking, you are doing well!");
} else if(current>max) {
    console.log("New personal record! You are doing great!");
} else {
    console.log("Come on! Don't be so lazy!");
}

