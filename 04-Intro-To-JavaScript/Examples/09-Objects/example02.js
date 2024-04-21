const vehicle = {
    brand: "Toyota",
    model: "Corolla",
    year: 2017,
    owner: {
        name: "Alice",
        age: 25,
    },
};

console.log(vehicle);

console.log(vehicle.owner.name);        // Alice
console.log(vehicle.owner.name.length); // 5