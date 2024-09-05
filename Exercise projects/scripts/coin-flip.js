let score = JSON.parse(localStorage.getItem('score')) ||
    {
    wins : 0,
    losses : 0,
    };
    
function playGame (guess) {
    
    const randomNumber = Math.random();
    
    function computerMove() {
    
    let result = '';
    
    if(randomNumber <= 0.5) {
        result = 'heads';
    } else {
        result = 'tails';
    }
    return result;
    }
    
    let report = '';
    
    if (guess === computerMove()) {
        report = 'You win!!';
    } else {
        report = 'You lose!!';
    }

if (report === 'You win!!') {
    score.wins += 1;
} else if (report === 'You lose!!') {
    score.losses += 1;
}
    

    alert(`Your move: ${guess}!\nComputer move: ${computerMove()}!\n\n${report}\n\n\nWins : ${score.wins}.\nLosses : ${score.losses}.`);

    localStorage.setItem('score', JSON.stringify(score));
    
}
