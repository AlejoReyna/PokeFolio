"use client"

import { useRouter } from 'next/navigation';
import HeaderComponent from "@components/Header/Header";
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
                <p className='pt-2 mx-6 text-sm'> Which project would you like to see first? </p>
                <p className='pt-2 mx-6 text-sm hover-effect' onClick={handleGoBack}> Back to homepage </p>
                <Projects/>
            </div>
        </>
    );
}