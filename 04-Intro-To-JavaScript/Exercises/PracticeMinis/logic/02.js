/*
  Instructions:
  The children are playing outside if the temperature is 
  between 60 and 90 (inclusive). 

  However, if it is summer, then the upper limit is 100 instead of 90. 
  
  Given an int temperature and a boolean isSummer, return true if the children play outside.
*/
function playOutside(temp, isSummer) {
    // your code here
}

// Test cases
console.log(playOutside(70, false) === true);  // Not summer, within limits
console.log(playOutside(95, false) === false); // Not summer, too hot
console.log(playOutside(95, true) === true);   // Summer, within limits
console.log(playOutside(50, false) === false); // Too cold, additional case
console.log(playOutside(50, true) === false);  // Too cold, even in summer, additional case
