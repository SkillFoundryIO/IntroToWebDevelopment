// roll a die until a 6 is rolled.
let val = 0;

while(val != 6) {
    val = Math.floor(Math.random() * 6) + 1;
    console.log(`You roll the die, it's a ${val}`);
}

console.log("6 was rolled, the test condition is false.");