// callback function 

function myfunc(callback){
    console.log(callback)
    callback()
    console.log("hello world")
}
function myfunc2(){
    console.log("inside function")
}
myfunc(myfunc2)