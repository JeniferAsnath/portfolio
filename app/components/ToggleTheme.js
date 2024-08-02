'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Carter_One, Montserrat } from 'next/font/google';

const carterOne = Carter_One({ subsets: ['latin'], weight: '400' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });


const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme();
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className=" h-screen lg:px-20 lg:py-14  md:p-8 p-4">
            <div
                className="lg:h-12 lg:w-12 h-8 w-8 p-4 md:h-12 md:w-12 float-right  rounded-full cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: theme['--primary-color'] }}
                onClick={toggleTheme}
            >
                <FontAwesomeIcon icon={faMoon} size="2x" color={theme['--fab']} />
            </div>
        </div>
    )
}

export default ToggleTheme