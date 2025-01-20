//For of Loop

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,];

for (const num of arr) {
   // console.log(num); 
}
//For Printing Reverse
for (const num of arr.reverse()) {
   // console.log(num); 
}

let greeting = "Good Morning"
//Looping over string
for(const greet of greeting){
    console.log(`Your letter is ${greet}`);
}
