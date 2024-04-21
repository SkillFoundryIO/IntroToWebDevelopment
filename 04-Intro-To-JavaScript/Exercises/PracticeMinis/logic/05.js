/*
  Instructions:
  This one is tricky!

  Given three non-negative integers a, b, and c, return true if two or
  more of them have the same rightmost digit.
*/
function lastDigit(a, b, c) {
    // Your code here
}

// Test cases
console.log(lastDigit(23, 19, 13) === true); // True, two numbers end in '3'
console.log(lastDigit(23, 19, 12) === false); // False, all different rightmost digits
console.log(lastDigit(23, 19, 3) === true);  // True, two numbers end in '3'
console.log(lastDigit(20, 30, 40) === true);  // Additional case, all end with '0'
console.log(lastDigit(21, 22, 23) === false); // Additional case, all different rightmost digits
