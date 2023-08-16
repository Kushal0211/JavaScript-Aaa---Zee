let myNewArr = [1,2,3,4,5,6,7]

const vals  = myNewArr.forEach ((num)=> {return num})

// console.log(vals);

const newVals = myNewArr.filter((num) => num>4)

// console.log(newVals);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const AddBooksToCart = books.filter((book) => book.publish > 2000)

// console.log(AddBooksToCart);

const userBooks = books.filter((book) => book.publish >2000 && book.genre === "Science")

// console.log(userBooks);

let teamScore = [
    {player : "Virat", runs : 185, balls : 115},
    {player : "Rohit", runs : 5, balls : 3},
    {player : "Gill", runs : 35, balls : 23},
    {player : "Iyyer", runs : 50, balls : 50},
    {player : "SKY", runs : 11, balls : 15}
]


const manOfTheMatch = teamScore.filter((val)=> {return val.runs>100; val.player})
// const manOfTheMatch = teamScore.filter(function (val) {
//   if(val.runs>100)
//   {
//     return val.player
//   }
// })
console.log(manOfTheMatch);