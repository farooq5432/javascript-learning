// for each

// simple 
// reduce 
// important array methods 

// const arr = [2,3,4,5];
// function myfunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
// }
// // for (i=0; i<arr.length; i++){
// //     myfunc(arr[i],i);
// //     }
// arr.forEach(myfunc);

// const number = [2,4,6,8];

// number.forEach(function(numbers){
//     console.log(numbers*2)
// })

const user = [
    {firstnamme: "farooq", age : 22, },
    {firstnamme: "ali", age : 22, },
    {firstnamme: "aliza", age : 22, }
]
// user.forEach(function(users){
//     console.log(users.firstnamme)
// })

for (let users of user){
    console.log(users.firstnamme)
}