// Maps

const map = new Map();  
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("FR", "France")
map.set("IN", "India")
// Duplicates values are not allowed in map
//console.log(map) 

//Looping in map

for( const [key, value] of map){
    console.log(key, "=>", value);
    
}