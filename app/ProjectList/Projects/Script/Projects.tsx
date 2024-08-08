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
    },
    {
        title: "Remaster of the UANL college services",
        info: "A browser extension that modifies the styles and structure of the 'https://deimos.dgi.uanl.mx/', which is the selections service page of the UANL, built using JavaScript and Bootstrap. (Deployment doesnt redirect to UANL service as you need a universitary account to access them)",
        video: "/videos/preview-siase.mp4",
        url: "",
        repo: "https://github.com/AlejoReyna/UANLInterface"

    }
];