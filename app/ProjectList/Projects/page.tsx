"use client";

import React, { useState } from 'react';
import Image from 'next/image';
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
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex items-center">
                <div className="px-4 cursor-pointer" onClick={goToPrevious}>
                    <Image src={LeftArrow} alt="Arrow to go backwards" layout="responsive" />
                </div>

                <div className="flex flex-col items-center mx-4 w-[300px]">
                    <div className='projectTitle text-center mb-4'>
                        {currentProject.title}
                    </div>

                    <div className='projectImage flex flex-col items-center'>
                        <div className="relative w-[500px] h-[500px]">
                            <Image
                                src={currentProject.image}
                                alt={currentProject.title}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className="mt-2 text-center">{currentProject.info}</p>
                    </div>
                </div>

                <div className="px-4 cursor-pointer" onClick={goToNext}>
                    <Image src={RightArrow} alt="Arrow to go forwards" layout="responsive" />
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;