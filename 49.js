// lexical scope 
const myvar1 = "value1";
function myapp(){

    function var4(){
        const myvar1 = "farooq"
        console.log("farooqq",myvar1)
    }
    console.log(myvar1)
    var4()
}
myapp();