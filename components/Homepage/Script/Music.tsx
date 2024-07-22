"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import musicIcon from '@public/images/music-icon.png';

interface AudioFile {
    name: string;
    url: string;
}

interface MusicComponentProps {
    audioFiles: AudioFile[];
    onFinished: () => void;
}

export const MusicComponent: React.FC<MusicComponentProps> = ({ audioFiles, onFinished }) => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (currentTrack >= audioFiles.length) {
            onFinished();
        }
    }, [currentTrack, audioFiles.length, onFinished]);

    const playPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const nextTrack = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setCurrentTrack((prev) => (prev + 1) % audioFiles.length);
            setIsPlaying(true);
            setTimeout(() => {
                audioRef.current.play();
            }, 0);
        }
    };

    const prevTrack = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setCurrentTrack((prev) => (prev - 1 + audioFiles.length) % audioFiles.length);
            setIsPlaying(true);
            setTimeout(() => {
                audioRef.current.play();
            }, 0);
        }
    };

    return (
        <div className="audio-container flex">
            <Image src={musicIcon} width={48} height={48} alt="A pixelated music icon"/>
            {/** <p>{audioFiles[currentTrack].name}</p> **/}
            <audio
                ref={audioRef}
                src={audioFiles[currentTrack].url}
                onEnded={nextTrack}
            />
            <button onClick={prevTrack} className='m-2'>Previous</button>
            <button onClick={playPause}  className='m-2'>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={nextTrack}  className='m-2'>Next</button>
        </div>
    )
}