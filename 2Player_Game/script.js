'use strict';
// Making initial score to 0
const score00 = document.getElementById('score--0');
const score01 = document.querySelector('#score--1');

const diceImage = document.querySelector('.dice');

// rolling dice
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// selecting current
const current00 = document.getElementById('current--0');
const current01 = document.getElementById('current--1');
let currentScore = 0;

// changing player
const player00 = document.querySelector('.player--0');
const player01 = document.querySelector('.player--1');

let playing, totalScore,activePlayer;

//new game play garda kheri
const init = function () {
  // holding the scores
  totalScore = [0, 0];
  activePlayer = 0;

  //after winning to stop rolling the dice
  playing = true;

  //hide dice before beginning
  diceImage.classList.add('hidden');

  score00.textContent = 0;
  score01.textContent = 0;
  current00.textContent = 0;
  current01.textContent = 0;

  diceImage.classList.add('hidden');
  player00.classList.remove('player--winner');
  player01.classList.remove('player--winner');
  player00.classList.add('player--active');
  player01.classList.remove('player--active');
};
init();

const changePlayer = () => {
  if (playing) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player00.classList.toggle('player--active');
    player01.classList.toggle('player--active');
  }
};

const changeDice = () => {
  if (playing) {
    const randNum = Math.trunc(Math.random() * 6) + 1;
    //     console.log(randNum);
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${randNum}.png`;

    if (randNum !== 1) {
      //add number to the current
      currentScore += randNum;
      //     current00.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      changePlayer();
    }
  }
};

btnRoll.addEventListener('click', changeDice);

const saveScore = () => {
  if (playing) {
    //   activePlayer == 0
    //     ? (totalScore[0] += currentScore)
    //     : (totalScore[1] += currentScore);
    totalScore[activePlayer] += currentScore;
    //   score00.textContent = totalScore[0];
    //   score01.textContent = totalScore[1];
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 50) {
      console.log(activePlayer);
      diceImage.classList.add('hidden');
      playing = false;

      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.add('.player--winner');
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.remove('.player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    changePlayer();
  }
};
btnHold.addEventListener('click', saveScore);

btnNew.addEventListener('click', init);
