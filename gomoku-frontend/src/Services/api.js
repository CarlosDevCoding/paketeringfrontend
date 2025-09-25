import axios from "axios"

// Kommunikation med backend.
const api = {
    createGame: async () => {
        return axios.post("http://localhost:3000/game/create")
    },

    joinGame: async (gameId) => {
        return axios.get(`http://localhost:3000/game/${gameId}`)
    },

    getGame: (gameId) => {
        return axios.get(`http://localhost:3000/game/${gameId}`)
    },

    createMove: (gameId, username, moveIndex) => {
        return axios.post("http://localhost:3000/game/move", {
            gameId: gameId,
            player: username,
            moveIndex: moveIndex
        })
    }
}

export default api
