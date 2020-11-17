// GLOBAL VARIABLES
let userScore = 0;
let compScore = 0;
// SELECTORS
const user_span = document.querySelector('#userScore');
const comp_span = document.querySelector('#compScore');
const result_div = document.querySelector('.result > p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissor_div = document.querySelector('#s');

// FUNCTION

// DECIDE WIN OR LOSE
function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case 'rs':
    case 'pr':
    case 'sp': {
      win(userChoice, compChoice);
      userScore++;
      user_span.innerHTML = userScore;
      break;
    }
    case 'pr':
    case 'ps':
    case 'sr': {
      lose(userChoice, compChoice);
      compScore++;
      comp_span.innerHTML = compScore;
      break;
    }
    case 'rr':
    case 'pp':
    case 'ss': {
      draw(userChoice, compChoice);
      break;
    }
  }
}
// RANDOM COMPUTER CHOICE
function getComputerChoice() {
  const choice = ['r', 'p', 's'];
  const position = Math.floor(Math.random() * 3);
  return choice[position];
}

// User wins
function win(userChoice, compChoice) {
  const val = document.getElementById(userChoice);
  let smallUser = 'user'.fontsize(3).sub();
  let smallComp = 'comp'.fontsize(3).sub();
  result_div.innerHTML = `${convertLetter(
    userChoice
  )}${smallUser} beats ${convertLetter(compChoice)}${smallComp}. You Win!`;
  val.classList.add('green-glow');
  setTimeout(() => val.classList.remove('green-glow'), 400);
}

// USER LOSES
function lose(userChoice, compChoice) {
  const val = document.getElementById(userChoice);
  let smallUser = 'user'.fontsize(3).sub();
  let smallComp = 'comp'.fontsize(3).sub();
  result_div.innerHTML = `${convertLetter(
    compChoice
  )}${smallComp} beats ${convertLetter(userChoice)}${smallUser}. You Lose!`;
  val.classList.add('red-glow');
  setTimeout(() => val.classList.remove('red-glow'), 400);
}

// DRAWW
function draw(userChoice, compChoice) {
  const val = document.getElementById(userChoice);
  let smallUser = 'user'.fontsize(3).sub();
  let smallComp = 'comp'.fontsize(3).sub();
  result_div.innerHTML = `${convertLetter(
    userChoice
  )}${smallUser} equals ${convertLetter(compChoice)}${smallComp}. It's a Draw!`;
  val.classList.add('grey-glow');
  setTimeout(() => val.classList.remove('grey-glow'), 400);
}

function convertLetter(choice) {
  if (choice === 'r') return 'Rock';
  if (choice === 'p') return 'Paper';
  if (choice === 's') return 'Scissor';
}

// EVENT HANDLERS
// ROCK -> CLICK
function main() {
  rock_div.addEventListener('click', () => {
    game('r');
  });
  // PAPER -> CLICK
  paper_div.addEventListener('click', () => {
    game('p');
  });
  // SCISSOR -> CLICK
  scissor_div.addEventListener('click', () => {
    game('s');
  });
}
main();
