// iterate in objects
// for in loop
// objects .keys 

const person = {
    name:"Farooq", age:22 ,
    hobbies: ["learning", "reading", "sports"]
}
for (let key in person){
    console.log(key,person[key])
}

console.log(Object.keys(person))

