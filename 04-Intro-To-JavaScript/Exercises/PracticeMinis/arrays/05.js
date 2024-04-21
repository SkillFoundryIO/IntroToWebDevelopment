/*
  Instructions:
  Given an array of integers, return true if the array is length 1 or more, 
  and the first element and the last element are equal.
*/
function sameFirstLast(numbers) {
    // your code here
}

// Test cases
console.log(sameFirstLast([1, 2, 3]) === false);    // First and last elements are different
console.log(sameFirstLast([1, 2, 3, 1]) === true);  // First and last elements are the same
console.log(sameFirstLast([1, 2, 1]) === true);     // First and last elements are the same
console.log(sameFirstLast([7]) === true);           // Only one element, which is implicitly the same
