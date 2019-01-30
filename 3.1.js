/* Exercise 3.1
Write a program that will add all the elements of an array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 15
[100, 101, 102] => 303.*/

/* const readlineSync =require("readline-sync"); */

let array1=[1, 2, 3, 4, 5];
let array2=[100, 101, 102];

let sum1=array1.reduce((a,b)=>a+b,0);
console.log(sum1);

let sum2=array2.reduce((a,b)=>a+b,0);
console.log(sum2);
 

 

 

