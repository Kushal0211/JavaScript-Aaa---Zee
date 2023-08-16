const arr2 = ["Kush","Sush","Lush"]

arr2.forEach(function(val){
    // console.log(val);
})


arr2.forEach((item)=>{
    // console.log(item);
})


function PrintElementOfArray(val){
    console.log(val);
}

// arr2.forEach(PrintElementOfArray)


arr2.forEach(function (val,index,arr){
    // console.log(`${val} === ${index} === ${arr}`);
})

arr2.forEach((item,ind,array)=>{
    // console.log(`${item} === ${ind} === ${array}`);
})


const myMobile = [
    {
        name : "I Phone XV",
        price : 6700000
    },
    {
        name : "I Phone XVI",
        price : 5700000
    },
    {
        name : "I Phone XVU",
        price : 6200000
    },
    {
        name : "I Phone XVG",
        price : 670880
    },
    {
        name : "I Phone XVD",
        price : 67067000
    },
    {
        name : "I Phone XVB",
        price : 6707800,
        stock : "Not avialable"
    }
]

myMobile.forEach((val)=>{
    console.log(`${val.name} -> Price = ${val.price}` );
    console.log();
    console.log(`${val.stock}`)
})

// Ans of the Above code 

// I Phone XV -> Price = 6700000
// undefined

// I Phone XVI -> Price = 5700000
// undefined

// I Phone XVU -> Price = 6200000
// undefined

// I Phone XVG -> Price = 670880
// undefined

// I Phone XVD -> Price = 67067000
// undefined

// I Phone XVB -> Price = 6707800
// Not avialable