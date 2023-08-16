// const user = {
//     name : "Kush",
//     age: 18,
//     fees : 234000,
//     check : function()
//     {
//         console.log(this);
//         console.log("Background Verification started: ");
//         console.log(this.name, " is correct");
//         console.log(this.age, " age is correct");
//         console.log(this.fees, "is correct");
//         console.log("Congratulations! Application is forwarded now");
//     }
// }

// user.check()

// user.name = "Kushal"
// user.check(this)



// function chai()
// {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const drinkChai = function chai2(){
//     let users = "4"
//     console.log(this.users);
// }

// drinkChai()

const addTwoNums = (num1,num2) => {
    return num1 + num2
}

console.log(addTwoNums(2,4))

// const addThreeNums = (num1,num2,num3) => num1+num2+num3
// const addThreeNums = (num1,num2,num3) => (num1+num2+num3)

const user2 = () => ({username : "Kushal", age : 29})

console.log(user2())
console.log(user2[username]);