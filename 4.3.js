/* Exercise 4.3
By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.*/

const readlineSync = require("readline-sync");

let rand10=function(){
    return Math.floor(Math.random()*10)+1;
} 
 
let n= new Number(readlineSync.question("How many random numbers do you want to get between 1 and 10? "));  
    

let multiRand=function(n){
   
    let array=[];
    for (let i=0;i<n;i++){
        array.push(rand10());
    }
   return array;
}

console.log(multiRand(n));
 

