'use strict';

// let DOM = document.querySelector('.message').textContent;
// console.log(DOM);
// document.querySelector('.message').textContent = `Correct SecretNumber 🎉`;

// document.querySelector('.number').textContent = 33;
// document.querySelector('.score').textContent = 55;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 65;

// console.log(document.querySelector('.guess').value);

let SecretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   where there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚯 not number';
    displayMessage('🚯 no number');
  } else if (guess === SecretNumber) {
    //when players win
    // document.querySelector('.message').textContent = `Correct Secret Number 🎉`;
    displayMessage('Correct Secret Number 🎉');
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > SecretNumber ? `To high!` : `To low`;
      displayMessage(guess > SecretNumber ? `To high!` : `To low`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('llamado completado');
  //   location.reload();

  SecretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
});
