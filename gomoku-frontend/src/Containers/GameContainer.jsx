import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import GameComponent from "../Components/GameComponent/GameComponent"
import "./GameBoardContainer.css"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"

/*
            {winner && (
                <div className="winner-banner">
                    Winner: {winner === "black" ? player1 : player2}!<br />
                    Click "New Game" to play again.
                </div>
            )}
*/

const GameContainer = () => {
    const board = useState(null)

    const location = useLocation()
    const player = location.state.player

    return (
        <div className="game-container">
            <Header
                title="Gomoku"
                seconds="123"
                leftContent={<span>abc</span>}
                rightContent={<span>123</span>}
                currentPlayer="test"
            />
            <div className="content">
                {board ? <GameComponent board={board} /> : <p>inget spel</p>}
            </div>
        </div>
    )
}

export default GameContainer
