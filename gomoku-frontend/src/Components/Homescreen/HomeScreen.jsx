import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./HomeScreen.css"

const HomeScreen = () => {
    const [player, setPlayer] = useState("")
    const [gameId, setGameId] = useState("")

    const navigate = useNavigate()

    const goToGame = () => {
        navigate("/game", { state: { player, gameId } })
    }

    return (
        <div className="home-container">
            <h1 className="gomoku-title">GOMOKU</h1>
            <div className="players-section">
                <div className="player">
                    <svg
                        className="player-icon"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="24" cy="16" r="8" stroke="#222" strokeWidth="2" />
                        <path
                            d="M12 40c0-6.627 7.163-12 16-12s16 5.373 16 12"
                            stroke="#222"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                    <input
                        className="player-input"
                        placeholder="Player 1"
                        value={player}
                        onChange={(e) => setPlayer(e.target.value)}
                    />
                </div>
            </div>
            <div className="game-action-wrapper">
                <button className="game-btn" onClick={goToGame} disabled={!player}>
                    New Game
                </button>
                <div className="join-game-wrapper">
                    <input
                        type="text"
                        placeholder="Game ID?"
                        value={gameId}
                        onChange={(e) => setGameId(e.target.value)}
                    />
                    <button className="game-btn" onClick={goToGame} disabled={!player}>
                        Join
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
    )
}

export default HomeScreen
