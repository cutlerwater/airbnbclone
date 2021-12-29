import React from 'react'
import Image from "next/image"
import Profile from "../public/image.jpg";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]">
            <Image src={Profile}
            layout="fill" objectFit="cover" />
            <div className="absolute text-center top-1/2 w-full">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 px-10 py-4 bg-white rounded-full shadow-md font-bold my-3
                hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner;