const marvel_heroes = ["Thor", "IronMan","Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

//marvel_heroes.push(dc_heroes) //insert array in an array //Changes element in the orginal array
//console.log(marvel_heroes);

//let all_heroes = marvel_heroes.concat(dc_heroes) //concat
//concat gives a new array
//console.log(all_heroes);

//We can also do this thing using spread operator
let all_heroes = [...marvel_heroes, ...dc_heroes] //spread operator (this creates elements as individual items )
//console.log(all_heroes);

const another_array = [1,2,3,[4,5],[6,7,[8,9],[10,11]]]
let real_array = another_array.flat(Infinity);

//console.log(real_array);

console.log(Array.isArray("Ronak"));
console.log(Array.from("Ronak"));

let score1  =  100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //Creates a new array of given elements