const arr = [10,23,45,66]

for (const num of arr)
{
    // console.log(num); -- ans - 10,23,45,66
}

const myWord = "Hello Kushal"
for(const letter of myWord)
{
    // console.log(letter); 
}

const map = new Map()

map.set('JK','Jammu')
map.set('Punjab','Chandigarh')
map.set('Delhi','DL')


for(const key of map)
{
// console.log(key); 
// [ 'JK', 'Jammu' ]
// [ 'Punjab', 'Chandigarh' ]
// [ 'Delhi', 'DL' ]
}

// for(const [Key,value] of map)
// {
//     console.log(Key)
//     console.log(`${Key} -> ${value}`);
//     console.log(value);
//     console.log();
// }

const myObj = {
    name:"kushal",
    age: 19,
    class: "PG"
}

// for(const [key,val] of myObj)
// {
//     console.log(`key -> ${key} and Val -> ${val}`);
// Till date every method fails for this
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value); Also not working
    
}