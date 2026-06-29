// param destructuring 

const person ={
    name : "farooq",
    gender : "male",
}
function printdetails({name,gender}){
    console.log(name)
    console.log(gender)
}
printdetails(person)