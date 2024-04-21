let globalCounter = 0;

function incrementCounter() {
    globalCounter++; // Increment the global variable
    console.log(`New value is: ${globalCounter}`);
}

incrementCounter();
incrementCounter();
incrementCounter();

console.log(globalCounter);