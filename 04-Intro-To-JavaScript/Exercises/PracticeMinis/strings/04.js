/*
  Instructions:
  Given a string, return true if the first instance of "x" in 
  the string is immediately followed by another "x".
*/
function doubleX(str) {
    // your code here
}

// Test cases
console.log(doubleX("axxbb") === true);  // True, first 'x' is followed by another 'x'
console.log(doubleX("axaxxax") === false); // False, first 'x' is not followed by another 'x'
console.log(doubleX("xxxxx") === true);  // True, first 'x' is followed by another 'x'
console.log(doubleX("axxaxxax") === true); // True, first 'x' is followed by another 'x'
