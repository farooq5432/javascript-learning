//filter function 
const numbers = [1,2,3,4,5,6];
const iseven = function(numbers){
    return numbers%2===0;
}
const evennumber = numbers.filter(iseven);
console.log(evennumber)