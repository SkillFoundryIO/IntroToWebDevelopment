/*
  Instructions:
  You are driving a little too fast, and a police officer stops you. 
  Write code to compute the result, encoded as an int value: 0=no ticket, 
  1=small ticket, and 2=big ticket. 
  
  If speed is 60 or less, the result is 0. 
  If speed is between 61 and 80 inclusive, the result is 1. 
  If speed is 81 or more, the result is 2. 
  
  Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
*/
function caughtSpeeding(speed, isBirthday) {
    // Your code here
}

// Test cases
console.log(caughtSpeeding(60, false) === 0);  // No ticket
console.log(caughtSpeeding(65, false) === 1);  // Small ticket
console.log(caughtSpeeding(65, true) === 0);   // No ticket, birthday adjustment
console.log(caughtSpeeding(85, false) === 2);  // Big ticket, additional case
console.log(caughtSpeeding(85, true) === 1);   // Small ticket, birthday adjustment, additional case
