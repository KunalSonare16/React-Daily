import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

function App() {
   const [gameTurns,setGameTurns] = useState([]);
  const [activePlayer,setActivePlayer] = useState('X');

  function handlePlayer({rowIndex,colIndex}){
    setActivePlayer((curActivePlayer)=>curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns=>{
      let currPlayer = 'X';
      if( prevTurns.length > 0 && prevTurns[0].player ==='X'){
        currPlayer = 'O';
      }
      const updatedTurns = [{ square : {row : rowIndex,col:colIndex},player:activePlayer},
        ...prevTurns];
         return updatedTurns;
    });
  }
  

  return (
  <menu>
    <div id="game-container" >
    <ol id="players" className="highlight-player">
     <Player initialValue="player 1" symbol = "X" isActive={activePlayer==='X'}/>
     <Player initialValue="player 2" symbol = "O"   isActive={activePlayer==='O'}/>
    </ol>
     <GameBoard onSelectSquare = {handlePlayer} turns={gameTurns} />
    </div>
   <Log/>
  </menu>
  )
}

export default App
