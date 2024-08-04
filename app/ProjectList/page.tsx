"use client"

import { useRouter } from 'next/navigation';
import HeaderComponent from "@components/Header/Header";
import Projects from './Projects/page';
import { useMusic } from "@components/MusicContext";
import { useEffect } from 'react';

export default function ListComponent() {
    const router = useRouter();
    const { isPlaying, playPause, audioRef, currentTrack, audioFiles } = useMusic();

    const handleGoBack = () => {
        router.push('/');
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = audioFiles[currentTrack].url;
            if (isPlaying) {
                audioRef.current.play().catch(error => console.error("Audio playback failed", error));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrack, audioFiles, audioRef]);

    return(
        <>
            <HeaderComponent/>
            <div className="flex text-black flex-col background min-h-screen">
                <p className='pt-2 mx-6 text-sm'> Which project would you like to see first? </p>
                <p className='pt-2 mx-6 text-sm hover-effect' onClick={handleGoBack}> Back to homepage </p>
                <Projects/>
            </div>
            <audio
                ref={audioRef}
                src={audioFiles[currentTrack].url}
                loop={false}
                onEnded={() => {
                }}
            />
        </>
    );
}