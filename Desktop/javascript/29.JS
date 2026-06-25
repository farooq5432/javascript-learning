let array1 =["item1","item2"];
let array2 = array1;
// one method is this to not copy samea arrays element
let array2 =  [].concat(array1);
// one method is this to not copy samea arrays element 
let array2 = array1.slice(0);
// one another way spread opertor
let array2 = [...array1];
// console.log(array1);
// console.log(array2);
// array1.push("item3");
// console.log(array1);
// console.log(array2);
// console.log(array1);
// console.log(array1===array2)
console.log(array1);
console.log(array2);
array1.push("item4");
console.log(array1);
console.log(array2);