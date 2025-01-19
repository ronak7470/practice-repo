// avoid using var keyword in javascript becoz it creates problms with scope
//Example
/**
if(true){
    var a = 10;
    console.log(a); //10
}
console.log(a); //10  //a is printing 10 value even it is in block scope of if statement
 */
//There are two types of scope in javascript
/**
1. Global Scope
2. Local/Block Scope
 */

//let res1 = addone(5); //We can also call the function before intialization when we declare the function using this way 
function addone(num){
    return num+1;
}
let res1 = addone(5); //This is normal way of using function
//But we cannot call the function before intialization when we declare the function using this way
let addTwo = function(num){
    return num+2
}

let res2 = addTwo(5); //This is also valid way of using function

console.log(res1, res2); //
