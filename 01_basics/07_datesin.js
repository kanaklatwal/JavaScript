// Dates
// in js months start from 0 i.e. 0 = january
let myDate = new Date();
console.log(myDate);//2026-01-21T06:15:02.115Z
console.log(myDate.toString());//Wed Jan 21 2026 06:15:59 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Wed Jan 21 2026
console.log(myDate.toISOString());//2026-01-21T06:15:59.032Z
console.log(myDate.toJSON());//2026-01-21T06:15:59.032Z
console.log(myDate.toLocaleDateString());//1/21/2026
console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myNewDate = new Date(2023, 0, 23, 5, 3)
console.log(myNewDate.toLocaleString());//1/23/2023, 5:03:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp)//1768976695568

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time is ${newDate.toLocaleString()}`);//3 and the time is 1/21/2026, 6:32:25 AM

newDate.toLocaleString('default', {
    weekday: "long"
})