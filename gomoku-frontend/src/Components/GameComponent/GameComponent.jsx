import './GameBoardComponent.css';

export default function GameComponent ({ board, onCellClick }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell || 'empty'}`}
              onClick={() => onCellClick(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}