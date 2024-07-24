'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Carter_One, Montserrat } from 'next/font/google';

const carterOne = Carter_One({ subsets: ['latin'], weight: '400' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

const Navigation = () => {
    const { theme, toggleTheme } = useTheme();
    const [navOpen, setNavOpen] = useState(false);

    const links = [
        { id: 1, title: 'Accueil', href: '/' },
        { id: 2, title: 'Projets', href: '/projets' },
        { id: 3, title: 'Prestations', href: '/prestations' },
        { id: 4, title: 'À Propos', href: '/about' },
    ];

    const handleToggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="flex w-full justify-between items-center lg:w-[80%] p-2 ">
            <div>
                <Logo />
            </div>
            <div className="flex  items-center justify-center">
                <ul className="hidden md:flex justify-end mr-4">
                    {links.map(({ id, title, href }) => (
                        <li
                            key={id}
                            className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 dark:hover:text-gray-600 hover:text-xl duration-200"
                        >
                            <Link className={` rounded-md hover:border-b-2 ${montserrat.className}`} href={href}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    className="mr-2 py-2 rounded-full cursor-pointer flex items-center justify-center"
                    // style={{ backgroundColor: theme['--primary-color'] }}
                    onClick={toggleTheme}
                >
                    {theme['--text-color'] === '#fff' ? (
                        <FontAwesomeIcon icon={faSun} size="2x" color={theme['--text-color']} />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} size="2x" color={theme['--text-color']} />
                    )}
                </div>
                <button className=" md:hidden  items-center justify-center" onClick={handleToggleNav}>
                    {navOpen ? <FontAwesomeIcon icon={faTimes} size="2x" /> : <FontAwesomeIcon icon={faBars} size="2x" />}
                </button>
                {navOpen && (
                    <ul className="flex flex-col justify-center items-center fixed top-14 bg-gradient-to-b  from-zinc-800 to-gray-800 left-0 w-full z-40">
                        {links.map(({ id, title, href }) => (
                            <li key={id} className="px-4 cursor-pointer capitalize py-2 text-xl">
                                <Link href={href} onClick={handleToggleNav}>
                                    <span className={montserrat.className}>{title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </nav>
    );
};

export default Navigation;
