import Link from 'next/link'
import React from 'react'
import { Carter_One } from 'next/font/google';

const carterOne = Carter_One({ subsets: ['latin'], weight: '400' });
const Section = ({ children, title, Name }) => {
    return (
        <div className=" w-[80%] box-border justify-center items-center relative   lg:h-screen m-auto">
            <h2 className={` text-3xl p-4 text-center font-carter-one`}>
                {title}
            </h2>
            <h2 className={carterOne.className}>{Name} </h2>

            <div className=" py-8 justify-around font-opensans text-base">{children}</div>
        </div>)
}

export default Section