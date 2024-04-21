const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    // ...
    divide: function (num1, num2) {
        return num1 / num2;
    },
};

console.log(calculator.add(1, 2));
console.log(calculator["divide"](100, 10));