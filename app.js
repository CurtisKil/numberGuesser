/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses (If Statement)
- Notify player of guesses remaining (alert?)
- Notify the player of the correct answer if they're wrong (if Statement and alert)
- Let the player choose to play again(if they loose prompt?)
*/

// Game Values
let min = 1,
  max = 10,
  // How can you make this different every time?
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  // Want min/max to insert those numbers
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  // Want guess btn for to run function with an event listener
  guessBtn = document.querySelector("#guess-btn"),
  // Need to know what the user inputed
  guessInput = document.querySelector("#guess-input"),
  // To display right or wrong message
  message = document.querySelector(".message");

// Assing UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function () {
  // Need to turn string number into number because our values for the game are numbers
  let guess = parseInt(guessInput.value);

  // Validate Guess
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //   Check if won
  if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else {
    // Wrong Number
    // Same as guessesLeft = guessesLeft - 1;
    guessesLeft -= 1;

    // Check how many guesses are left
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(
        false,
        `GAME OVER. You lose! The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = "red";

      // Clear input
      guessInput.value = "";

      // Tell user guess is wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set Winning Message
  setMessage(msg);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
