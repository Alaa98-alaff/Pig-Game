"use strict";

//Selecting elements
const score0El = document.querySelector("#score--0");
const sciore1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currnet0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currnetScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player---active");
  player1El.classList.toggle("player--active");
};

// Starting conditions
score0El.textContent = 0;
sciore1El.textContent = 0;
diceEl.classList.add("hidden");
let currnetScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let play = true;

function rollDice() {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (play) {
    console.log(dice);
    switch (dice) {
      case 1:
        diceEl.classList.remove("hidden");
        diceEl.src = `https://i.ibb.co/GfwcxJv/dice-1.png`;
        break;
      case 2:
        diceEl.classList.remove("hidden");
        diceEl.src = `https://i.ibb.co/GfwcxJv/dice-1.png`;
        break;
      case 3:
        diceEl.classList.remove("hidden");
        diceEl.src = `https://i.ibb.co/bJ0Rqpp/dice-3.png`;
        break;
      case 4:
        diceEl.classList.remove("hidden");
        diceEl.src = `https://i.ibb.co/tcx0RBd/dice-4.png`;
        break;
      case 5:
        diceEl.classList.remove("hidden");
        diceEl.src = `https://i.ibb.co/x5Gcs00/dice-5.png`;
        break;
      case 6:
        diceEl.classList.remove("hidden");
        diceEl.src = `https://i.ibb.co/6gb9XcH/dice-6.png`;
    }
    //
    // check for rolled 1
    if (dice !== 1) {
      //add dice to current score
      currnetScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currnetScore;
    } else {
      switchPlayer();
    }
  }
}

// Rolling the functionality
btnRoll.addEventListener("click", rollDice);

// Holding current score :

btnHold.addEventListener("click", function () {
  if (play) {
    //1. addd currnet score to active players score
    scores[activePlayer] += currnetScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if the palyers score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finish the game
      play = false;
      document
        .querySelector(`player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove("player--winner");
    } else {
      //switch Player
      switchPlayer();
      rollDice();
    }
  }
});
