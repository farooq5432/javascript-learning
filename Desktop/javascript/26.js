// arrays 
// all others are premetive data type string, nummber,var , const etc
// intro to arrayas 
// ordered collections of items are called arrays

let fruits = ["apple", "mango", "banana"];
let numbers = [1,2,3,4,5,6];
let mixed = [1,2,"string", null , undefined]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(mixed);
console.log(numbers);
fruits[1]="grapes";
console.log(fruits);
console.log(typeof fruits);
console.log(typeof numbers);
let obj = {};
Array.isArray(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));