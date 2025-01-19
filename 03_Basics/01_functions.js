function sayMyName() {
  //Function Defination
  console.log("My name is Ronak");
}

//sayMyName //function reference

sayMyName(); //Function Call

//Simple Functino to add two numbers
function addNumbers(num1, num2) {
  //num1 and num2 are called Parameters
  console.log(num1 + num2);
}

//addNumbers(5,10); //5 and 10 are called Arguments
//exceptional cases
//addNumbers(10,"20"); //Function understands it as string and gives output 1020
//addNumbers(20,"a"); //Function gives wrong output as 20a

function welcomeUser(username) {
  console.log(`Welcome Mr. ${username}`);
}

//welcomeUser("Ronak Kadam");
//welcomeUser(); //if any user does not pass any argument then function gives undefined type
//That is why we write this function as
function welcomeUser2(username) {
  if (!username) {
    console.log("No username provided");
    return;
  }
  return `${username} just logged in `;
}

//console.log(welcomeUser2("Ronak Kadam"));

// if we want to set default values we can do it like this:
function welcomeUser3(username = "Guest") {
  if (!username) {
    console.log("No username provided");
    return;
  }
  return `${username} just logged in `;
}
//console.log(welcomeUser3()); //if we do not pass any argument then it will print Guest just logged

//Shopping Cart problem when we don't have any idea about how many parameters will be there
//Therefore, We use the Rest operator (...) to tackle this problem
function addItemsToCart(...items) {
  return items;
}
console.log(addItemsToCart("Apple", "Banana", "Orange")); //Apple, Banana, Orange will be printed in array form


//Passing an object as argument
let user = {
    username : "John Doe",
    salary : "30000"
}

function displayEmployInfo(anyObject){
    console.log(`Employ Name is ${anyObject.username} and Salary is ${anyObject.salary}`);
}

displayEmployInfo(user);
displayEmployInfo({
    username : "Walter White",
    salary : "80M"
});

//Passing Array as Argument
let myArray = [200,100,99,56]
function giveSecondElementInArray(anyArray){
    console.log(anyArray[1]);
}

giveSecondElementInArray(myArray);
//or
giveSecondElementInArray([200,100,99,56]);