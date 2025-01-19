// Immediately Invoked Function Expression(IIFE)
// Sometimes there is problem because of the global pollution to avoid that pollution of global variables we use IIFE 

//Basic systax => ()() first one is function block and second one is function call

//example
(function chai(){  // Named IIFE (becoz we are giving name to fucntion)
    console.log("Databse Connected");
    
})();  //It is mandatory to end this function with semicolon because we need to clarify when we need to stop the function 

//We can also create arrow function using IIFE
( (name) => {  // Simple IIFE or Unnamed IIFE
    console.log(`${name} is learning javascript`);
})("Jin Sakai");