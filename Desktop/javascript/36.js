// objects in javascript

const person = {
    name:"Farooq", age:22 ,
    hobbies: ["learning", "reading", "sports"]
}
console.log(person)

console.log(person.name)
console.log(person["name"]);
console.log(person.age)
console.log(person.hobbies)
console.log(person.hobbies[1])
// add new key in the existion object 

person.gender= "male";
person["gender"]= "male";
console.log(person)
