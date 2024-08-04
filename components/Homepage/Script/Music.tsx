"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import musicIcon from '@public/images/music-icon.png';
import { useMusic } from '@components/MusicContext';

export const MusicComponent: React.FC = () => {
    const { audioFiles, currentTrack, isPlaying, audioRef, playPause, nextTrack, prevTrack } = useMusic();

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = audioFiles[currentTrack].url;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrack, audioFiles, isPlaying, audioRef]);

    return (
        <div className="audio-container flex">
            <Image src={musicIcon} width={48} height={48} alt="A pixelated music icon"/>
            <audio
                ref={audioRef}
                onEnded={nextTrack}
            />
            <button onClick={prevTrack} className='m-2'>Previous</button>
            <button onClick={playPause} className='m-2'>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={nextTrack} className='m-2'>Next</button>
        </div>
    )
}