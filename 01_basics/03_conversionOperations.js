let score = 33
console.log(typeof score) //number
let SScore = "33abc"
console.log(typeof SScore); //string
let valueInNumber = Number(SScore)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);// NaN

//"33"=> 33
//"33abc" => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true 
// true => 1; false => 0
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber)// string