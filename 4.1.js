/* Exercise 4.1
Create a function named calcSurface that takes the length and width of a rectangle and 
returns its surface. Then create a program that asks the length and width of a rectangle 
to the user then displays the surface of that rectangle. That program must use the function 
you created..*/

const readlineSync = require("readline-sync");

let calcSurface=function(length,width){
    return length*width;
} 
 
let a= new Number(readlineSync.question("What is the length of this rectangle?")); 
let b= new Number(readlineSync.question("What is the width of this rectangle?")); 

console.log("The surface of this rectangle is "+calcSurface(a,b));
 

 

