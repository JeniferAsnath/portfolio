import Link from 'next/link'
import React from 'react'
import { Carter_One, Montserrat } from 'next/font/google';

const carterOne = Carter_One({ subsets: ['latin'], weight: '400' });
const Section = ({ children, title, Name }) => {
    return (
        <div className=" w-[80%] box-border justify-center items-center relative lg:bottom-32 lg:h-screen m-auto">
            <h2 className={`${carterOne.className} text-3xl p-4 text-center`}>
                {title}
            </h2>
            <h2 className={"text-2xl font-bold  md:py-2"}>{Name} </h2>

            <div className=" py-8 justify-around font-opensans text-base">{children}</div>
        </div>)
}

export default Section