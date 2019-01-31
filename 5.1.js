/* Exercise 5.1
Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.*/

const readlineSync = require("readline-sync");

let name= readlineSync.question("What is your favorite TV serie?"); 
let year= new Number(readlineSync.question("In which year is it produced?"));
let members= readlineSync.question("Do you know the names of the cast members? You can note as much as you want.");
 

function askTvSerie() {
    let tvSerie={};
    tvSerie.name=name;
    tvSerie.year=year;
    tvSerie.members=members;
    let myJSON = JSON.stringify(tvSerie);
    return myJSON;
}

console.log(askTvSerie());
 