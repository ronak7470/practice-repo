let score = "33"

console.log(typeof score)

let valueInNumber = Number(score);

console.log(valueInNumber);

score = "33abc"

let valueInNumber2 = Number(score);
console.log(valueInNumber2)   //Output => NaN which represents not a number
