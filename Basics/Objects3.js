// /*



// const object1 = {
//     prop: 'exists',
//     FullName: "Kushal"
//   };
  
//     console.log(Object.hasOwn(object1, 'prop'));
//     // Expected output: true

//     console.log(Object.hasOwn(object1, 'FullName'));
//     // Expected output: true


//     console.log(Object.hasOwn(object1, 'toString'));
//   // Expected output: false

//   */

// const object1 = {};
// object1.property1 = 42;

// console.log(object1.hasOwnProperty('property1'));
// // Expected output: true

// console.log(object1.hasOwnProperty('toString'));
// // Expected output: false

// console.log(object1.hasOwnProperty('hasOwnProperty'));
// // Expected output: false


const course = {
  name : "Kushal",
  courseName : "JavaScript with Fun",
  age : 20,
  Channel : "YouTube: Code With Kushal "
}

const {courseName : cName} = course
// console.log(courseName);

// console.log(cName);

// const {Channel : YouTubeChannel} = course
// console.log(Channel);
// console.log(YouTubeChannel);


const {Channel} = course
console.log(Channel);