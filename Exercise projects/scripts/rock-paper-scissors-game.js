let score = JSON.parse(localStorage.getItem('score')) || {
        wins : 0,
        ties : 0,
        losses : 0
      };


    // if (!score) {
    //   score = {
    //     wins : 0,
    //     ties : 0,
    //     losses : 0
    //   }
    // }

function playGame(playerMove) {
  computerMove = pickComputerMove();

  result = ``;

  if (playerMove === `SCISSORS`) {
      if (computerMove === moves.rock) {
      result = `You Lose!`;
    } else if (computerMove === moves.paper) {
      result = `You WIN!!`;
    }else if (computerMove === moves.scissors) {
      result = `Tie!`;
    }

  } else if (playerMove === `PAPER`) {
      if(computerMove === moves.rock) {
      result = `You WIN!!`;
    } else if (computerMove === moves.paper) {
      result = `Tie!`;
    } else if (computerMove === moves.scissors) {
      result = `You Lose!`;
    }

  }  else if (playerMove === `ROCK`) {
    if (computerMove === moves.rock) {
      result = `Tie!`;
    } else if (computerMove === moves.paper) {
      result = `You Lose!`;
    } else if (computerMove === moves.scissors) {
      result = `You WIN!!`;
    }
  }

  if (result === `You WIN!!`) {
    score.wins += 1;
  } else if (result ===  `You Lose!`) {
    score.losses += 1;
  } else if(result === `Tie!`) {
    score.ties += 1;
  }

  let move = '';

    if (playerMove === 'ROCK') {
      move = document.querySelector('.rock').innerHTML;
    }
    else if (playerMove === 'SCISSORS') {
      move = document.querySelector('.scissors').innerHTML;
    }
    else if (playerMove === 'PAPER') {
      move = document.querySelector('.paper').innerHTML;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You picked ${move}Computer picked ${computerMove}`;

}
    

function updateScoreElement() {

  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  
};

let moves = {
  rock : document.querySelector('.rock').innerHTML,
  paper : document.querySelector('.paper').innerHTML,
  scissors : document.querySelector('.scissors').innerHTML
};

function pickComputerMove() {

  const randomNumber = Math.random();

  let computerMove = ``;

  if (randomNumber >= 0 && randomNumber <= 1/3) {
  computerMove = moves.rock;
  } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
  computerMove = moves.paper;
  } else if (randomNumber > 2/3 && randomNumber < 1) {
  computerMove = moves.scissors;
  }

  return computerMove;
  }