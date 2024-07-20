import { StaticImageData } from 'next/image';
import mkImage from '@/public/images/mortal.png';
import birdlyImage from '@/public/images/birdlyPreview.png';

export interface Project {
    title: string;
    info: string;
}

export const projects: Project[] = [
    {
        title: "Presale website of the videogame 'Mortal Kombat 1'",
        info: "This website simulates the funcionality of a preorders system, where you input your e-mail and in consequence you get a mail, confirming your preorder."
    },
    {
        title: "Proyecto 2",
        info: "Información del proyecto 2"
    }
];