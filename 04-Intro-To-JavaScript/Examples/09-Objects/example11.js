const counter = {
    count: 0,
    increment: function () {
        this.count++;
    },
    decrement: function () {
        this.count--;
    },
};

console.log(counter.count); // 0

counter.increment();
counter.increment();
counter.increment();

console.log(counter.count); // 3

counter.decrement();

console.log(counter.count); // 2