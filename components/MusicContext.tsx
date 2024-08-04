"use client"
import React, { createContext, useState, useContext, useRef, ReactNode, useEffect } from 'react';

interface AudioFile {
    name: string;
    url: string;
}

interface MusicContextType {
    audioFiles: AudioFile[];
    currentTrack: number;
    isPlaying: boolean;
    audioRef: React.RefObject<HTMLAudioElement>;
    setCurrentTrack: (track: number) => void;
    setIsPlaying: (isPlaying: boolean) => void;
    playPause: () => void;
    nextTrack: () => void;
    prevTrack: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const audioFiles = [
        { name: 'Ecruteak City', url: 'tracks/Ecruteak-City.mp3' },
        { name: 'National Park', url: 'tracks/National-Park.mp3' },
        { name: 'PokeViolet City', url: 'tracks/PokeViolet-City.mp3' },
    ];

    useEffect(() => {
        const savedState = localStorage.getItem('musicState');
        if (savedState) {
            const { currentTrack: savedTrack, isPlaying: savedIsPlaying, currentTime: savedTime } = JSON.parse(savedState);
            setCurrentTrack(savedTrack);
            setIsPlaying(savedIsPlaying);
            setCurrentTime(savedTime);
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = currentTime;
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentTrack, isPlaying, currentTime]);

    useEffect(() => {
        localStorage.setItem('musicState', JSON.stringify({ currentTrack, isPlaying, currentTime }));
    }, [currentTrack, isPlaying, currentTime]);

    const playPause = () => {
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        setCurrentTrack((prev) => (prev + 1) % audioFiles.length);
        setCurrentTime(0);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        setCurrentTrack((prev) => (prev - 1 + audioFiles.length) % audioFiles.length);
        setCurrentTime(0);
        setIsPlaying(true);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateTime = () => setCurrentTime(audio.currentTime);
            audio.addEventListener('timeupdate', updateTime);
            return () => audio.removeEventListener('timeupdate', updateTime);
        }
    }, []);

    return (
        <MusicContext.Provider value={{
            audioFiles,
            currentTrack,
            isPlaying,
            audioRef,
            setCurrentTrack,
            setIsPlaying,
            playPause,
            nextTrack,
            prevTrack
        }}>
            {children}
            <audio
                ref={audioRef}
                src={audioFiles[currentTrack].url}
                onEnded={nextTrack}
            />
        </MusicContext.Provider>
    );
};

export const useMusic = () => {
    const context = useContext(MusicContext);
    if (context === undefined) {
        throw new Error('useMusic must be used within a MusicProvider');
    }
    return context;
};