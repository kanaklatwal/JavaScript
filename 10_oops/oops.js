const user = {
    username: "knq",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
       // console.log("Got user details from database");
       console.log(`Username: ${this.username}`);
       console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


//Constructor -> new keyword
// const promiseOne = new Promise();
// const date = new Date();
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
const userOne = User("knq", 12, true);
const userTwo = User("Kalp", 11, false);
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
// new object was created
// constructor function was called
// this keyword inject the arguments
// function