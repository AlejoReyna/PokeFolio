"use client"

import React, { useState, useEffect } from 'react';

interface TypingTextProps {
    onFinished: () => void;
}

export const TypingText: React.FC<TypingTextProps> = ({ onFinished }) => {
    const [text, setText] = useState<string>('');
    const fullText: string = 'Welcome to my projects portfolio!';

    useEffect(() => {
        if (text.length < fullText.length) {
            const timerId: NodeJS.Timeout = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
            }, 50);

            return () => clearTimeout(timerId);
        } else {
            onFinished();
        }
    }, [text, fullText, onFinished]);

    return <h1 className="typing-text">{text}</h1>;
};
