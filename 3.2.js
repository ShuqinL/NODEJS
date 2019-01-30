/* Exercise 3.2
Write a program that will calculate the average value of a given array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 3
[100, 101, 102] => 101*/

/* const readlineSync =require("readline-sync"); */

let array1=[1, 2, 3, 4, 5];
let array2=[100, 101, 102];

let sum1=array1.reduce((a,b)=>a+b,0);
console.log(sum1/array1.length);

let sum2=array2.reduce((a,b)=>a+b,0);
console.log(sum2/array2.length);
 

 

 

