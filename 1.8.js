/* Exercice 1.8
Create a "Story Teller".

Ask questions to the user about different things. Store the results he gives to you. Display them in a way that it creates a fun story!

Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked. */

const readlineSync = require("readline-sync");

let person =  readlineSync.question("Who is your favorite actor?") ;
let time =   readlineSync.question("When did you meet your best friend?");
let place =  readlineSync.question("Where would you choose to live after your retirement?");
let animal = readlineSync.question("What kind of animal are you afraid of?");
let action = readlineSync.question("Did you do something you regret? What?");
let reason = readlineSync.question("What would be the reason if you go to a desert island alone?");

console.log( time + ", "+person+" "+action+" with a "+animal+" "+place+", because "+person+" want to "+reason);