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
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = "green";
    // Set Winning Message
    setMessage(`${winningNum} is correct! YOU WIN!`, "green");
  } else {
  }
});

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  //   message.setAttribute("style", "color:red; font-size: 26px; ");
  message.textContent = msg;
}
