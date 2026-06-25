// for in loop 

const fruits = ["apple","mango","banana"];
const fruits2 = [];

for(let fruit in fruits){
    fruits2.push(fruit.toUpperCase())
}
console.log("fruits2 is " , fruits2)