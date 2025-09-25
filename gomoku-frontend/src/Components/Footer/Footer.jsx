import React from "react"
import { useNavigate } from "react-router-dom"
import "./Footer.css"

export default function Footer({ onRestartClick, onPauseClick, paused }) {
    const navigate = useNavigate()
    const handleHomeClick = () => {
        navigate("/")
    }
    return (
        <footer className="app-footer">
            <div className="footer-inner">
                <button className="footer-button" onClick={handleHomeClick}>
                    Homepage
                </button>
            </div>
        </footer>
    )
}
