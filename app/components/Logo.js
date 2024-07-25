import Link from 'next/link';
import React from 'react';
import { Carter_One } from 'next/font/google';

const carterOne = Carter_One({ subsets: ['latin'], weight: '400' });

const Logo = () => {
    return (
        <div id='logo' className="cursor-pointer capitalize text-2xl lg:text-3xl">
            <Link href="" className={`font-carter-one`}>
                Jenifer Asnath L.
            </Link>
        </div>
    );
}

export default Logo;
