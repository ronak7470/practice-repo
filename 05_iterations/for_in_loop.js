
//Looping over object
const myObject = {
    'game1': "NFS",
    'game2': "FIFA",
    'game3': "Mortal Kombat 11",
    'game4': "God of War",
    'game5': "Assassin Creed",
    'game6': "Ghost of Tsushima"
 }
 //Looping over object
 for(const key in myObject){
   // console.log(key)  // prints keys
   // console.log(myObject[key]) // prints values
    console.log(`${key} is ${myObject[key]}`) ;
 }

 //Looping over array
 let myArray =[1,2,3,4,5,6,7,8,9,10]

 for(const key in myArray){
   //console.log(key); //prints index of array
   console.log(myArray[key]); // print elements of array
 }