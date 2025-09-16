import { useEffect, useState } from "react";
import GameComponent from "../Components/GameComponent/GameComponent";
import "./GameBoardContainer.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ChatComponent from "../Components/ChatComponent/ChatComponent";

const GameContainer = () => {
  const createEmptyBoard = () => {
    const emptyBoard = Array(15)
      .fill(null)
      .map(() => Array(15).fill(null));

    return emptyBoard;
  };

  const [seconds, setSeconds] = useState(0);
  const [board, setBoard] = useState(createEmptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("black");

 
  const [paused, setPaused] = useState(false);


  const[messages,setMessages]=useState([
    {sender:"player1",text:"hej! Lycka till!"},
    {sender:"player2",text:"Tack du mded!"},
  ]);
  const phrases = [
    { sender: "player1", text: "Bra drag!" },
    { sender: "player2", text: "Oj, jag missade det där." },
    { sender: "player1", text: "Haha snyggt!" },
    { sender: "player2", text: "Det här blir spännande!" },
    { sender: "player1", text: "Jag tänker vinna!" },
    { sender: "player2", text: "Inte så fort 😄" },
  ];
  const handleAddmessage=()=>{
    const randomPhrase=phrases[Math.floor(Math.random()*phrases.length)];
    setMessages((prev)=>[...prev,randomPhrase]);
  }

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
    setMessages([
      { sender: "player1", text: "hej! Lycka till!" },
      { sender: "player2", text: "Tack du mded!" },
    ]);
  };

  return (
    <div className="game-container">
      <Header
        title="Gomoku"
        seconds={seconds}
        leftContent={<span>Player 1</span>}
        rightContent={<span>Player 2</span>}
        currentPlayer={currentPlayer}
      />
      <div className="content">
        <ChatComponent messages={messages} onAddMessage={handleAddmessage}/>
      <GameComponent board={board} onCellClick={handleCellClick} />

      </div>
      <Footer
        onRestartClick={handleRestart}
        onPauseClick={() => setPaused(!paused)}
        paused={paused}
      />
    </div>
  );
};


export default GameContainer;
