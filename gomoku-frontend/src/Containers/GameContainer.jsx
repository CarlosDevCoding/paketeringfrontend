import { useState } from "react";
import GameComponent from "../Components/GameComponent/GameComponent";
import './GameBoardContainer.css'

const GameContainer = () => {
  const [board] = useState(() => {
    const emptyBoard = Array(15).fill(null).map(() => Array(15).fill(null));
    emptyBoard[7][7] = 'black';
    emptyBoard[7][8] = 'white';
    return emptyBoard;
  });

  const handleCellClick = (row, col) => {
    console.log("HELLO")
  }

  return (
    <div className="game-container">
      <GameComponent board={board} onCellClick={handleCellClick} />
    </div>
  )

}

export default GameContainer;