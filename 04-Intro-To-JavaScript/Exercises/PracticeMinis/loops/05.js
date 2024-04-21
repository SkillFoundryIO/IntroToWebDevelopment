/*
  Instructions:
  Given an array of integers, return the number of times that 
  two 6's are next to each other in the array, as well as instances 
  where the second "6" is actually a 7.
*/
function array667(numbers) {
    // Your code here
}

// Test cases
console.log(array667([6, 6, 2]) === 1);    // One pair of 6's
console.log(array667([6, 6, 2, 6]) === 1); // One pair of 6's
console.log(array667([6, 7, 2, 6]) === 1); // One 6 followed by a 7
console.log(array667([6, 6, 7, 6, 7]) === 3); // Additional case, multiple pairs
