// object destructuring

const band ={
    bandname : "farooq", song : "teri meri",
    year : 2025,
}
let {bandname,song,...restprops } = band;
console.log(bandname)
console.log(band)
console.log(restprops)