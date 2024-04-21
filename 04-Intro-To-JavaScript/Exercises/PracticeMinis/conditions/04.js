/*
  Instructions:
  Given an integer n, return the absolute value of the difference between n and 21,
  except return double the absolute value of the difference if n is over 21.
*/
function diff21(n) {
    // your code here
}

// Test cases
console.log(diff21(19) === 2);  // n less than 21
console.log(diff21(10) === 11); // n less than 21
console.log(diff21(21) === 0);  // n equal to 21
console.log(diff21(22) === 2);  // n greater than 21, double the difference
console.log(diff21(25) === 8);  // n greater than 21, double the difference
