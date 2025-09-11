import "./GameBoardComponent.css";
import Cell from "../Cell/Cell.jsx";

export default function GameComponent({ board, onCellClick }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
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
    </div>
  );
}
