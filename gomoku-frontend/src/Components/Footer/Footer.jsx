import React from 'react';
import './Footer.css';

export default function Footer({buttonText ='Restart', onButtonClick}){
    return(
        <footer className="app-footer">
            <div className="footer-inner">
                <button className="footer-button" onClick={onButtonClick}>
                    {buttonText}
                </button>
            </div>
        </footer>
    )
}