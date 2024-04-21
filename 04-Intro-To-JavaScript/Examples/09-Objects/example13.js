const jsonPerson = `{
    "firstName": "John",
    "lastName": "Doe"
}`;

const jsPerson = JSON.parse(jsonPerson);
console.log(typeof jsPerson);
console.log(jsPerson.firstName);

const malformedJSONObj = `{
    firstName: "John",
    "lastName": 'Doe'
}`;

// causes an error because obj is not valid JSON
console.log(JSON.parse(malformedJSONObj))