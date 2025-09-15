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
<<<<<<< HEAD
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
=======
  <div className="header-top">
    <div className="header-left">{leftContent}</div>
    <div className="header-center">
      <button className="score-btn">Score</button>
      <div className="timer">Time: {formatTime(seconds)}</div>
    </div>
    <div className="header-right">{rightContent}</div>
  </div>
  <h1 className="header-title">{title}</h1>
</header>
>>>>>>> c4a737cccc81b79f88b842c4b5fe285ad067406d

  );
}
