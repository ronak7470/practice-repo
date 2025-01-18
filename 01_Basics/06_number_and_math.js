//Ways to create a number in javascript
const score = 400

const score2 = new Number(500)

//console.log(score, score2)

const num = score.toString()
//console.log(typeof num);
//console.log(score.toFixed(2));

const score3 = 23.6789 //Precision is used to get round off 
//console.log(score3.toPrecision(3));
//console.log(score3.toPrecision(2));

const rupee = 100000

//console.log(rupee.toLocaleString('en-IN', {style: 'currency', currency: 'INR'}))

//++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++
/*
console.log(Math.abs(-4)); //Changes only -negative to positive numbers 
console.log(Math.round(4.3)); //Round off the number
console.log(Math.ceil(4.7)); //Round off the higher  number
console.log(Math.floor(4.7)); //Round off the lower number
console.log(Math.max(10, 20, 30, 40)); //Find the highest number
console.log(Math.min(10, 20, 30, 40)); //Find the lowest number
*/

console.log(Math.random()); //Gives random value between 0 and 1
console.log((Math.random()*10)+1); //

const min = 10
const max = 20

//Formulae
//Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min);