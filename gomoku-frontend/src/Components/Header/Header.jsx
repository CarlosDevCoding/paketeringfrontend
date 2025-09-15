import "./Header.css";

export default function Header({
  title,
  subtitle,
  leftContent,
  rightContent,
  seconds,
  currentPlayer,
}) {
  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <header className="app-header">
      <div className="header-top">
        <div
          className={`header-left ${currentPlayer === "black" ? "pulse" : ""}`}
        >
          {leftContent}
        </div>
        <h1 className="header-title">{title}</h1>
        <div
          className={`header-right ${currentPlayer === "white" ? "pulse" : ""}`}
        >
          {rightContent}
        </div>
      </div>

      <div className="header-subtitle">
        <button className="score-btn">Score</button>
        <div className="timer">Time: {formatTime(seconds)}</div>
      </div>
    </header>
  );
}
