'use strict';

let turn = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let currSum = 0;
let dice = 0;

const goalSum = 100;
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
//
const currentD0 = document.querySelector('#current--0');
const currentD1 = document.querySelector('#current--1');
const scoreD0 = document.querySelector('#score--0');
const scoreD1 = document.querySelector('#score--1');

const randomDice = function () {
  return (dice = Math.trunc(Math.random() * 6) + 1);
};
const turnChange = function () {
  if (turn === 1) {
    turn = 0;
  } else {
    turn = 1;
  }
};
const activeF = function () {
  document.querySelector(`.player--${turn}`).classList.remove('player--active');
  turnChange();
  document.querySelector(`.player--${turn}`).classList.add('player--active');
  turnChange();
};
const holdFun = function () {
  if (turn === 0) {
    playerOneScore += currSum;
    currSum = 0;
    scoreD0.textContent = playerOneScore;
    currentD0.textContent = 0;
    win();
    turnChange();
  } else {
    playerTwoScore += currSum;
    currSum = 0;
    scoreD1.textContent = playerTwoScore;
    currentD1.textContent = 0;
    win();
    turnChange();
  }
};
const photodice = function (photo) {
  document.querySelector('.dice').src = `dice-${photo}.png`;
};

const newGameF = function () {
  turn = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  currSum = 0;
  dice = 0;
  scoreD0.textContent = 0;
  scoreD1.textContent = 0;
};
const restartColor = function () {
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};

const pigGameF = function () {
  randomDice();
  photodice(dice);
  if (dice != 1) {
    if (turn === 0) {
      currentD0.textContent = currSum += dice;
    } else {
      currentD1.textContent = currSum += dice;
    }
  } else {
    currSum = 0;
    document.querySelector(`#current--${turn}`).textContent = 0;
    turnChange();
    activeF();
  }
};

const win = function () {
  if (playerOneScore >= goalSum) {
    document.querySelector(`.player--0`).classList.add('player--winner');
  } else if (playerTwoScore >= goalSum) {
    document.querySelector(`.player--1`).classList.add('player--winner');
  }
};

newGame.addEventListener('click', function () {
  newGameF();
  restartColor();
});
rollDice.addEventListener('click', function () {
  if (playerOneScore <= goalSum) {
    if (playerTwoScore <= goalSum) {
      pigGameF();
    }
  }
});
hold.addEventListener('click', function () {
  if (playerOneScore <= goalSum) {
    if (playerTwoScore <= goalSum) {
      activeF();
      holdFun();
    }
  }
});
