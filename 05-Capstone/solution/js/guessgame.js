document.addEventListener("DOMContentLoaded", function() {
    let targetNumber;     // number to guess
    let guessesRemaining; // number of guesses left
    let maxNumber;        // max number to guess
    let numWins = 0;      // number of player wins
    let numLosses = 0;    // number of player losses

    // data elements
    const guessResponseElement = document.getElementById("guessResponse");
    const guessElement = document.getElementById("guess");
    const maxGuessElement = document.getElementById("maxGuesses");
    const maxNumberElement = document.getElementById("maxNumber");
    const winsElement = document.getElementById("wins");
    const lossesElement = document.getElementById("losses");
    const guessRemainingElement = document.getElementById("remainingGuesses");
    const maxNumSpan = document.getElementById("maxNum");

    // Buttons
    const resetButtonElement = document.getElementById("btnReset");    

    // Forms
    const settingsForm = document.getElementById("settingsForm");
    const guessForm = document.getElementById("guessForm");

    // here we used the click listener instead of the form submission
    resetButtonElement.addEventListener("click", function() {
        numWins = 0;
        numLosses = 0;

        startGame();
    });

    guessForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const guess = parseInt(guessElement.value);

        // we won't deduct a guess for bad data
        if(isNaN(guess) || guess < 1 || guess > maxNumber) {
            setGuessResponse(`Guess must be between 1 and ${maxNumber}`, false);
            return;
        } 
        
        guessesRemaining--;
        
        
        if (guess === targetNumber) {
            setGuessResponse("You got it!", true);
            numWins++;
            startGame();
            return;
        } else if (guess < targetNumber) {
            setGuessResponse("higher", false);
        } else {
            setGuessResponse("lower", false);
        }

        if(guessesRemaining === 0) {
            numLosses++;
            startGame();
            return;
        }

        updateScoreboard();
    });

    settingsForm.addEventListener('submit', function(event) {
        event.preventDefault();

        startGame();
    });

    function updateScoreboard() {
        winsElement.textContent = numWins;
        lossesElement.textContent = numLosses;
        guessRemainingElement.textContent = guessesRemaining;    
    }

    function setGuessResponse(text, isWin) {
        guessResponseElement.textContent = text;
        guessResponseElement.style.display = 'block';

        if(isWin) {
            guessResponseElement.style.color = 'green';
        } else {
            guessResponseElement.style.color = 'red';
        }
    }

    function loadSettings() {
        guessesRemaining = parseInt(maxGuessElement.value);
        maxNumber = parseInt(maxNumberElement.value);

        if(isNaN(guessesRemaining) || isNaN(maxNumber)) {
            alert("Error loading settings. Please ensure valid values then update again.");
        } else {
            maxNumSpan.textContent = maxNumber;
        }
    }

    function startGame() {
        loadSettings();
        updateScoreboard();
        targetNumber = Math.floor((Math.random() * maxNumber) + 1);
        guessElement.value = "";
        console.log(`Number to guess is: ${targetNumber}`);
    }

    // This initially starts the game on the first load of the document.
    startGame();
});