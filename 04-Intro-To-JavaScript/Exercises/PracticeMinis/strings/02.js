/*
  Instructions:
  Given tag and content strings, create the HTML string with 
  tags around the content, e.g., "<i>Yay</i>" for tag "i" and content "Yay".
*/
function makeTags(tag, content) {
    // Your code here
}

// Test cases
console.log(makeTags("i", "Yay") === "<i>Yay</i>");            // "<i>Yay</i>"
console.log(makeTags("i", "Hello") === "<i>Hello</i>");        // "<i>Hello</i>"
console.log(makeTags("cite", "Yay") === "<cite>Yay</cite>");   // "<cite>Yay</cite>"
console.log(makeTags("b", "Bold") === "<b>Bold</b>");          // Additional case, "<b>Bold</b>"
