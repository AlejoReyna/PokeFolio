import React, { useState, useEffect } from 'react';

const TypingText = ({ onFinished }) => {
    const [text, setText] = useState('');
    const fullText = 'Welcome to my projects portfolio!';

    useEffect(() => {
        if (text.length < fullText.length) {
            setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
            }, 100);
        } else {
            onFinished();
        }
    }, [text, fullText, onFinished]);

    return <h1 className='typing-text'>{text}</h1>;
};

export default TypingText;
