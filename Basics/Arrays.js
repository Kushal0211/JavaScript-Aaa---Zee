// const names = [23, 34, 44, 22, 21, 11, 2]

// console.log(names[4]);

// let myArr = new Array("Kush", "Saksham", "Rohit", "Virat", "Krish")
// console.log(myArr[2]);

// const arr1 = ["Kush", "Himesh"]
// const arr2 = ["Kush", "Fitesh"]
// const arr3 = ["Mohit", "Kush"]

// const arr4 = new Array(23, 32)

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(10)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join(12,23)
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

// console.log("******************* SLICE FUNCTION ********************************");

// console.log("myArr -> ",myArr);

// const my1 = myArr.slice(1,3)
// console.log("sliced section is -> ",my1);
// console.log("checking Myarr again",myArr);

// console.log("****** SPLICE FUNCTION ***SPLICE FUNCTION**************");

// console.log("myArr is -> ",myArr)
// const spliceMyarr2 = myArr.splice(1,3)
// console.log("spliced array is -> ",spliceMyarr2);
// console.log("After running splice checking myArr",myArr);


const cars = ["Verna","City","i20","Fortuner"]
const bikes = ["HayaBuza", "Davidson"]

cars.push(bikes);
console.log(cars);

console.log(typeof cars[2]);
console.log(typeof cars[4]);

cars.pop();

console.log(cars.concat(bikes))

console.log(cars);

console.log("====== SPREAD OPERATOR====================");

const nums1 = [1,2,3,4,5,89]
const vehicles = [...cars,...bikes,...nums1]
console.log(vehicles);

console.log("==========FLAT METHOD ===============");

const anotherArr = [1,2,[3,4,5],6,[7,[8,9,10,[11,12,13]]]]

console.log(anotherArr.flat(Infinity));

console.log("============METHODS OF AN ARRAY============");

// console.log(Array.isArray("Kushal Pandita")); -- false because given str is not an array
// console.log(Array.from("Kushal Pandita")); 
// below is the output
// [
//     'K', 'u', 's', 'h',
//     'a', 'l', ' ', 'P',
//     'a', 'n', 'd', 'i',
//     't', 'a'
// ]

console.log(Array.isArray({name:"kush"}))
console.log(Array.from({name:"kush"}));

let a = 10
let b = 20
let c = 30

let d = [23,45,54]
let e = "Kushal"
let f = false
let g = Symbol('Hunny')

console.log(Array.of(a,b,c));

console.log(Array.of(a,b,c,d,e,f,g));