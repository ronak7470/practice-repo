const userEmail = "ronak@gmail.com"; //true
//const userEmail = "" //false
//const userEmail = [] //true
//We are not comparing anything we are just assuming that the value is true or false this is called truthy or falsy
if (userEmail) {
  console.log("Got the user email: ");
} else {
  console.log("User email not found.");
}

// Falsy Values in JavaScript

//false, 0 , -0, BigInt 0n, ""(Empty String), null, undefined, NaN
//=> These are all the falsy values in JavaScript

// Truthy Values in JavaScript
// "0", 'false'," "(Space in a string),[](Empty Array), {}(Empty Object), function(){}(Empty Function)

if (userEmail.length === 0) {
  console.log("array is empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null, undefined

//This operator is used to avoid null and undefined values for eg:

//val1 = null ?? 10
//console.log(val1);

//val1 = undefined ?? 10;
//console.log(val1);

val1 = null ?? 10 ?? 20  //First valule will be assigned 
console.log(val1);

//Terniary Operator
//condition? true : false