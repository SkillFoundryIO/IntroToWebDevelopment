const colors = ["magenta", "violet", "green"];

const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// these elements do not exist
//  both statements log undefined
console.log(colors[24]);
console.log(colors[-32]);

// reassign "violet" to "purple"
colors[1] = "purple";
console.log(colors[1]);