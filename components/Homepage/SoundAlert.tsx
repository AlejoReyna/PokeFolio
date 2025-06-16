"use client"

import React from 'react';
import './SoundAlert.css';

interface SoundAlertProps {
    onAccept: () => void;
    onDecline: () => void;
}

export const SoundAlert: React.FC<SoundAlertProps> = ({ onAccept, onDecline }) => {
    return (
        <div className="sound-alert-overlay">
            <div className="sound-alert-container">
                <div className="pokemon-dialog-box">
                    <div className="question-text">
                        Would you like to enable sound effects?
                    </div>
                    <div className="options-container">
                        <div className="option" onClick={onAccept}>
                            Yes
                        </div>
                        <div className="option" onClick={onDecline}>
                            No
                        </div>
                    </div>
                    <i></i>
                </div>
            </div>
        </div>
    );
}; 