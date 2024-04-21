const cup1 = {
    color: "blue",
    height: 12,
};

const cup2 = {
    color: "blue",
    height: 12,
};

const cupString1 = JSON.stringify(cup1);
const cupString2 = JSON.stringify(cup2);

console.log(cupString1);
console.log(cupString2);

console.log(cupString1 == cupString2);
