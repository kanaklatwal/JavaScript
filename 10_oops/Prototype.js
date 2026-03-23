let myName = "knhhh     "
console.log(myName.length);//10

let myHeros = ["thor", "spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman : "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.knhhh = function(){
    console.log(`knhhh is present in all object`);
}

Array.prototype.heyKnhhh = function(){
    console.log(`Knhhh says hello`);
}

myHeros.heyKnhhh();
myHeros.knhhh();



//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);//ChaiAurCode 
    console.log(`${this.name}`);//undefined
    console.log(`True Length is : ${this.trim().length}`);//True Length is : 11
}

anotherUsername.trueLength()
//"knmj".trueLength()