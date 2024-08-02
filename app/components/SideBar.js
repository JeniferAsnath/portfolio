'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Carter_One, Montserrat } from 'next/font/google';
// import about from './'
const carterOne = Carter_One({ subsets: ['latin'], weight: '400' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

const SideBar = ({ children }) => {
    const { theme, toggleTheme } = useTheme();
    const [navOpen, setNavOpen] = useState(false);

    const links = [
        { id: 1, title: 'Home', href: '/', icon: faHome },
        { id: 2, title: 'About', href: '/about', icon: faUser, },
        { id: 3, title: 'Projetcs', href: '/projets', icon: faBriefcase },
        { id: 4, title: 'Contact', href: '/contact', icon: faEnvelope },

    ];

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className="lg:px-1 lg:py-0 ">
            <div className="lg:flex lg:h-[100%] lg:items-center lg:self-center my-auto fixed z-50  ">
                <nav 
                        // style={{ backgroundColor: theme['--bg-gray'] }}
                        className={`lg:flex lg:flex-col  ${navOpen ? 'block' : 'hidden'} lg:block h-[40%]   lg:w-18 lg:w-auto relative left-14 `}>
                    <div
                        style={{ backgroundColor: theme['--secondary-color'] }}
                        className="lg:flex lg:flex-col lg:py-16 lg:px-3 lg:rounded-full lg:space-y-7 hidden lg:justify-center lg:relative"
                    >
                        {links.map(link => (
                            <Link key={link.id} href={link.href}>
                                <div
                                    style={{ backgroundColor: theme['--card'] }}
                                    className="group flex lg:items-center lg:justify-center p-2 lg:rounded-full transition duration-200 hover:bg-gray-700 cursor-pointer lg:relative"
                                >
                                    <FontAwesomeIcon icon={link.icon} color={theme['--primary-color']} className='text-lg lg:text-2xl lg:p-1 z-10 ' />
                                    <p
                                        className={`${montserrat.className}  lg:text-2xl lg:rounded-full lg:absolute  lg:left-0 lg:px-12 lg:p-2     top-1/2 transform -translate-y-1/2 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-2 lg:transition-opacity lg:duration-200`}
                                        style={{ color: theme['--text-color'], backgroundColor: theme['--card'] }}
                                    >
                                        {link.title}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </nav>
                <button
                    onClick={toggleNav}
                    className="lg:hidden p-2 fixed top-0 left-0 m-4"
                    // style={{ backgroundColor: theme['--secondary-color'] }}
                >
                    <FontAwesomeIcon icon={navOpen ? faTimes : faBars} color={theme['--primary-color']} className='md:text-5xl md:p-4 text-3xl p-2' />
                </button>
                {navOpen && (
                    <ul className="flex flex-col justify-center items-center fixed top-14 bg-gradient-to-b  from-zinc-800 to-gray-800 left-0 w-full z-40">
                        {links.map(({ id, title, href }) => (
                            <li key={id} className="px-4 cursor-pointer capitalize py-2 text-xl">
                                <Link href={href} onClick={toggleNav}>
                                    <span className={montserrat.className}>{title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SideBar;
