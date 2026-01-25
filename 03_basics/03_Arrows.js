const user = {
    username: "kalpjeet",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);//
//         kalpjeet , welcome to website
//           {
//               username: 'kalpjeet',
//               price: 999,
//               welcomeMessage: [Function: welcomeMessage]
//           }
//          sam , welcome to website
//            {
//                username: 'sam',
//                 price: 999,
//                 welcomeMessage: [Function: welcomeMessage]
//                }
    }
}
user.welcomeMessage()//kalpjeet , welcome to website
user.username = "sam"
user.welcomeMessage()//sam , welcome to website
console.log(this);//{}

function chai(){
    let username ="kalpjeet"
    console.log(this);
    //console.log(this.username) //undefined
}
chai()
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
} */

//   const chai = function(){
//     let username ="kalpjeet"
//     console.log(this.username) //undefined
//   }

// const chai = () =>{
//     let username = "kalpjeet"  
//     console.log(this.username);//undefined
//     console.log(this);//{}
// }
//chai()

const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(4, 7))//11

//const addTwo = (num1, num2) => num1 + num2
//console.log(addTwo(4, 7))//11

const addTwo3 = (num1, num2) => ({username: "hitesh"})
console.log(addTwo3(3,4))//{ username: 'hitesh' }

const myArray = [2, 5, 3, 7, 8]
myArray.forEach(function () {})
myArray.forEach(() => {})
