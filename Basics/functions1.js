let count = 1
function loggedIn (username = `Guest ${count}`)
{
    // Now this if block is almost useless
    if(!username)
    {
        console.log("Please Enter Your UserName")
        return 
    }

    count++
    return `${username} just logged in`;
}

console.log(loggedIn())
console.log(loggedIn())
console.log(loggedIn())

function addTwoNum(num1, num2)
{
    return num1 + num2
}

console.log(addTwoNum(3,4));
console.log(loggedIn())
console.log(loggedIn())
console.log(loggedIn())
console.log(loggedIn("Kushal"))
console.log(loggedIn())
console.log(loggedIn("Kushal"))
console.log(loggedIn("Kushal"))
console.log(loggedIn("Kushal"))
console.log(loggedIn("Kushal"))
console.log(loggedIn("Kushal"))
console.log(loggedIn("Kushal"))
console.log(loggedIn("Kushal"))
console.log(loggedIn("Kushal"))
console.log(loggedIn())