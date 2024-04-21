// gets a random number between 1 and 5.
let num = Math.floor(Math.random() * 5) + 1; 

switch(num) {
    case 1:
    case 2:
    case 3:
        console.log(`${num} is between 1 and 3.`);
        break;
    case 4:
        console.log(`${num} is 4.`);
        break;
    default: 
        console.log(`${num} is greater than 4.`);
        break;
}