"use client"

export default function AboutMeComponent() {
    return(
        <>
        <div className="background min-h-screen flex flex-col justify-between">

            <div className="flex-col bg-black justify-center">
                <div className="myImage w-full md:w-1/2 mb-4 md:mb-0">
                    <div className="relative  w-full rounded overflow-hidden aspect-square">
                        text
                    </div>
                </div>

                <div className='flex opac-black p-5 h-100 text-white flex-col w-full md:w-1/2 items-center md:ml-8'>
                    <div className='myInfo text-left mb-4 text-xl md:text-xl font-bold w-full'>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}