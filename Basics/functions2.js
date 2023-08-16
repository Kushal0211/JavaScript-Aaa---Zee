// function myShoppingCartItems(...items){
//     return items 
// }

// console.log(myShoppingCartItems("H&M T-shirt","Jeans-BoysX","Nike 700 SportsShoes","Peter England Shirt XXL"));


// const customer1ShoppingDetails = {
//     item1: "Nike 700 Air Spikes Shoes",
//     price : 7890,
//     Size : 10,
//     Discount: 30
//   }
  
function CustomerDetails(newObject)
  {
    console.log(`Item 1 Name - ${newObject.item1} 
Item 1 Price ${newObject.price}
Item 1 Size ${newObject.Size}
Item 1 Discount ${newObject.Discount}` )
  }
  
//   CustomerDetails(customer1ShoppingDetails)
// CustomerDetails({
//     item1: "Nike 8X0 Air Spikes Shoes",
//     price : 7890,
//     Size : 10,
//     Discount: 30
//   })

const myNewArray = [200,500,600,700]

function PrintElementOfArray(FullArray)
{
    // console.log(FullArray[2]);
    return FullArray[2]
}
// PrintElementOfArray(myNewArray)
console.log(PrintElementOfArray(myNewArray));