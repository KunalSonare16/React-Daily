import { useState } from "react";

const initialGmaeBoard = [
    [null,null,null],
     [null,null,null],
      [null,null,null],

];
export default function GameBoard({onSelectSquare,turns}){
    // const [gameBoard,setGameBoard] = useState(initialGmaeBoard);

    // function handleGameBoard(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updateBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updateBoard[rowIndex][colIndex] =whoactiveplayer;
    //         return updateBoard;
    //     });
    //       onSelectSquare();
    // }
    return (
     <ol id="game-board">
        {gameBoard.map((row,rowIndex)=>(

            <li key={rowIndex}>
                <ol>
                    {row.map((playersymbol,colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={onSelectSquare}>{playersymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
     </ol>


    );
}