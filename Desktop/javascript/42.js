// objects inside arrays

const user = [
    {userid :1 , name:"farooq" , place : "karachi"},
    {userid :2 , name:"farooq ", place : "karachi"},
    {userid :3 , name:"farooq ", place : "karachi"},
]
for(let users of user){
    console.log(user)
    console.log(user.name)
}