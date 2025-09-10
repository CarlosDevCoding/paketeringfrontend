import { useState } from "react";
import GameComponent from "../Components/GameComponent/GameComponent";
import './GameBoardContainer.css'
import Footer from "../Components/Footer/Footer";

const GameContainer = () => {
  const createEmptyBoard = () => {
    const emptyBoard = Array(15).fill(null).map(() => Array(15).fill(null));
    emptyBoard[7][7] = 'black';
    emptyBoard[7][8] = 'white';
    return emptyBoard;
  };

  const [board, setBoard] = useState(createEmptyBoard);

  const handleCellClick = (row, col) => {
    console.log("HELLO");
  };

  const handleRestart = () => {
    setBoard(createEmptyBoard());
  };

  return (
    <div className="game-container">
      <GameComponent board={board} onCellClick={handleCellClick} />
      <Footer buttonText="Restart" onButtonClick={handleRestart} />
    </div>
  );
};

export default GameContainer;
