import "./GameBoardComponent.css"
import Cell from "../Cell/Cell.jsx"

export default function GameComponent({ game, player, onCellClick }) {
    console.log(game.field)
    return (
        <div className="board">
            {game.field.map((cell, cellIndex) => {
                return (
                    <Cell
                        key={cellIndex}
                        value={cell}
                        owned={cell === player ? true : false}
                        onClick={() => onCellClick(cellIndex)}
                    ></Cell>
                )
            })}
        </div>
    )
}

/*
            {game.field.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value={cell}
                            onClick={() => onCellClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
*/
