import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import GameComponent from "../Components/GameComponent/GameComponent"
import "./GameBoardContainer.css"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import api from "../Services/api"

/*
            {winner && (
                <div className="winner-banner">
                    Winner: {winner === "black" ? player1 : player2}!<br />
                    Click "New Game" to play again.
                </div>
            )}
*/

const GameContainer = () => {
    const location = useLocation()

    const [game, setGame] = useState(null)
    const [board, setBoard] = useState(null)

    const player = location.state.player
    const [gameId, setGameId] = useState(location.state.gameId)

    const getGame = async () => {
        if (game && game.winner) {
            return
        }

        try {
            if (gameId == "" && !game) {
                console.log("created game")
                const res = await api.createGame()
                setGameId(res.data._id)
                setGame(res.data)
            } else {
                const res = await api.getGame(gameId)
                setGame(res.data)
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            getGame()
        }, 1500)

        return () => clearInterval(interval)
    }, [game])

    const onCellClick = async (cellIndex) => {
        try {
            await api.createMove(game._id, player, cellIndex)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="game-container">
            <Header title="Gomoku" />

            <div>
                {game && <p>Game ID: {game._id}</p>}
                <p>Name: {player}</p>
            </div>

            {game && game.winner ? (
                <div className="winner-banner">
                    <p>Winner: {game.winner}</p>
                    <p>Click "New Game" to play again.</p>
                </div>
            ) : null}

            <div className="content">
                {game ? (
                    <GameComponent
                        game={game}
                        player={player}
                        onCellClick={onCellClick}
                    />
                ) : (
                    <p>Loading game</p>
                )}
            </div>
        </div>
    )
}

export default GameContainer
