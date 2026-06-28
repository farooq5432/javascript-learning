// functions in js 

function singhbd(){
    console.log("happy birthday Farooq");
}
singhbd();
singhbd()
function maths(x,y){
    return x+y;
}
const answer = maths(40,60);
console.log(answer)

function Iseven(num){
    if(num%2===0){
        return true
    } else {
        return false
    }
}
const x = Iseven(25);
console.log(x)

function findtarget(array, target){
    for(i=0; i<=array.length; i++){
        if(array[i]==target){
            return i;
        }
    } return 0;
}
const arr = [2,3,4,5,6,7,8]
const z = findtarget(arr,9)
console.log(z)

// function expression 

const singing = function(){
    console.log("hbd to farooq")
}
singing();

const nim = function(num1,num2){
    return num1 + num2;
}
const ans = nim(23,45);
console.log(ans)