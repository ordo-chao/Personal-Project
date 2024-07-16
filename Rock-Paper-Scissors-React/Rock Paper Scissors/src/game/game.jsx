import './game.css'
import {UseState} from 'react'

function game()
{

  const computerMove =()=>
  {
    // let randomNumber;
    let [randomNumber, SetrandomNumber] = UseState(Math.random);

    SetrandomNumber(randomNumber = Math.random());
    // randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3)
      {
        return 'Rock';
      }else if(randomNumber >= 1/3 && randomNumber < 2/3)
      {
        return 'Paper';
      }else if(randomNumber >= 2/3 && randomNumber <1)
        {
          return 'Scissors';
        }

      // console.log(randomNumber);
  }

      // function gamePlay(playerMove)
      // {
      //   if(playerMove === 'Rock')
      //     {
      //       if(computerMove === 'Rock'){return 'Draw'}
      //       else if(computerMove === 'Paper'){return 'Lose'}
      //       else if(computerMove === 'Scissors'){return 'Win'}
      //     }
      //   else if(playerMove === 'Paper')
      //     {
      //       if(computerMove === 'Rock'){return 'Win'}
      //       else if(computerMove === 'Paper'){return 'Draw'}
      //       else if(computerMove === 'Scissors'){return 'Lose'}
      //     }
      //   else if(playerMove === 'Scissors')
      //     {
      //       if(computerMove === 'Rock'){return 'Lose'}
      //       else if(computerMove === 'Paper'){return 'Win'}
      //       else if(computerMove === 'Scissors'){return 'Draw'}
      //     }
      // }

    return(
      <div>


        <button onClick={computerMove}>Rock</button>
        <button>Paper</button>
        <button>Scissors:{}</button>


        <p>Results: </p>
        <p>Score: </p>
      </div>
    )
}

export default game