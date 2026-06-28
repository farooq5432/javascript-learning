"use strict "
// trim()
// toUpperCase()
// toLowerCase()
// Slice()

let firstname = "   farooq   ";

console.log(firstname.length);

let newString = firstname.trim(); 
console.log(newString.length);
console.log(newString);

// toUpperCase()
console.log(firstname.toUpperCase());
firstname.toUpperCase();
console.log(firstname);
// toLowerCase()
console.log(firstname.toLowerCase());

// slice 
let newString1 = firstname.slice(0,8);
console.log(newString1);