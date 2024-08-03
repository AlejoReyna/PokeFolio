import { StaticImageData } from 'next/image';

export interface Project {
    title: string;
    info: string;
    video: string;
    url: string;
    repo: string;
}

export const projects: Project[] = [
    {
        title: "Presale website of the videogame 'Mortal Kombat 1'",
        info: "This website simulates the funcionality of a preorders system, where you input your e-mail and in consequence you get a mail, confirming your preorder.",
        video: "/videos/preview-mk.mp4",
        url: "https://next-mk.vercel.app/",
        repo: "https://github.com/AlejoReyna/MortalKombat"
    },
    {
        title: "Birdlypay - A hackathon project",
        info: "This project was built during the OnChainSummer buildathon by Base. Birdlypay is an app able to create payment links for cryptocurrencies, deleting the need to introduce a long wallet, among other services",
        video: "/videos/preview-birdly.mp4",
        url: "https://birdlypay.vercel.app/landingPage",
        repo: "https://github.com/AlejoReyna/Birdlypay"
    }
];