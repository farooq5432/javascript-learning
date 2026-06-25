// array destructuring

const myarray =["value1", "value2", "value3","value4"];
// let var1 = myarray[0];
// let var2 = myarray[1];
// console.log(var1);
// console.log(var2);

let [var1,var2, ...newarray ] = myarray;
console.log(var1);
console.log(var2);
// let newarray = myarray.slice(2,4)
console.log(newarray)
