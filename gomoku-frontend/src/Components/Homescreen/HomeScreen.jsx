import React from "react";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home-container">
      <h1 className="gomoku-title">GOMOKU</h1>
      <div className="divider" />
      <div className="players-section">
        <div className="player">
          <svg className="player-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="16" r="8" stroke="#222" strokeWidth="2" />
            <path d="M12 40c0-6.627 7.163-12 16-12s16 5.373 16 12" stroke="#222" strokeWidth="2" fill="none" />
          </svg>
           <input
    type="text"
    placeholder="Player 1"
    className="player-input"
  />
        </div>
        <div className="player">
          <svg className="player-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="16" r="8" stroke="#222" strokeWidth="2" />
            <path d="M12 40c0-6.627 7.163-12 16-12s16 5.373 16 12" stroke="#222" strokeWidth="2" fill="none" />
          </svg>
          <div className="player-label">Player 2</div>
        </div>
      </div>
      <div className="scoreboard-section">
        <div className="scoreboard-title">Scoreboard</div>
        <div className="scoreboard-list">
          <div>Player 1</div> 
          <div>Player 2</div>          
          <div>Player 3</div>
        </div>
        <button className="new-game-btn">New Game</button>
      </div>
    </div>
  );
};

export default HomeScreen;
