"use client"

import React, { useState, useEffect, MutableRefObject } from 'react';
import { useRouter } from 'next/navigation';
import DialogBox from '@public/images/text-box.png';
import { TypingText } from './Script/TypingText';
import { MusicComponent } from './Script/Music';
import Image from "next/image";
import './Homepage.css';


interface HomepageProps {
    music: string;
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    clickSound: string;
    setUserInteracted: (value: boolean) => void;
}

export default function HomepageComponent() {
    const [isTypingFinished, setIsTypingFinished] = useState(false);
    const router = useRouter();



    const goToProjects = (): void => {
        router.push('ProjectList');
    };

    return (
        <div className="background min-h-screen flex flex-col justify-between">
            <div className="typing-text justify-center text-black w-full max-w-4xl mx-auto px-4">

                <TypingText onFinished={(): void => setIsTypingFinished(true)}/>
            </div>

            <div className={`w-full max-w-[700px] mx-auto px-4 mb-4 transition-opacity duration-1000 ${isTypingFinished ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative">
                    <Image src={DialogBox} alt={'A Pokemon Dialog Box'} className="w-full h-auto"/>
                    <div className="text-black absolute inset-0 flex flex-col justify-center items-center p-6">
                        <div className="audio-container">
                        <MusicComponent />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-center w-full mb-4">
                        What would you like to do next?
                        </p>
                        <div className="flex justify-center items-center w-full space-x-4">
                            <div className="goToProjects cursor-pointer" onClick={goToProjects}>
                                <p className="hover-effect option text-center">Go to my projects</p>
                            </div>
                            <div className="cursor-pointer">
                               <p className="hover-effect option text-center"> Under construction </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}