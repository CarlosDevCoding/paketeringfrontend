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

  const [board, setBoard] = useState(createEmptyBoard);
  const [seconds, setSeconds] = useState(0);
  const[paused, setPaused] = useState(false);

useEffect(() => {
  if (paused) return; 
  const timer = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  }, 1000);

  return () => clearInterval(timer);
}, [paused]);


  const handleCellClick = (row, col) => {
    console.log("HELLO");
  };

  const handleRestart = () => {
    setBoard(createEmptyBoard());
    setSeconds(0);
  };

  return (
    <div className="game-container">
      <Header
        tittle="Goumoku"
        seconds={seconds}
        leftContent={<span>Player 1</span>}
        rightContent={<span>Player 2</span>}
      />
      <GameComponent board={board} onCellClick={handleCellClick} />
      <Footer onRestartClick={handleRestart} onPauseClick={()=>setPaused(!paused)} paused={paused}/>
    </div>
  );
};

export default GameContainer;
