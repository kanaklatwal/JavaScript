var c = 300
let a =400
if(true){   // {}are scope
    let a= 10
    const b =20
    var c =30
    console.log("Inner: ",a);//10
}
console.log(a)//400
console.log(c)//30
//console.log(b)//error

function one(){
    const username = "kalpjeet"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);// Error
    two()
}
if(true){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = " youtube"
        console.log(username  + website); //hitesh youtube
    }
   // console.log(website); error
}
//console.log(username);  error


//++++++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num+1
}
console.log(addone(5))//6

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5)) //7