'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// HELP

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnBetween = document.querySelectorAll('.between'); // emphasis on the 'All' cause it selects all the buttons

const between = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnBetween.length; i++)
  btnBetween[i].addEventListener('click', between);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// DRY CODE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('No Number'); // with this if the box is empty the text will change to "No number"
    // When player wins
  }
  if (guess === number) {
    document.querySelector('.message').textContent = 'Correct number!'; // with this if the number in the black box matches the number in the white box the text will change to "Correct number"
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').textContent = number; //---> // im moving this down to make it invisible in the box

    // MANIPULATING CSS STYLES
    document.querySelector('.number').style.backgroundColor = ' #09b451';
    document.querySelector('.number').style.color = ' #fff';

    if (score > highscore) {
      highscore = score; // this just means if the score is greater than the highscore the highscore will be equal to the score.
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too high you fool!' : 'Too low'; // using a ternary operator to serve as an if else statement
      score = score - 1;

      document.querySelector('.score').textContent = score; // thisjust makes it that anytime you guess a wrong number your score will reduce - 1
    } else if (guess > 20) {
      document.querySelector('.message').textContent =
        'Cmon ma guy thats not even in the game regulation';
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game go home';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// AGAIN
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').style.backgroundColor = ' #fff';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score; // 'score' here means '20' too it reference it
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; // the empty string signifies the absence of any value in the box
});
