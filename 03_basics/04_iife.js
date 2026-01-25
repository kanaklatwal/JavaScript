// Immediately Invoked Function Expressions (IIFE)  => ()()
//IIFE => those functions who executes immediately and sometimes global scopes ke variables se problem hoti hai to global scope ke pollution se htane ke liye IIFE ka use hota hai
// 2 IIFE ek sath ; se likhte hai
(function chai(){
    console.log(`DB CONNECTED`);
})();//DB CONNECTED
//chai()//DB CONNECTED
( function aurcode() {
    console.log(`DB CONECTED TWO`);
})();//DB CONECTED TWO

( () => {
    console.log(`DB CONNECTED THREE`);
})();//DB CONNECTED THREE

( (name) => {
    console.log(`DB CONNECTED FIVE ${name}`);
}) ('Kalpjeet'); //DB CONNECTED FIVE Kalpjeet

