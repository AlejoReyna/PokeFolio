"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import './projects.css';
import { projects, Project } from './Script/Projects';
import LeftArrow from '@/public/images/left-arrow.png';
import RightArrow from '@/public/images/right-arrow.png';

interface ProjectComponentProps {}

const ProjectComponent: React.FC<ProjectComponentProps> = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToPrevious = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const goToNext = (): void => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % projects.length
        );
    };

    const currentProject: Project = projects[currentIndex];

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex items-center justify-between w-full px-4 md:px-8 lg:px-16">
                <div className="cursor-pointer" onClick={goToPrevious}>
                    <Image src={LeftArrow} className="arrow w-8 h-8 md:w-12 md:h-12" alt="Arrow to go backwards" width={48} height={48} />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-4">
                    <div className='projectImage w-full md:w-1/2 mb-4 md:mb-0'>
                        <div className="relative w-full rounded-2xl overflow-hidden aspect-square">
                            <video autoPlay loop muted className="w-full h-full object-cover">
                                <source src="/videos/preview-mk.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>

                    <div className='flex flex-col w-full md:w-1/2 items-start md:ml-8'>
                        <div className='projectTitle text-left mb-4 text-2xl md:text-3xl font-bold'>
                            {currentProject.title}
                        </div>
                        <p className="text-left text-sm md:text-base">{currentProject.info}</p>
                    </div>
                </div>

                <div className="cursor-pointer" onClick={goToNext}>
                    <Image src={RightArrow} alt="Arrow to go forwards" className="arrow w-8 h-8 md:w-12 md:h-12" width={48} height={48} />
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;