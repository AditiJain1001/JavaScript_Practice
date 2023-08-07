//Q1
let a = prompt("What's your age")
a = Number.parseInt(a);
console.log(a >= 10 && a <= 20 ? true : false);

//Q2
//prompt only works properly in browser
let networth = prompt("What's your networth?");
switch (networth) {
    case "thousand":
        console.log("You've got a long way to go");
        break;
    case "million":
        console.log("Welcome to the Million Dollar Club!");
        break;
    case "billion":
        console.log("Horray you are close to achiveing your dream!");
        break;
    default:
        console.log("Please eneter a recognised amount");
}


//Q3
/*
const b = 6;
if (b % 2 == 0 && b % 3 == 0) {
    console.log(b + " is divisible by both 2 and 3");
}
else {
    console.log("num not divisible by both 2 and 3");
}

//Q4
const c = 6;
if (c % 2 == 0 || c % 3 == 0) {
    console.log(c + " is divisible by both 2 or 3");
}
else {
    console.log("num not divisible by both 2 and 3");
}
*/

//Q5
/*
const age = 18;
const validDrivingAge = age >= 18 ? "You can drive!" : "You are underage, please do not drive"
console.log(validDrivingAge);
*/