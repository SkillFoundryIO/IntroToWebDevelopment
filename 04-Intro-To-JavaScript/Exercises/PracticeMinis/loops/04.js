/*
  Instructions:
  This is tricky!
  
  Given an array of integers, return true if the array contains a 2, 7, 1 pattern: a value, 
  followed by the value plus 5, followed by the value minus 1. Essentially, looking for a 
  number, that number plus 5, and then that first number minus 1, in that order.
*/
function pattern51(numbers) {
    // Your code here
}

// Test cases
console.log(pattern51([1, 2, 7, 1]) === true);  // True, matches pattern
console.log(pattern51([1, 2, 8, 1]) === false); // False, does not match pattern
console.log(pattern51([2, 7, 1]) === true);     // True, matches pattern
console.log(pattern51([10, 15, 9]) === true);   // Additional case, matches pattern
console.log(pattern51([1, 2, 3, 4, 5]) === false); // Additional case, does not match pattern
