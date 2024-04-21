/*
  Instructions:
  Given a string, return a version where the first 2 characters are moved to the end of the string. 
  If the string length is less than 2, return the original string.
*/
function rotateLeft2(str) {
    // Your code here
}

// Test cases
console.log(rotateLeft2("Hello") === "lloHe");  // "lloHe"
console.log(rotateLeft2("java") === "vaja");    // "vaja"
console.log(rotateLeft2("Hi") === "Hi");        // "Hi", unchanged due to length
console.log(rotateLeft2("abc") === "cba");      // Additional case, should be "bca"
