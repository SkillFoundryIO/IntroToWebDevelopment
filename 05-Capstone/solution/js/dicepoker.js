document.addEventListener("DOMContentLoaded", function() {
    // get dice and reroll elements
    const d1 = document.getElementById("d1");
    const d2 = document.getElementById("d2");
    const d3 = document.getElementById("d3");
    const d4 = document.getElementById("d4");
    const d5 = document.getElementById("d5");

    const r1 = document.getElementById("r1");
    const r2 = document.getElementById("r2");
    const r3 = document.getElementById("r3");
    const r4 = document.getElementById("r4");
    const r5 = document.getElementById("r5");

    // get label elements
    const rerollCountElement = document.getElementById("rerollsRemaining");
    const currentScoreElement = document.getElementById("currentScore");
    const highScoreElement = document.getElementById("highScore");

    // get button elements
    const stopButton = document.getElementById("btnStop");
    const rerollButton = document.getElementById("btnReroll");
    const resetButton = document.getElementById("btnReset");

    // initialize data variables
    let currentScore = 0;
    let highScore = 0;
    let rerollCount = 2;
    let dice = [0, 0, 0, 0, 0];

    resetButton.addEventListener("click", function() {
        currentScore = 0;
        highScore = 0;
        highScoreElement.textContent = highScore;

        startGame();
    });

    stopButton.addEventListener("click", function() {
        if(currentScore > highScore) {
            highScore = currentScore;
            highScoreElement.textContent = highScore;
        }

        startGame();
    });

    rerollButton.addEventListener("click", function() {
        if (r1.checked) {
            dice[0] = roll();
        }

        if (r2.checked) {
            dice[1] = roll();
        }

        if (r3.checked) {
            dice[2] = roll();
        }

        if (r4.checked) {
            dice[3] = roll();
        }

        if (r5.checked) {
            dice[4] = roll();
        }

        rerollCount--;
        rerollCountElement.textContent = rerollCount;

        if (rerollCount === 0) {
            rerollButton.setAttribute("disabled", "");
        }

        sortDice();
        displayDice();
        calculateScore();
    });

    function roll() {
        return Math.floor((Math.random() * 6) + 1);
    }

    function rollAll() {
        for(let i = 0; i < dice.length; i++)
        {
            dice[i] = roll();
        }
    }

    function sortDice() {
        dice.sort(function(a, b) {
            return a-b;
        });
    }

    function displayDice() {
        d1.textContent = dice[0];
        d2.textContent = dice[1];
        d3.textContent = dice[2];
        d4.textContent = dice[3];
        d5.textContent = dice[4];
    }

    function calculateScore() {
        currentScore = 0;
        /* This array will count the number of times a dice value is rolled 
           offset by 1 because indexes start with 0 and dice numbers start with 1. */
        counts = [0, 0, 0, 0, 0, 0];

        // get sum of dice and populate counts.
        for(let i = 0; i < dice.length; i++)
        {
            currentScore += dice[i];
            // adjust for index and add one to the count for the die value
            counts[dice[i] - 1]++;
        }

        // check for 3, 4, 5 of a kind and full house using includes()
        if(counts.includes(5)) {
            currentScore += 40;
        }

        if(counts.includes(4)) {
            currentScore += 35;
        }

        // full house
        if(counts.includes(3) && counts.includes(2)) {
            currentScore += 25;
        }

        if(counts.includes(3)) {
            currentScore += 20;
        }

        // check for straight
        if((dice[0] == 1 && dice[1] == 2 && dice[2] == 3 && dice[4] == 4 && dice[5] == 5) || 
            (dice[0] == 2 && dice[1] == 3 && dice[2] == 4 && dice[4] == 5 && dice[5] == 6)) {
            currentScore += 35;
        }

        currentScoreElement.textContent = currentScore;
    }

    function resetElements() {
        rerollCount = 2;
        rerollCountElement.textContent = rerollCount;
        rerollButton.removeAttribute("disabled");

        r1.checked = false;
        r2.checked = false;
        r3.checked = false;
        r4.checked = false;
        r5.checked = false;
    }

    function startGame() {
        resetElements();
        rollAll();
        sortDice();
        displayDice();
        calculateScore();
    };

    // start the game initially
    startGame();
});