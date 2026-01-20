const name = "Kanak"
const repoCount = 50

console.log(name + repoCount + " Value");//Kanak50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output:  Hello my name is Kanak and my repo count is 50
const gameName = new String('hiteshhc')
console.log(gameName[0]); //h
console.log(gameName);// [String: 'hiteshhc']
console.log(gameName.__proto__);//{}
console.log(gameName.length);//8

const newString = gameName.substring(0,4)
console.log(newString); //hite

const anotherString = gameName.slice(-8,4);
console.log(anotherString) //hite

const newStringOne = "   hitesh   "
console.log(newStringOne);//   hitesh   
console.log(newStringOne.trim());//hitesh

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))//https://hi
//  tesh.com/hitesh-choudhary
console.log(url.includes('hitesh'))//true
console.log(gameName.split('-'));//[ 'hiteshhc' ]