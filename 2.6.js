/* Exercise 2.6
Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...) */

const readlineSync =require("readline-sync");

let num= new Number(readlineSync.question("Please enter a number between 1 and 7.")); 

if(num==1){
    console.log("Today is Monday.");
} else if(num==2){
    console.log("Today is Tuesday.");
} else if(num==3){
    console.log("Today is Wednesday.");
} else if(num==4){
    console.log("Today is Thursday.");
} else if(num==5){
    console.log("Today is Friday.");
} else if(num==6){
    console.log("Today is Saturday.");
} else if(num==7){
    console.log("Today is Sunday.");
} else {
    console.log("Please enter a number between 1 and 7!");
}


/* switch(num){
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    case 7:
        console.log("Today is Sunday.");
        break;
}
 */

