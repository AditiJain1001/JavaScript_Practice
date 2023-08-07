// for (k = 0; k < 5; k++) {
//   console.log(k);
// }

//For in loop iteraters over the keys of obj
    // Use obj[a] to access values of each key
    /*
    const obj = {
        "Random": "Number",
        "Fixed": "String"
    };
    for ( let a in obj) {
        console.log("This key " + a + " contains the value of " + obj[a]);
    }
    */

//For of loop the obj has to be iterable (ie. string or an array)
/*
const list = [0,1,2]
for(a of list) {
    console.log(a);
}
*/

/* 
for(a of "Harry") {
    console.log(a);
} 
*/


//do-while loop exectues block of code at least once
/*
do {
    console.log("hi2");
} 
while (0 < 1 ) 
*/

//old function
/* 
sayHi (name) {
    console.log("Hi " + name);
}
sayHi("jj");
*/

//arrow function
/* 
const sayBye = () => {
    console.log("Bye");
}
sayBye();
*/
// --------------------------------------------------------------------------------------------------------------

// Q1
const obj = {
    "Harry": 98,
    "Rohan": 70,
    "Aakash": 7
}

// Q2
/*
for (marks in obj) {
    console.log(marks + " has received marks of " + obj[marks])
}
*/

// Q3
/*
let num;

do {
    num = prompt("Tey again - enter a valid number");
    num = Number.parseInt(num)
}
while (num > 20);


*/

// Q4

const meanOfNums = (a, b, c, d, e) => {
    let mean = ((a + b + c + d + e)/ 5);
    console.log("The mean of this set of numbers is " + mean);

}

meanOfNums(1,2,3,4,5);
