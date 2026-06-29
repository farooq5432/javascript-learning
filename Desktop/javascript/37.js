// difference between dot and square notations in object 

const key = "email"
const person = {
    name:"Farooq", age:22 ,
    "person hobbies": ["learning", "reading", "sports"]
}
person[key]="farooqamin810@gmail.com"
console.log(person["person hobbies"])
console.log(person)
