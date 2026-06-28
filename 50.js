// block scop vs function scope
// letv and const are block scope


// {
//     let name = "Farooq"
//     console.log(name)
// }

// {
//     var name = "farooq" 
//     console.log(name)
// }
// console.log(name)

function myapp(){
    if(true){
        var name = "Farooq"
        console.log("alibhayyy")
        console.log(name)
    }
    console.log("garaffbhai")
}
myapp()