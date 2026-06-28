// spread operator in arrays

// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const newarray = [...array1,...array2]
// // for spread of a long numbers
// const arr = [..."12345776879768"]

// console.log(newarray);
// console.log(arr);

// spread operator in objects 
const obj1 = {
    key1 : "value1",key2 : "value2"
}
const obj2 = {
    key3 : "value3", key4: "value4", key1 : " value1-0"
}
const newobject ={ ...obj1 , ...obj2}
const o = {..."absdfe"}
console.log(newobject)
console.log(o)