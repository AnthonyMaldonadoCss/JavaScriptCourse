'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// return an Array
const diceEl = document.getElementsByClassName('dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

for (let i = 0; i < diceEl.length; i++) {
  var posititionEl = diceEl[i];
}

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
posititionEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
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
    currentScore0.textContent = currentScore; //CHANGE LATER
  } else {
    //switch to next player
    currentScore0.textContent = 0;
  }
});
