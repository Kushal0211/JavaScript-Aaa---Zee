// Summary of the Below Code 
// 1. In nested functions , lets say outer function inside that we have Inner function

// 2. Inner functions variables can use outer function variables bcz func2 var are block scope but outer func vars cant use Inner v=func vars

// function one(){
//     const user1 = "Kushal"
//     const num1 = 10
    
//     function two(){
        
//         const user2 = "Krishna"
//         const num2 = 7
        
//         function three(){
//             const user3 = "Zeeee"
//             const num3 = 1
//             console.log(user3);
//             console.log((num1));
//         }
//         three()
//         console.log(user1);
        
//     }

//     // console.log(two())
//     two()
// }

// one()

console.log("-----------------------------");

num()
function num ()
{
    console.log("Num is 7");
}

console.log("-----------------------------");


valToPrint()
const valToPrint = function num1()
{
console.log("Num1 is 10");
}

console.log(ans);