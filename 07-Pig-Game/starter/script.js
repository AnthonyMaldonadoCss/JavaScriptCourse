'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// return an Array
const diceEl = document.getElementsByClassName('dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const score = document.getElementsByClassName('score');

for (let i = 0; i < diceEl.length; i++) {
  var posititionEl = diceEl[i];
}

let posititionScore;

for (let i = 0; i < score.length; i++) {
  posititionScore = score[i];
}

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
posititionEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Switch to next player
const nextPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Genereting a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display Dice
    posititionEl.classList.remove('hidden');
    posititionEl.src = `dice-${dice}.png`;
    console.log(dice);

    //3. Check for rolled 1: if true
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      nextPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if players scoreis >=100
    if (scores[activePlayer] >= 21) {
      //Finish the game
      playing = false;
      posititionEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to te next player
      nextPlayer();
    }
  }
});

//
btnNew.addEventListener('click', function () {
  if (!playing) {
    playing = true;

    posititionEl.classList.remove('hidden');

    scores = [0, 0];
    currentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.add('player--active');
  }
});
