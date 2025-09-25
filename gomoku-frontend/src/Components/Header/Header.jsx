import "./Header.css"

export default function Header({ title }) {
    return (
        <header className="app-header">
            <div>
                <h1 className="header-title">{title}</h1>
            </div>

            <div>
                <button className="score-btn">Scoreboard</button>
            </div>
        </header>
    )
}
