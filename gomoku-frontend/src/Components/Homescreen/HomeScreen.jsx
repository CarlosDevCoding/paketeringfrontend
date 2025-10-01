import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeScreen.css";
import stitch from "../../assets/stitch.png";

const HomeScreen = () => {
  const [player, setPlayer] = useState("");
  const [gameId, setGameId] = useState("");

  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game", { state: { player, gameId } });
  };

  return (
    <div className="home-container">
      <h1 className="gomoku-title">GOMOKU</h1>
      <div className="players-section">
        <div className="player">
          <img src={stitch} className="img-stitch" />
          <input
            className="player-input"
            placeholder="Player"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </div>
      </div>
      <div className="game-action-wrapper">
        <button className="game-btn" onClick={goToGame} disabled={!player}>
          NEW GAME
        </button>
        <div className="join-game-wrapper">
          <input
            type="text"
            placeholder="Game ID?"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          />
          <button className="game-btn" onClick={goToGame} disabled={!player}>
            JOIN
          </button>
        </div>
      </div>

      <div className="scoreboard-section">
        <div className="scoreboard-title">Scoreboard</div>
        <div className="scoreboard-list">
          <div>Player 1</div>
          <div>Player 2</div>
          <div>Player 3</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
