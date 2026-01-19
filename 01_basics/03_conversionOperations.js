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


// ****************Operations****************
let value = 3
let negValue = -value
console.log(negValue);//-3

/*
console.log(2+2)//4
console.log(2-2)//0
console.log(2*2)//4
console.log(2**2)//4
console.log(2/3)//0.6666666666666
console.log(2%3)//2
*/

let str1 = "hello"
let str2 = " Hitesh"
let str3 = str1+str2
console.log(str3);

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
console.log("1"+"2"+"2")//122

console.log(+true)//1
console.log(+"")//0

// let num1, num2, num3
// num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++
console.log(gameCounter)//101