import axios from "axios"

// Kommunikation med backend.
const createGame = async () => {
    const data = (await axios.post("http://localhost:3000/game/create")).data
    setGame(data)
}

const joinGame = async (gameId) => {
    const data = (await axios.get(`http://localhost:3000/game/${gameId}`)).data
    setGame(data)
}

const createMove = (gameId, username, moveIndex) => {
    axios.post("http://localhost:3000/game/move", {
        gameId: gameId,
        player: username,
        moveIndex: moveIndex
    })
}

export { createGame, joinGame, createMove }
