const food = ["🍉", "🍕", "🍗", "🥞", "🍩"];

let newLength = food.push("🥗");

console.log(food);        // [ '🍉', '🍕', '🍗', '🥞', '🍩', '🥗' ]
console.log(newLength);   // 6

let element = food.pop();
console.log(element);     // "🥗"
console.log(food.length); // 5