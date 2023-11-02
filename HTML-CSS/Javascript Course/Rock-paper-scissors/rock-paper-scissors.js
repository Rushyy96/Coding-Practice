let score = JSON.parse(localStorage.getItem('score')) || 
{
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement()

function pickComputerMove()
{
    const random_number = Math.random();
    let computerMove = '';

    if (random_number >= 0 && random_number < 1 / 3)
    {
        computerMove = 'rock';
    } 
    else if (random_number >= 1 / 3 && random_number < 2 / 3) 
    {
        computerMove = 'paper';
    }
    else if (random_number >= 2 / 3 && random_number < 1)
    {
        computerMove = 'scissors';
    }
    return computerMove;
}

function playGame(playerMove)
{
    const computerMove = pickComputerMove();

    let result = '';
    
    if (computerMove === playerMove)
    {
        result = 'Tie';
    }

    else if (computerMove === 'rock')
    {
            if (playerMove === 'scissors')
            {
                result = 'You Lose';
            }
            else if (playerMove === 'paper')
            {
                result = 'You Win';
            }
    }
    else if (computerMove === 'paper')
    {
            if (playerMove === 'rock')
            {
                result = 'You Lose';
            }
            else if (playerMove === 'scissors')
            {
                result = 'You Win';
            }
    }
    else if (computerMove === 'scissors')
    {
            if (playerMove === 'paper')
            {
                result = 'You Lose';
            }
            else if (playerMove === 'rock')
            {
                result = 'You Win';
            }
             
    }

    if (result === 'You Win')
    {
        score.wins += 1;
    }
    else if (result === 'Tie')
    {
        score.ties += 1;
    }
    else if (result === 'You Lose')
    {
        score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));


    updateScoreElement();

    document.querySelector('.js-move').innerHTML = `You Picked <img src="./src/${playerMove}-emoji.png" alt=""> <img src="./src/${computerMove}-emoji.png" alt="">Computer Picked`;

    document.querySelector('.js-result').innerHTML = result;
}

function updateScoreElement()
{
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
