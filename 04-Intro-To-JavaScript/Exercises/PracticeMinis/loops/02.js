/*
  Instructions:
  Given a string and a non-negative int n, we'll say that the front of 
  the string is the first 3 chars, or whatever is there if the string 
  is less than 3 characters. Return n copies of the front.
*/
function frontTimes(str, n) {
    // your code here
}

// Test cases
console.log(frontTimes("Chocolate", 2) === "ChoCho");    // "ChoCho"
console.log(frontTimes("Chocolate", 3) === "ChoChoCho"); // "ChoChoCho"
console.log(frontTimes("Abc", 3) === "AbcAbcAbc");       // "AbcAbcAbc"
console.log(frontTimes("Ab", 3) === "AbAbAb");           // Less than 3 chars, repeat whole string
