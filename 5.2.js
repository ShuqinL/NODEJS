/* Exercise 5.2
Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.*/

const readlineSync = require("readline-sync");

let name = readlineSync.question("What is your favorite TV serie?");
let year = new Number(readlineSync.question("In which year is it produced?"));
let members= readlineSync.question("Do you know the names of the cast members? You can note as much as you want.");
//turn the members string into an array
let membersArray=members.split(",");
// sort the array in Random order
let randomCast=membersArray.sort(function(a,b){return 0.5-Math.random()});

function randomizeCast(members){
     return randomCast;
}
console.log(randomizeCast());

function askTvSerie() {
    let tvSerie={};
    tvSerie.name=name;
    tvSerie.year=year;
    tvSerie.members=randomCast;
    let myJSON = JSON.stringify(tvSerie);
    return myJSON;
}

console.log(askTvSerie());
 