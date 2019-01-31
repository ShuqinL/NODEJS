/* Exercise 4.6
Create a function factorial(a) that returns the factorial of a number.

That function must be recursive.*/

const readlineSync = require("readline-sync");

let a= new Number(readlineSync.question("Please enter a number and you will get its factorial.")); 
 
//recursive

function factorial(a) 
{
    if(a===0){
      return 1;
    } else {
      return a*factorial(a-1);
    }
}

console.log(factorial(a));

//iterative (it doesn't work)
/* let factorialForLoop = fucntion(a){
    
    if(a===0||a===1)
       return 1;
    for(var i=a-1;i>=1;i--){
      a=a*1;
    }
    return a;
}

console.log(factorialForLoop(a)); */