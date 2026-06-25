// for of loop 

const fruits = ["apple","mango","banana"];
const fruits2 = [];

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase())
}
console.log(fruits2)

for(let i=0; i<=fruits.length; i++){
    console.log(fruits[i]);
}