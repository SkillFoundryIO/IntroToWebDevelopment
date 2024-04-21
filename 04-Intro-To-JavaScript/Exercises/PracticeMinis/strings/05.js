/*
  Instructions:
  Given a string, return true if "bad" appears starting at index 0 or 1 in the string,
  such as with "badxxx" or "xbadxx" but not "xxbadxx".
*/
function hasBad(str) {
    // Your code here
}

// Test cases
console.log(hasBad("badxx") === true);  // "bad" starts at index 0
console.log(hasBad("xbadxx") === true); // "bad" starts at index 1
console.log(hasBad("xxbadxx") === false); // "bad" does not start at index 0 or 1
console.log(hasBad("abade") === false);   // Additional case, "bad" not at index 0 or 1
