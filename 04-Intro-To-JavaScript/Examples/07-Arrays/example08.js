const food = ["🍉", "🍕", "🍗", "🥞", "🍩"];

let newLength = food.unshift("🌮");

console.log(food);        // [ '🌮', '🍉', '🍕', '🍗', '🥞', '🍩' ]
console.log(newLength);   // 6

let element = food.shift();
console.log(element);     // "🌮"
console.log(food.length); // 5