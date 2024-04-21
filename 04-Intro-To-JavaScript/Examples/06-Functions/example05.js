// we can write sum with an intermediary variable
function sum(num1, num2) {
    const result = num1 + num2;
    return result;
}

// or without one
// function sum(num1, num2) {
//     return num1 + num2;
// }

// Here we store the return value in a variable
let total = sum(13, 27);
console.log(total);

// this is chaining, sum() will evaluate first
// and its return value will be passed to log()
console.log(sum(13, 27));