"use client"

import { useRouter } from 'next/navigation';
import HeaderComponent from "@/components/Header/Header";
import Projects from './Projects/page';

export default function ListComponent() {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/');  // Assuming the homepage is at the root route
    };

    return(
        <>
            <HeaderComponent/>

            <div className="flex text-black flex-col background min-h-screen">
                Selecciona
                <p className='pt-4' onClick={handleGoBack}> Back to homepage </p>
                <Projects/>
            </div>
        </>
    );
}