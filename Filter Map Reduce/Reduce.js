const arr = [1,2,3,4]

const ans = arr.reduce((acc,curr) => acc+curr,0)
const ansPro = arr.reduce((accumalator, currentValue) => accumalator*currentValue,10)

const ansSub = arr.reduce((accumalator,curr) => accumalator-curr,0)
// console.log(ansPro);
// console.log(ansSub);


const AddToCart = [
    {
        item : "Jeans",
        price : 2499
    },
    {
        item : "Shirt",
        price : 999
    },
    {
        item : "Shirt",
        price : 1959
    },
    {
        item : "Shirt",
        price : 3999
    },
    {
        item : "Shirt",
        price : 1799
    },
    {
        item : "Shirt",
        price : 900
    }

]

// const totalBill = AddToCart.reduce((acc,item) => acc+item.price,0)

// console.log(totalBill);

const totalBill = AddToCart.map((val) =>  30/100*val.price+val.price)
                            .filter((val)=> val<2500)
                            .reduce((acc,item) => acc+item,0)

console.log(totalBill);