const groceries = ["milk", "cheese", "juice", "yogurt", "eggs"];

for (let i = 0; i < groceries.length; ++i) {
    console.log(groceries[i]);
}

// to improve readability in console.log output
console.log("---------------------");

for (let i = groceries.length - 1; i >= 0; --i) {
    console.log(groceries[i]);
}
