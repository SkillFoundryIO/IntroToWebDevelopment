const gary = {
    name: "Gary",
    age: 42,
};

const samantha = {
    name: "Samantha",
    age: 35,
};

const vehicle = {
    make: "Tesla",
    model: "Model S",
    year: 2021,
    owners: [gary, samantha],
};

for(owner of vehicle.owners) {
    console.log(owner.name);
}

