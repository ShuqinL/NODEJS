/* Exercise 4.4
Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.*/

const readlineSync = require("readline-sync");

let rand10=function(){
    return Math.floor(Math.random()*10)+1;
} 
 
let n= new Number(readlineSync.question("How many random numbers do you want to get between 1 and 10? "));  

let array=[];

let multiRand=function(n){
    
    for (let i=0;i<n;i++){
        array.push(rand10());
    }
   return array;
}

let average = function(array){
    let sum = array.reduce((a,b)=>a+b,0);
    return( sum/array.length);
}

let min = function(array){
    return(Math.min.apply(null,array));
}

let max = function(array){
    return(Math.max.apply(null,array));
}

console.log(multiRand(n));
console.log(average(array));
console.log(min(array));
console.log(max(array));