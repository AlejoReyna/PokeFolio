import { StaticImageData } from 'next/image';
import mkImage from '@/public/images/mortal.png';
import birdlyImage from '@/public/images/birdlyPreview.png';

export interface Project {
    title: string;
    image: StaticImageData;
    info: string;
}

export const projects: Project[] = [
    {
        title: "Proyecto 1",
        image: mkImage,
        info: "Información del proyecto 1"
    },
    {
        title: "Proyecto 2",
        image: birdlyImage,
        info: "Información del proyecto 2"
    }
];