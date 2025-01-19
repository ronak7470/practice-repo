//Arrays 
/*
let myArr = [1,2,3,4,5,6,7,8,9,10];
let myArr2 = [1,2,3,4,5,6,true, 'Ronak'] // in javascript we can also put elements of different data types
myArr.push(11)
console.log(myArr);
myArr.pop()
console.log(myArr);

//If we want to insert element in start position
myArr.unshift(0) //it is very time consuming and increases the time complexity
console.log(myArr);

//If we want to delete element from start position
myArr.shift()
console.log(myArr);

//To find index of an element
console.log(myArr.indexOf(5)); //output => 4

//To find last index of an element
console.log(myArr.lastIndexOf(5)); //output => 4

//To check element present in an array
console.log(myArr.includes(5)); //output => true

//To sort array in ascending order
myArr.sort()
console.log(myArr);

//To sort array in descending order
myArr.sort((a,b) => b-a)
console.log(myArr);

//To get max value from array
console.log(Math.max(...myArr));
//To get min value from array
console.log(Math.min(...myArr));

//To convert array into string
const newArr = myArr.join();
console.log(newArr);
*/
//slice and splice
console.log('A',myArr);
let my1 = myArr.slice(1,3)
console.log(my1);
console.log('B',myArr);
let my2 = myArr.splice(1,3);
console.log(my2);
console.log('C',myArr);