// Dates
/*
const date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
*/
//Creating Custom Date
//console.log('*************************************************************');


const customDate = new Date(2002,11,2)
const customDate2 = new Date(2002,11,2,1,55)
const customDate3 = new Date("2002-12-02")
const customDate4 = new Date("12-12-1999")
//console.log(customDate.toDateString());
//console.log(customDate2.toLocaleString());
//console.log(customDate3.toLocaleDateString());
// console.log(customDate4.toString());


//Time Stamp
let myTimeStamp = Date.now();  //Gives value in milliseconds
//console.log(myTimeStamp);
//console.log(customDate.getTime())
//to get value in seconds
//console.log(Math.floor(myTimeStamp/1000));

//to get value of  month or year
//console.log(customDate.getFullYear());
//console.log(customDate.getMonth());
//to get value of date day  
//console.log(customDate.getDate());
//console.log(customDate.getDay())

//Understanding toLocalString Object

customDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})