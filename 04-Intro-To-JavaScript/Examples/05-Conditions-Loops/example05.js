// this gets the day number of the week, 0 is Sunday
let day = new Date().getDay(); 

switch(day) {
    case 0:
    case 6:
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a weekday");
        break;
}