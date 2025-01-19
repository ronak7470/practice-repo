const user = {
    username: "John Doe",
    price : 999,
    welcomeMessage : function(){
        console.log(`Welcome, ${this.username}!`);
    }
}
//In browser, the global object is window object.
//In Node, the global object is empty object.
//user.welcomeMessage();
//user.username = "John Wick"
//user.welcomeMessage();

//Array Function 
const chai  = () =>{
    console.log("Hello, I am Chai");
}//This is an example of an arrow function
chai();

//Arrow function with argument
/*
const addTwoNumbers = (num1,num2) => {
    return num1 + num2;   //Explicit Return
    }
    console.log(addTwoNumbers(3,5));
       */
      //We can also write this function as:
const addTwoNumbers = (num1,num2) => (num1 + num2);//Implicit Return
console.log(addTwoNumbers(3,5));

//NOTE:: When we full curly braces it is compulsory to use return keyword while when we use parenthesis there is no need to use return keyword