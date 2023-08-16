// const printMessage = (function message () {
//     return function()
//     {
//         console.log("hELLO boy")
//     }
// })()

// printMessage()
// printMessage()
// printMessage()


// (function message (name) 
// {
// console.log("Hello ", name)
// })("Kushal")


// const user = {
//     name : "kush",
//     message : message2
// }

// function message2()
// {
//     console.log(`${this.name}, a very Good Morning to you!`);
// }

// user.message()
 


((name) => {
    console.log(`${this.name}, hello `);
})("kushal");

// remember to use ; as it gets confuse while using two iifes
// Undefined hello

((name) => {
    console.log(`${name}, hello `);
})("kushal")
// kushal, hello 