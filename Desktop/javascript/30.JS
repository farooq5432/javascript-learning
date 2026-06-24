// FOR LOOP IN ARRAYS 

let fruits = ["apple", "mango", "banana", "grapes"];
let fruits2 =[];
console.log(fruits.length);
    console.log(fruits[3]);
    console.log(fruits[fruits.length-2]);

    for(i=0; i<fruits.length; i++){
        console.log(i);
        console.log(fruits);
    }
 for(i=0; i<=fruits.length-1; i++){
        console.log(i);
        fruits2.push(fruits[i].toUpperCase());
    }
    console.log(fruits2)