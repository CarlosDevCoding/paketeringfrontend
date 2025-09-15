import { useEffect, useState } from "react";
import GameComponent from "../Components/GameComponent/GameComponent";
import "./GameBoardContainer.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const GameContainer = () => {
  const createEmptyBoard = () => {
    const emptyBoard = Array(15)
      .fill(null)
      .map(() => Array(15).fill(null));
    emptyBoard[7][7] = "black";
    emptyBoard[7][8] = "white";
    return emptyBoard;
  };

  const [seconds, setSeconds] = useState(0);
<<<<<<< HEAD
  const [board, setBoard] = useState(createEmptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("black");
=======
  const[paused, setPaused] = useState(false);
>>>>>>> c4a737cccc81b79f88b842c4b5fe285ad067406d

useEffect(() => {
  if (paused) return; 
  const timer = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  }, 1000);

  return () => clearInterval(timer);
}, [paused]);


  const handleCellClick = (row, col) => {
    if (board[row][col] !== null) {
      return;
    }

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
  };

  const handleRestart = () => {
    setBoard(createEmptyBoard());
    setSeconds(0);
  };

  return (
    <div className="game-container">
      <Header
        title="Goumoku"
        seconds={seconds}
        leftContent={<span>Player 1</span>}
        rightContent={<span>Player 2</span>}
        currentPlayer={currentPlayer}
      />
      <GameComponent board={board} onCellClick={handleCellClick} />
      <Footer onRestartClick={handleRestart} onPauseClick={()=>setPaused(!paused)} paused={paused}/>
    </div>
  );
};

export default GameContainer;
