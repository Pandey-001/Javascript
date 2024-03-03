// Dates

let myDate = new Date() // give present date and time but weird syntax
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // will give time in millisecond from a fixed time like 1970 given in the ecma documents;

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date() 
console.log(newDate);
// console.log(newDate.getMonth() + 1);// get month make index 0 like 0 means january so to make it user understandable we add 1 so january will give 1
// console.log(newDate.getDay()); // index 0 follows 0 means sunday

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

let presentDate = new Date();
console.log(presentDate.getTime()); // will give time in millisecond of date specified;
let nowTime =  Date.now();  // will give time in millisecond of date specified;
console.log(nowTime-myCreatedDate.getTime()); // assume now time is exit time in airbnb and myCreatedDate is checkin time and by substracting both we can calculate amount of time customer has to be built;
