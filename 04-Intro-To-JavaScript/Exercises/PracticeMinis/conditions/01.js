/* 
  Instructions:
  We have two children, named a and b. The parameters aSmile and bSmile indicate if each is smiling.
  We are in trouble if they are both smiling or if neither of them is smiling.
  Return true if we are in trouble.
*/
function areWeInTrouble(aSmile, bSmile) {
    // your code here
}

// Test cases
console.log(areWeInTrouble(true, true) === true);  // Both are smiling, trouble!
console.log(areWeInTrouble(false, false) === true); // Neither is smiling, trouble!
console.log(areWeInTrouble(true, false) === false); // Only one is smiling, not trouble!
console.log(areWeInTrouble(false, true) === false); // Only one is smiling, not trouble!
