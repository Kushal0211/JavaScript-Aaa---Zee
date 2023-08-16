let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);
// console.log(Date.now());

// let timeA = Date.now();
// let timeB = Date.now(2023,7,4,17,45)

// console.log(timeB);
// console.log(timeB-timeA);

// let myTimeStamp = Date.now()
// console.log("Time -> ",myDate.getTime());
// console.log("Date -> ",myDate.getDate());
// console.log("Day -> ",myDate.getDay());
// console.log("Month -> ",myDate.getMonth());
// console.log("Year -> ",myDate.getFullYear());
// console.log("New Time -> ",myDate.toLocaleTimeString());
// console.log("Time clock 2 -> ",myDate.getHours(),"<->",myDate.getMinutes(),"<->",myDate.getSeconds(),"<->",myDate.getMilliseconds());

// console.log(``);
let newDate = new Date()

let bc = newDate.toLocaleString('default',{
    weekday : "long"
    
})

console.log(bc);
console.log(myDate);
// console.log(Date.now()); Will show me milliseconds tillnow
console.log(myDate.toJSON());