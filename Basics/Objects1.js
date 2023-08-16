
const mySym = Symbol("Progress")


// This is How we create Objects 
const user = {
    name : "Kushal",
    age : 18,
    edu : "BE",
    "exp" : 0,
    marks : [9,9,8,9,9,9,10,10],
    cgpa : 8.9,
    [mySym] : "All done"

}


// console.log(typeof user.name);
// console.log(typeof user.age);
// console.log(typeof user["edu"]);
// console.log(user["exp"]);
// console.log(user["marks"]);
// console.log(typeof user["cgpa"]);
// console.log(user[mySym]);

// console.log(typeof user[mySym]);

user.name = "Kush"

// console.log(user);


// ===============================================================

// The Object.freeze() static method freezes an object. 
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 

// A frozen object can no longer be changed: 

// new properties cannot be added, existing 
// properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. 

// ===============================================================

// Object.freeze(user)
// user.name = "Kush2"
// console.log(user);

// user.age = 99
// console.log(user);


// ===========================================================

// ====================Writing Functions=======================

// user.greeting = function()
// {
//     console.log("Hey ! Good Morning!");
// }

// user.greetingByName = function()
// {
//     console.log(`Hello! ${this.name} Good Morning`);
// }
// console.log(user.greetingByName());

// Testing 

const NmySym = Symbol("key1")
const hello = Symbol("100")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [NmySym]: 12,
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser[NmySym]);
// console.log(typeof JsUser[NmySym]) 
