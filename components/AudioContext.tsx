import React, { createContext, useState, useContext, useRef, ReactNode } from 'react';

interface AudioContextType {
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    currentTrack: string;
    setCurrentTrack: (track: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState('');

    return (
        <AudioContext.Provider value={{ audioRef, isPlaying, setIsPlaying, currentTrack, setCurrentTrack }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};