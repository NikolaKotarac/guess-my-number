'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = 'No number!';
//     displayMessage('No Number');
//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = 'Correct Number';
//     displayMessage('Correct Number');
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '260px';
//     document.querySelector('.number').textContent = secretNumber;
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       //   guess > secretNumber ? 'Number is too high' : 'Number is to low';
//       displayMessage(
//         guess > secretNumber ? 'Number is too high' : 'Number is to low'
//       );
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = 'Game over';
//       displayMessage('Game over');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   // } else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = 'Number is too high';
//   //     score = score - 1;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'Game over';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   //   // When is too low
//   // } else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = 'Number is too low';
//   //     score = score - 1;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'Game over';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = 20;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No valid Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '270px';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Number is too hight' : 'Number is too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
