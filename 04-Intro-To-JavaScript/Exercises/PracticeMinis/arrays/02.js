/*
  Instructions:
  Given an array of integers, return true if one of the first 4 elements in the array is a 9.
  The array length may be less than 4.
*/
function arrayFront9(numbers) {
    // your code here
}

// Test cases
console.log(arrayFront9([1, 2, 9, 3, 4]) === true);  // 9 is within the first 4 elements
console.log(arrayFront9([1, 2, 3, 4, 9]) === false); // 9 is not within the first 4 elements
console.log(arrayFront9([1, 2, 3, 4, 5]) === false); // No 9 in the array
console.log(arrayFront9([9, 2, 3]) === true);        // 9 is within the first 4 elements, array length < 4
