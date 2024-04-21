/*
  Instructions:
  Given an array of integers, return true if the number 6 is the first or last element in the array.
  The array will be at least 1 element long.
*/
function firstLast6(numbers) {
    // your code here
    return numbers[0] === 6 || numbers[numbers.length - 1] === 6;
}

// Test cases
console.log(firstLast6([1, 2, 6]) === true);         // 6 is the last element
console.log(firstLast6([6, 1, 2, 3]) === true);      // 6 is the first element
console.log(firstLast6([13, 6, 1, 2, 3]) === false); // 6 is neither first nor last
console.log(firstLast6([6]) === true);               // 6 is both the first and last (only element)
