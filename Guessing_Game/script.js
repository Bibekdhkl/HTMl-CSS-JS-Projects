'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Hi Bibek!';
// // multiple dot operator then they are operated from left to right

// document.querySelector('.guess').value = 10

const randNum = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randNum;

let startingScore = 20;
document.querySelector('.score').textContent = startingScore;

let highScore = 0;

//to display the content inside message box using DRY
const displayContent = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
      displayContent('☠️ Empty Value')
  } else {
    if (guess < randNum) {
      displayContent('😹 Your Guess is Low')
      startingScore--;
      document.querySelector('.score').textContent = startingScore;
    } else if (guess > randNum) {
      displayContent('🫣 Your Guess is High')
      startingScore--;
      document.querySelector('.score').textContent = startingScore;
    } else {
      displayContent('🥳 Congratulations, you got it right!')
    
      if (highScore < startingScore) {
        highScore = startingScore;
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('.number').textContent = randNum;

      document.querySelector('body').style.backgroundColor = 'blue';
      document.querySelector('.number').style.width = '30rem';
    }
  }

  if (startingScore < 1) {
    document.querySelector('.score').textContent = 0;
    displayContent('You Lost :( \n Start the Game Again 😘 ')

    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('Again Clicked');
  const randNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = randNum;

  startingScore = 20;
  document.querySelector('.score').textContent = startingScore;

  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  displayContent('🤖 A new Game Began so start Guessing :P')
});
