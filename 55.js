// function returning function

function f(){
    function hello(){
        console.log("hello bro inside function")
    }
    return hello();
}
const ans = f()
console.log(ans)