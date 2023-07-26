'use strict';
/*
let dice = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentScore = 0;
let currSum = 0;
let turn = 1;

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

const currPlayer = document.querySelector('current-score');

const turnChange = function (turn) {
  if (turn === 1) {
    turn = 0;
  } else {
    turn = 1;
  }
};
const scorePlayer = function (turn, sum) {
  if (turn == 1) {
    scorePlayer1 += sum;
    score1(scorePlayer1);
  } else {
    scorePlayer2 += sum;
    score2(scorePlayer2);
  }
};

const score1 = function (val) {
  document.querySelector('#score--0').textContent = val;
};
const score2 = function (val) {
  document.querySelector('#score--1').textContent = val;
};
const currentS1 = function (val) {
  document.querySelector('#current--0').textContent = val;
};
const currentS2 = function (val) {
  document.querySelector('#current--1').textContent = val;
};
const photodice = function (photo) {
  document.querySelector('.dice').src = `dice-${photo}.png`;
};
const randomDice = function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
};
//const win = function () {
//  if (scorePlayer1 > 100) {
//  }
//};

newGame.addEventListener('click', function () {
  dice = 0;
  scorePlayer1 = 0;
  score1(scorePlayer1);
  scorePlayer2 = 0;
  score2(scorePlayer2);
  currentScore = 0;
  currSum = 0;
  turn = 1;
});

rollDice.addEventListener('click', function () {
  if ((scorePlayer1 || scorePlayer2) < 100) {
    randomDice();
    photodice(dice);
    if (dice != 1) {
      console.log(dice);
      currSum += dice;
      turn === 1 ? currentS1(currSum) : currentS2(currSum);
    } else {
      currSum = 0;
      turn === 1 ? currentS1(currSum) : currentS2(currSum);
      turn *= -1;
    }
  }
});

const holdFun = function (turn) {
  console.log(turn);
};

rollDice.addEventListener('click', holdFun(1, 55));

/*
hold.addEventListener('click', function () {
  if (turn === 1) {
    scorePlayer1 += currSum;
    score1(scorePlayer1);
    currSum = 0;
    turn *= -1;
  } else {
    scorePlayer2 += currSum;
    document.querySelector('#current--1').classList.add('hidden');
    currentS1('now');
    score2(scorePlayer2);
    currSum = 0;
    turn *= -1;
    console.log(turn);
  }
});
*/
