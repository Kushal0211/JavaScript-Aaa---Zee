const amount = new Number(30000)
// console.log(amount);

console.log(amount.toString().length)
console.log(typeof amount);


const rank = 23.5623444444444444
// console.log(rank.toFixed(2));


const points = 123
// console.log(points.toPrecision(2));

const rupee = 10000000000

// console.log(rupee.toLocaleString('en-IN'));

const value = 10.4523
// console.log(Math.round(value)); --- 10
// console.log(Math.floor(value)); -------10
// console.log(Math.ceil(value));--------11

// console.log(Math.abs(-3321)); --- 3321
// console.log(Math.abs(222)); ---- 22
// console.log(Math.max(12,34,23,11,23,11)); ---- (34)
// console.log(Math.min(-1,-2,-3,-4,0,2)); --- (-4)

// console.log(Math.MIN_VALUE);
// console.log(Math.MAX_VALUE);

// const a = Math.random()
// console.log(a);

let b = Math.random()
console.log(b);
// console.log(Math.floor(b*10) +1 );

let max = 20
let min = 10

console.log(Math.floor(b*(max-min+1))+ min);
