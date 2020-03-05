const prompt = require("prompt-sync")();

let answer = prompt("Guess a number: ");

const randomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const guessTheNumber = () => {
  const secretNumber = randomNumber();
  let storedNumberArray = [];
  let attempts = 0;

  while (answer != secretNumber) {
    answer = prompt("Guess a number: ");

    if (storedNumberArray.includes(answer)) {
      console.log('Already Guessed!');
    } else if (answer > secretNumber) {
      storedNumberArray.push(answer);
      attempts += 1;
      console.log('Too High!');
    } else if (answer < secretNumber) {
      storedNumberArray.push(answer);
      attempts += 1;
      console.log('Too Low!');
    } else if (typeof answer !== 'number' && typeof answer !== 'string') {
      console.log('Not a number! Try again!');
    } else {
      console.log('You got it! You took ' + attempts + ' attempts!');
    }
  }
};

guessTheNumber(answer);