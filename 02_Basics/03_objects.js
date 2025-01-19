//Two ways to create objects in javascript
//Using object literal 
//Using obeject constructor

//Using object literal
const mySym = Symbol("key1")
let student = {
    name: 'Ronak',
    "fullName": "Ronak Kadam",
    [mySym] : "mykey1",
    age: 22,
    location: 'Indore',
    isStudent: true
}

//Accessing object properties
//console.log(student.name); //First way
//console.log(student["name"]); //Second way
//console.log(student[mySym]);
//console.log(student["fullName"]); //This is the only way to access properties if key is written as string 

//student.location = 'Delhi';
//Object.freeze(student);  //Used to freeze the object so that no changes can be made
//student.location = 'Mumbai'; //it is not changing the location becoz object is freezed
//console.log(student);

student.greeting = function() {
    console.log(`Hello, Student ${this.name}`);
}

console.log(student.greeting());
