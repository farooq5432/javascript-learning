// sort values ASCII 
// const number = [100,2300,5,40,3000]
// number.sort();
// console.log(number)

const username = ['farooq','ali','shabana','rabia','jiya','biya','aacd','ABC'];
username.sort();
console.log(username)

const number = [100,2300,5,40,3000]
number.sort((a,b)=>{
    return a-b;
});
console.log(number)

// a - b then positive print b , a
// a - b then negative print a , b
// REAL LFE EXAMPLE 
const products = [
    {productid: "1",name : "Iphone", price: "2000"},
    {productid: "1",name : "Samsung", price: "4000"},
    {productid: "1",name : "Raelme", price: "100"},
    {productid: "1",name : "Oppo", price: "70000"},
]
products.sort((a,b)=>{
    return a.price - b.price 
})
console.log(products)