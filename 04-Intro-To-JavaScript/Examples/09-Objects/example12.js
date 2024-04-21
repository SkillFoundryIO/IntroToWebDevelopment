const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
        street: "123 Main Street",
        city: "Anytown",
        state: "CA",
        postalCode: "12345",
    },
    phoneNumbers: [
        {
            type: "home",
            number: "555-1234",
        },
        {
            type: "work",
            number: "555-5678",
        },
    ],
};

const userString = JSON.stringify(user);

console.log(typeof userString);
console.log(userString);
