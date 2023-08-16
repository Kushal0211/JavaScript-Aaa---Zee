let val1 = 100.3
let val2 = 100
let val3  = true;
let val4 = "Kushal"
let val5 = Symbol('Kushal')
let val6 = 100000000000000000000000000n
let val7 = null
let val8 ;


console.log(typeof val1)
console.log(typeof val2)
console.log(typeof val3)
console.log(typeof val4)
console.log(typeof val5)
console.log(typeof val6)
console.log(typeof val7)
console.log(typeof val8)


const list = ["Kushal", "Rio", "Anshuman", "Kunal", "Kane"];

const myobj = {
    name: "Kushal",
    age: 18,
    college: "Future Engg & Research, New Delhi",
    subject : "JavaScript"
}

console.log(myobj)
console.log(list);

const myFunc = function() {
    console.log("Hello! Inside function");
}

myFunc()

console.log(typeof myFunc);
console.log(typeof list);
console.log(typeof myobj);

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.