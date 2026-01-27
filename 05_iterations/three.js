//for of
//["", "", ""]
//[{},{},{}]
// for (const element of object) {
    
// }


const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    console.log(num);
}

const greetings = "Hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}


//            MAP
const map = new Map()
map.set('IN', "INDIA");
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);
/*Map(3) {
  'IN' => 'INDIA',
  'USA' => 'United States of America',
  'Fr' => 'France'
}*/

for(const [key, value] of map){
    console.log(key, ':-', value);
}
/*IN :- INDIA
USA :- United States of America
Fr :- France*/

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}
for(const [key, value] of myObject){
    console.log(key, ':-', value);
} //Error

//maps are not iterable , objects are  iterable