/* Exercise 4.5
Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

Create a program to use that function.

Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...*/

const readlineSync = require("readline-sync");

let lat1= new Number(readlineSync.question("Please enter the latitude of A place.")); 
let lon1= new Number(readlineSync.question("Please enter the longitude of A place.")); 
let lat2= new Number(readlineSync.question("Please enter the latitude of B place.")); 
let lon2= new Number(readlineSync.question("Please enter the longitude of B place.")); 

let A=[lat1,lon1];
let B=[lat2,lon2]; 

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

function calcDistance(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

console.log("The distance between the two points is "+calcDistance(lat1, lon1, lat2, lon2)+"km.");