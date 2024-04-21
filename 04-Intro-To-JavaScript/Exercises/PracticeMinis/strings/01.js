/*
  Instructions:
  Given two strings, a and b, return the result of putting 
  them together in the order abba, 
  e.g. "Hi" and "Bye" returns "HiByeByeHi".
*/
function abba(a, b) {
    // Your code goes here
}

// Test cases
console.log(abba("Hi", "Bye") === "HiByeByeHi");          // "HiByeByeHi"
console.log(abba("Yo", "Alice") === "YoAliceAliceYo");    // "YoAliceAliceYo"
console.log(abba("What", "Up") === "WhatUpUpWhat");       // "WhatUpUpWhat"
console.log(abba("x", "y") === "xyyx");                   // Additional case, "xyyx"
