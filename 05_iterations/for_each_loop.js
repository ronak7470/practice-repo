const coding = ["java","js","cpp","python","ruby"]

//Call Back Function does not have any name
coding.forEach(function(item){
    //console.log(item)
})

const games = ["God of war", "GTA 5", "Uncharted 4", "Ghost of Tsushima","Far Cry 3"]
games.forEach(function (game){
    //console.log(game)
})

//Using arrow Functions

//games.forEach((item)=>{console.log(item);})

//We can also give pre built function
/*
function printElement(ele) {
    console.log(ele)
}
*/
//games.forEach(printElement);

//We can also take index and array as parameters
/*
 games.forEach((item , index, games)=>{
    console.log(item, index, games)
 })
    */

 let code = [
    {
        languageName : "java",
        extention : "java" 
    },
    {
        languageName : "Javascript",
        extention : "js"
    },
    {
        languageName : "Python",
        extention : "py"
    }
 ]

 //code.forEach((item)=>{console.log(item.languageName);})
//for each does not return any value 

//Filter Method
let myNums =[1,2,3,4,5,6,7,8,9,10]
let res = myNums.filter((num)=>num>4)
//let res = myNums.filter((num)=>{ return num>4}) //Another way
//console.log(res)

//now doing same thing with forEach loop
let newNum = []
myNums.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum)