/*
  Instructions:
  Given a string, return a new string made of every other 
  character starting with the first, so "Hello" yields "Hlo".
*/
function everyOther(str) {
    // your code here
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        result += str[i];
    }
    return result;
}

// Test cases
console.log(everyOther("Hello") === "Hlo");  // "Hlo"
console.log(everyOther("Hi") === "H");       // "H"
console.log(everyOther("Heeololeo") === "Hello"); // "Hello"
console.log(everyOther("abcdefg") === "aceg");    // Additional test case, "aceg"
