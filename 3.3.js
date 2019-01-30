/* Exercise 3.3
Write a program that will create a duplicate of a given array.

Bonus: make a first version that will only do it using push(). Make a second version 
that uses a single method call to perform the copy. (You'll have to search on the MDN or Google for this one.)*/

let array1=[1, 2, 3, 7, 5];


let array2=[];
for (let i=0;i<array1.length;i++){
    array2.push(array1[i]);
}
console.log(array2);

let array3=array1.slice();
console.log(array3);

 

 

 

