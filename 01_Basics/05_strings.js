const name = "Ronak"
const repoCount = 50

// console.log(name + repoCount + "Value"); Old way 

// Backticks is used in modern days example:

console.log(`${name} has ${repoCount} repositories`) 

//Another way of creating a string
const name2  = new String('Ronak')
console.log(name2);
console.log(name2.charAt(1));
console.log(name2.toUpperCase());
console.log(name2.indexOf('k'));

const name3 = "   Kadam   "
console.log(name3);
console.log(name3.trim());

const url = "https://ronakkadam.com%20"
console.log(url.replace('%20','-'));
console.log(url.includes('ronak'));

const gameName = "Red$Dead$Redemption"
const game = "God of War Ragnarok"
console.log(gameName.split('$'));
console.log(game.split(' '));