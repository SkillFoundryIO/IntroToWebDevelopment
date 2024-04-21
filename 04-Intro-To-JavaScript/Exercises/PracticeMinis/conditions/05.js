/*
  Instructions:
  We have a loud talking parrot. The "hour" parameter is the 
  current hour time in the range 0..23. We are in trouble if 
  the parrot is talking and the hour is before 7 or after 20.

  Return true if we are in trouble.
*/
function parrotTrouble(isTalking, hour) {
    // your code here
}

// Test cases
console.log(parrotTrouble(true, 6) === true);  // Talking before 7
console.log(parrotTrouble(true, 7) === false); // Talking at 7, not trouble
console.log(parrotTrouble(false, 6) === false); // Not talking before 7, not trouble
console.log(parrotTrouble(true, 21) === true); // Talking after 20
console.log(parrotTrouble(false, 21) === false); // Not talking after 20, not trouble
