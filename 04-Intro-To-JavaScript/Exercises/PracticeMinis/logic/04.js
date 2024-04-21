/*
  Instructions:
  Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ..., 6=Sat, 
  and a boolean indicating if we are on vacation, return a string of 
  the form "7:00" indicating when the alarm clock should ring. 
  
  Weekdays, the alarm should be "7:00" and on the weekend it 
  should be "10:00". Unless we are on vacation -- then on weekdays 
  it should be "10:00" and weekends "off".
*/
function alarmClock(day, vacation) {
    // Your code here
}

// Test cases
console.log(alarmClock(1, false) === "7:00"); // Weekday, not vacation
console.log(alarmClock(5, false) === "7:00"); // Weekday, not vacation
console.log(alarmClock(3, true) === "10:00"); // Weekday, vacation
console.log(alarmClock(0, false) === "10:00"); // Sunday, not vacation, additional case
console.log(alarmClock(6, true) === "off");    // Saturday, vacation, additional case
