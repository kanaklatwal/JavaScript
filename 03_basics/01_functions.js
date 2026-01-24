function sayName(){
    console.log("H");
    console.log("A");
    console.log("T")
    console.log("T");
    console.log("R");
    console.log("I");
}

sayName()
// H
// A
// T
// T
// R
// I

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,4)//7
addTwoNumbers(3,"4")//34
addTwoNumbers(3,null)//3
const result = addTwoNumbers(3,5)//8
console.log("Result: ", result);//Result:  undefined

function add2number(number1, number2){
    let result = number1 + number2
    return result;
}
const r = add2number(7,8)
console.log("Result: ", r);//Result:  15

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
    }
      return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))//hitesh just logged in
console.log(loginUserMessage())//undefined just logged in

function calculateCartPrice(...num1){
     return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))//[ 200, 400, 500, 2000 ]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)//Username is hitesh and price is 199
handleObject({
    username: "sam",
    price: 399
})//Username is sam and price is 399

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200, 400, 500, 1000]))//400