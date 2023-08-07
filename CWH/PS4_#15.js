// Quick Quiz:
let name2 = "Aditi";

// for (i=0; i < (name2.length); i++) {
//     console.log(name2[i]);
// }

for (a of name2) {
  //for of loop iterates over the letters of a string not it's indicies such as name2[a]
  console.log(a);
}

//Q1
console.log('har"'.length); //Prints 4

//Q2
const clip = "long tissues biscuit";
const word = clip.includes("tissue");
const word2 = clip.startsWith("lol");
const word3 = clip.endsWith("biscuit")
console.log(word, word2, word3);

//Q3
const food = "FruIt";
console.log(food.toLowerCase());

//Q4
const str = "Total: Rupees 2907";
console.log(str.slice(13))

//Q5
const lotion = "St'Ives";
//Trick question - strings CANNOT BE chnaged; only replaced!
console.log(lotion.replace("I", "O")); //produces a new string...
