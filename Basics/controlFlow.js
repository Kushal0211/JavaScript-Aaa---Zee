// let user  = []

// if(user)
// {
//     console.log("Something is inside user variable");
// }

// // falsy values
// // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// //truthy values
// // "0", 'false', " ", [], {}, function(){}

// if(user.length === 0)
// {
//     console.log("Length == 0");
// }
// console.log(user.length)


const obj = {}

if(Object.keys(obj).length === 0)
{
    console.log("Length - 0")
}

let myPencil = 89


myPencil < 100 ? console.log("Price is less than 100") : console.log("Price is more than 100")

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

let price = 5

switch(price){
    case 1 : console.log("1 is printed");
            break;
    case 2: console.log("2 is printed");
            break;
    default:
        console.log("5 is printed");
        break;
}