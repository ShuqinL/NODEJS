/* Exercise 2.7
Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.*/

const readlineSync =require("readline-sync");

let n= new Number(readlineSync.question("Please enter a number."));
let array = [];

for (let i=0;i<n;i++){
    let newNum=new Number(readlineSync.question("Please enter a number."));
    array.push(newNum);
}
console.log(array);
let sum=array.reduce((a,b)=>a+b,0);
console.log(sum);

 

 

