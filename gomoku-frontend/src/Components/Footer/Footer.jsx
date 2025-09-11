import React from 'react';
import './Footer.css';

export default function Footer({ onRestartClick, onPauseClick, paused }) {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <button className="footer-button" onClick={onRestartClick}>
          Restart
        </button>
        <button className="footer-button" onClick={onPauseClick}>
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </footer>
  );
}
