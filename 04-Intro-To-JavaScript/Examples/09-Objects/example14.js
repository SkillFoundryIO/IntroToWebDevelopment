const cup1 = {
    color: "blue",
    height: 12,
};

const cup2 = {
    color: "blue",
    height: 12,
};

// false
console.log(cup1 == cup2);

const cup3 = cup2;

// true
console.log(cup3 == cup2);