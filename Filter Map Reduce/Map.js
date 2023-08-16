const myNum = [1,2,3,4,5,6,7,8,9]

// const newArr = myNum.map((val)=> val*10)

// console.log(newArr);

const newArr = myNum.map((val) => val*10)
                    .map((val) => val+1)
                    .map((val) => val+9)
                    .filter((val) => val>40)

// console.log(newArr);
// console.log(myNum);


const newArr2 = myNum.map((val) => val*10).map((val) => val*100).filter((val)=> val>5000)

console.log(newArr2);