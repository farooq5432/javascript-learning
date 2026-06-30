// reduce 
// const  numbers = [1,2,3,4,5,6]

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue
// })
// console.log(sum)

const mart = [
    {productid : 1, name: "sdd", price: 1200},
    {productid : 1, name: "sdd", price: 1200},
    {productid : 1, name: "sdd", price: 1200}
]
const cin = mart.reduce((accumulator, total)=>{
    return accumulator + total.price;
},0)
console.log(cin)