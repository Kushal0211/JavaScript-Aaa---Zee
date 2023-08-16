const myobj = {
    name : "Krish",
    age : 25,
    batch : 5,
    id : 5
}

for(const key in myobj)
{
    // console.log(`${key} -> ${myobj[key]}`);
}

const myNewArr = ["Kush","Sush","Lush"]

for(const key in myNewArr)
{
    // console.log(`${key} -> ${myNewArr[key]}`);
    // 0 -> Kush
    // 1 -> Sush
    // 2 -> Lush
}

const map = new Map()
map.set('JK','Jammu')
map.set('Punjab','Chandigarh')
map.set('Delhi','DL')


// for(const key in map)
// {
//     console.log(`${key}`); not iterable
// }