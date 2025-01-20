const myNums = [1,2,3]
//Generally used in shopping cart to calculate bill

//General way of using reduce
/*
let myTotal = myNums.reduce( function (acc,currval) {
    console.log(`accumulator : ${acc}  currentvalue : ${currval}`)
    return acc + currval;
},0) //Intial value

console.log(myTotal)
*/

//Now using with Arrow function

//let myTotal = myNums.reduce((acc,cur)=>acc+cur,0)
//console.log(myTotal);

//Now taking real life example 

let shoppingCart = [
    {
        item : "Gamepad",
        price : 2500
    },
    {
        item : "Keyboard",
        price : 2400
    },
    {
        item : "Mouse",
        price : 1000
    },
    {
        item : "Headphone",
        price : 1000
    },
]

let myTotal = shoppingCart.reduce ( (acc, item) => acc+item.price,0)
console.log(myTotal);