/* 
  Instructions:
  The parameter isWeekday is true if it is a weekday, and the 
  parameter isVacation is true if we are on vacation.
  We sleep in if it is not a weekday or we're on vacation.
  Return true if we sleep in.
*/
function canSleepIn(isWeekday, isVacation) {
    // your code here
}

// Test cases
console.log(canSleepIn(false, false) === true);  // Not a weekday and not on vacation, we can sleep in
console.log(canSleepIn(true, false) === false);  // It's a weekday and not on vacation, we cannot sleep in
console.log(canSleepIn(false, true) === true);   // Not a weekday and on vacation, we can sleep in
console.log(canSleepIn(true, true) === true);    // It's a weekday but we're on vacation, we can sleep in
