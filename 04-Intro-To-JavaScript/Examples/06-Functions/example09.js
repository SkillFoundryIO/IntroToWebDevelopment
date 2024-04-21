// random number between 1 and 10
let num = Math.floor(Math.random() * 10) + 1; 

if(num % 2 == 0)
{
    let message = `${num} is even`;
}

// error, message is not defined
console.log(message);