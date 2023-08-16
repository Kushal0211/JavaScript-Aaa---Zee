let num1 = 23
let num2 = num1

console.log(num2);
console.log(num1);

num2 = 4
console.log(num2);
console.log(num1);


let user1 = {
    email : "kushal@google.com",
    age:19,
    id : 1
}

let user2 = user1

user2.email = "Krishna@google.com"
console.log(user1.email);
console.log(user2.email);