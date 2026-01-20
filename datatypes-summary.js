// Primitive data type
// 7 types
// String     NUmber    Boolean     null     undefined      Symbol   BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId); //false

const bigNumber = 34565435766654356754n


// Reference(Non Primitive)
// Array    Objects     Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); //bignt
console.log(typeof outsideTemp); //object
console.log(typeof score);//number
console.log(typeof myFunction);// function




//******************************************************************************************

// Stack (primitive), Heap(non primitive = reference)

let myYoutubeName = "Heythisthisthisthis"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(myYoutubeName);//Heythisthisthisthis
console.log(anotherName);//chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kanak@google.com"
console.log(userOne.email)//kanak@google.com
console.log(userTwo.email)//kanak@google.com