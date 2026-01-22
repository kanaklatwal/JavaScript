//singleton
//Object.create

//Object Literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Kalp Jeet",
    [mySym]: "myKey1",   // symbol -> []
    age : 18,
    location: " Agartala",
    email: "kalpjeet@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(typeof mySym)//Symbol
console.log(JsUser.email)//kalpjeet@google.com
console.log(JsUser["email"])//kalpjeet@google.com
console.log(JsUser["full name"])//Kalp Jeet
console.log(JsUser[mySym])//mykey1
console.log(typeof JsUser[mySym])//string

// JsUser.email = "kalpjeet@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "kalpjeet@microsoft.com"
// console.log(JsUser);
/*Output
{
  name: 'Hitesh',
  'full name': 'Kalp Jeet',
  age: 18,
  location: ' Agartala',
  email: 'kalpjeet@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(Key1): 'myKey1'
} */

JsUser.greeting = function(){
    console.log("Hello JS User");//Hello JS User
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);//Hello JS User , Hitesh
}
console.log(JsUser.greeting());//undefined
console.log(JsUser.greetingTwo());//undefined