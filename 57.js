// function returning function
// const s=[2,4,5,6];
// // const square = function(number){
// //     return number*number
// // }
// const ans = s.map(functon(numbers){ 
//     return numbers * numbers
// });
//     console.log(ans)

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

const users = [
    {firstnamme: "farooq", age : 22, },
    {firstnamme: "ali", age : 22, },
    {firstnamme: "aliza", age : 22, }
]

const store = users.map((user)=>{
    return user.firstnamme;
})
console.log(store);