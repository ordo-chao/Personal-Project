// create computer moves variable
computerMove = ''

// create results  variable
result = ''

    // Create scores variable
let scores = JSON.parse(localStorage.getItem('score')) ||
{
  wins:0,
  ties:0,
  losses:0
}

function gamePlay(playerMove)
{
  // Generate Computer Move 

  randomNumber = Math.random()

    if(randomNumber >= 0 && randomNumber < 1/3)
    {
      computerMove = 'Rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3)
    {
      computerMove = 'Paper'
    }else if(randomNumber >= 2/3 && randomNumber < 1)
    {
      computerMove = 'Scissors'
    }

    // Assign player move 



    // if player chooses Rock

    if(playerMove == 'Rock')
    {
      if(computerMove == 'Rock')
    {
      result = 'Tie'
    }else if(computerMove == 'Paper')
    {
      result = 'You lose'
    }else if(computerMove == 'Scissors')
    {
      result = 'You win'
    }
    }
    // if player chooses Paper
    else if(playerMove == 'Paper')
    {
      if(computerMove == 'Rock')
      {
        result = 'You win'
      }else if(computerMove == 'Paper')
      {
        result = 'Tie'
      }else if(computerMove == 'Scissors')
      {
        result = 'You lose'
      }
    }
    // if player chooses Scissors
    else if(playerMove == 'Scissors')
    {
      if(computerMove == 'Rock')
      {
        result = 'You lose'
      }else if(computerMove == 'Paper')
      {
        result = 'You win'
      }else if(computerMove == 'Scissors')
      {
        result = 'Tie'
      }
    }
   

    // use result to assign scores 

    if(result == 'You win')
    {
      scores.wins += 1
    }else if(result == 'Tie')
    {
      scores.ties += 1
    }else if(result == 'You lose')
    {
      scores.losses += 1
    }

    console.log(scores.wins)
    console.log(scores.ties)
    console.log(scores.losses)

    // Storage of scores
    localStorage.setItem('score',JSON.stringify(scores))


    //Displays both player and computer moves , results and the score
    document.querySelector('.js_scores').innerText = `Wins: ${scores.wins} Ties: ${scores.ties} Losses: ${scores.losses}`;

    document.querySelector('.js_results').innerText = result;
  
    document.querySelector('.js_moves').innerText = `Your Move: ${playerMove}   The computer move: ${computerMove}`
}
 