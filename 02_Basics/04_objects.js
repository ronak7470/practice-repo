//const tinder = new Object(); // Singleton Object
const tinderUser = {}; //Not Singleton Object

tinderUser.username = 'ronak@tinder.com';
tinderUser.isLoggedIn = false;
tinderUser.age = 27;

//console.log(tinderUser);

//Nesting in objects
let regUser = {
    email : 'tinder@tinder.com',
    fullname : {
        userfullname : {
            firstname : 'Ronak',
            lastname : 'Kadam'
        }
    }
}

//console.log(regUser.fullname.userfullname.firstname);

//Joining two objects

let obj1={1:"a", 2:"b"}
let obj2={3:"a", 4:"b"}

//let obj3 = Object.assign({}, obj1, obj2); //{} empty braces is given because it acts as a target in which all source could merge  if not given the obj1 becomes the target and obj2 becomes the source 

//Another way or Efficient way is doing with spread operator

let obj3 = {...obj1, ...obj2};
//console.log(obj3)

//If array of objects are given by the database how to access them

let users = [
    {username : 'user1@tinder.com', isLoggedIn : false, age : 27},
    {username : 'user2@tinder.com', isLoggedIn : true, age : 29},
    {username : 'user3@tinder.com', isLoggedIn : false, age : 31}
]

//console.log(users[0].username)

console.log(Object.keys(tinderUser)); //Gives all the keys of an object
console.log(Object.values(tinderUser)); //Gives all the value of an object
console.log(Object.entries(tinderUser));//Gives all values in form of key value pairs

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //checks if given property exists in an object or not

