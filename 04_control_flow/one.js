//if

const isUserLogIn = true;

// const temperature = 41
// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//    console.log("temperature is greater than 50") 
// }

  //   <,>,<=,>=,==,!=, ===(=== check datatype also)
const score = 200
if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`)//User power: fly
}

// console.log(`User power: ${power}`)//ERROR

const balance = 1000
//if (balance>500) console.log ("test") //test
if(balance < 500){
    console.log("lesss than 500");
} else if (balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 750");
}else{
    console.log("less than 1200");//less than 1200
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");//Allow to buy course
}

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User Logged In")//User Logged In
}