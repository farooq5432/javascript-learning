// rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myfunc(2,3,4,3,4,5,6,7,8,8)

function addall(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + 1;
    }
    return total;
}
console.log(addall.isArrray);
console.log(typeof(addall));
const z = addall(2,3,4,5,6);
console.log(z);