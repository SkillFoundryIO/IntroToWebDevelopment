/*
  Instructions:
  You and your date are trying to get a table at a restaurant. 
  The parameter "yourStyle" is the stylishness of your clothes, 
  in the range 0..10, and "dateStyle" is the stylishness of your 
  date's clothes. 
  
  The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. 
  
  If either of you is very stylish, 8 or more, then the result is 2 (yes). 
  
  With both of you having a style of less than 3, the result is 0 (no). 

  Otherwise, the result is 1 (maybe).
*/
function canHazTable(yourStyle, dateStyle) {
    // your code here
}

// Test cases
console.log(canHazTable(5, 10) === 2); // Yes
console.log(canHazTable(5, 2) === 0);  // No
console.log(canHazTable(5, 5) === 1);  // Maybe
console.log(canHazTable(2, 9) === 2);  // Yes, additional case
console.log(canHazTable(2, 2) === 0);  // No, additional case
