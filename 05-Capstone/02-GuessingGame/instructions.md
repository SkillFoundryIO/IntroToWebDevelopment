# Exercise: Guessing Game

Create an interactive Guessing Game in which players attempt to guess a random number from a range with a limited number of guesses. The page will give them hints of "higher" if their guess is lower than the number or "lower" if the guess is higher than the number. If the player guesses the number correctly within the guess limit, they win!

## Wireframe

Refer to this wireframe when reading the requirements:

![](../02-GuessingGame/Wireframe.png)

## Game Components & Requirements

1. **Thinking of a Number**: Make sure the max number in this text is updated if the max number in the settings is updated.
2. **Guess Textbox**: Requires a number in the range.
3. **Guess Label**: The values of this label are "Higher," "Lower," and "Correct!" A wrong guess should have a red label, and a correct guess should have a green label.
4. **Guess Button**: The user clicks this button to submit a guess. When a game is over by correct guess or out of guesses, the button should be disabled, and a "Play Again" button should appear beside it. Clicking the "Play Again" button will generate a new random number, reset the number of guesses remaining, enable the Guess button, and hide the "Play Again" button. This effectively starts a new game.
5. **Scoreboard**: The wins and losses should be incremented based on the game's result. The Guesses box should count down from the # Guesses setting. The game is over when it reaches 0 without a correct guess, and the player loses. The Reset Scoreboard button will reset the wins and losses to 0.
6. **Settings**: Players may modify the settings, but only in between games, so it should be disabled while a game is being played. Changing the max number should update the prompt near the top of the page and alter the random number code.

## Tips for Success

- **Small chunks, deliberate steps:** Start by getting a random number and logging the guess to the console with the button press. Once you verify it is working, start with one condition (higher, lower, correct) at a time. After that, work on the number of guesses countdown and the scoreboard. Lastly, work on the settings and make the game dynamic. It is almost always easier to start with small, fixed cases and move towards dynamic code once you ensure the fixed routes are working.
- **Debug Incrementally:** Regularly test and debug your code as you add new features to catch and fix issues early. Each time you finish a small unit of work, it's time to test. One of the biggest beginner issues is trying too much at once.
- **Don't Overcomplicate It:** If you ask Chat-GPT or the online community, you will find **many viable solutions** to problems in this exercise. We're not looking for the fanciest or most efficient solution. The goal is to use the basics.
