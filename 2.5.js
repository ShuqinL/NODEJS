/* Exercise 2.5
Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42). */

const readlineSync = require("readline-sync");

let num;
 let guessRightNumber = function(num){
    num= new Number(readlineSync.question("What is your favorite number?")) ;
    if(num==42){
        console.log("You are right! The number is 42");
    } else{
        console.log("Are your sure?");
        guessRightNumber(num);
  }
 }   

guessRightNumber(num);



