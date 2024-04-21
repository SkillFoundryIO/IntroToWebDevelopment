const food = ["🍉", "🍕", "🍗", "🥞", "🍩"];

let num = food.indexOf("🍕");
console.log(num); // 1

console.log(food.indexOf("🥞")); // 3
console.log(food.indexOf("🥐")); // -1

const nums = [1, 2, 2, 1, 2, 1];
console.log(nums.indexOf(1, 2));

// find the first 2
let found = nums.indexOf(2);

// so long as we find a match, keep going
while(found != -1)
{
    console.log(`There is a 2 at index ${found}.`)
    // move to the next index
    found++; 
    // search starting at the next index
    found = nums.indexOf(2, found); 
}

console.log("We found no more 2s.");