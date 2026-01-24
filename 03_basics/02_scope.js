var c = 300
let a =400
if(true){
    let a= 10
    const b =20
    var c =30
    console.log("Inner: ",a);//10
}
console.log(a)//400
console.log(c)//30
console.log(b)//error