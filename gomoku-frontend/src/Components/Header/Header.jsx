import "./Header.css";
import lilo from "../../assets/lilo.png";
import stitch from "../../assets/stitch.png";

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
      <div>
        <h1 className="header-title">{title}</h1>
      </div>
      <div className="header-player">
        <div
          className={`header-left ${currentPlayer === "black" ? "pulse" : ""}`}
        >
          <h3>{leftContent}</h3>
          <img src={lilo} />
        </div>
        <div
          className={`header-right ${currentPlayer === "white" ? "pulse" : ""}`}
        >
          <h3>{rightContent}</h3>
          <img src={stitch} />
        </div>
      </div>
      <div>
        <h3 className="timer">Time: {formatTime(seconds)}</h3>
        <button className="score-btn">Scoreboard</button>
      </div>
    </header>
  );
}
