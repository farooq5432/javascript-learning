// some method 

const numbers = [ 3,9,11,9];
const ans = numbers.some((number)=>number%3===0);
console.log(ans);

const mart = [
    {productid : 1, name: "sdd", price: 1200},
    {productid : 1, name: "sdd", price: 70000},
    {productid : 1, name: "sdd", price: 23000}
]
const answ = mart.some((item)=>item.price<10)
console.log(answ)