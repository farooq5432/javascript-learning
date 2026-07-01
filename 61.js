// find method

// const myarray = ["hello","cat","dog","lion"];
// function islength(string){
//     return string.length===3;
// }
// const ans = myarray.find(islength);
// console.log(ans);

const user = [
    {userid: 1, name : "Farooq"},
    {userid: 2, name : "Farooq"},
    {userid: 3, name : "Farooq"},
    {userid: 4, name : "Farooq"}
]
const finding = user.find((user)=>user.userid===3)
console.log(finding)