'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import ToggleTheme from './ToggleTheme';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accueil = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <section className="flex-1 lg:w-full justify-center items-center ">
            <div className="p-10 md:w-[70%] md:mb-8 lg:w-full m-auto lg:relative lg:top-52 mt-14   ">
                <h1
                    className="lg:text-5xl md:text-3xl text-3xl lg:ml-12 lg:text-left text-center  font-carter-one " >
                    Jenifer Asnath L.
                </h1>
                <h2
                    className="lg:text-5xl md:text-3xl  text-3xl lg:ml-12 lg:text-left text-center  font-carter-one">
                    _FullStack developper
                </h2>
            </div>
            <div
                style={{ backgroundColor: theme['--bg-gray'] }}
                className="flex z-10 justify-center items-center w-full  rounded-2xl lg:h-[65vh] ">
                <div className="lg:flex lg:flex-row-reverse lg:justify-center  md:justify-center  items-center m-auto z-10  gap-20 p-6">
                    <Image
                        height={450}
                        width={450}
                        src="/Snapchat-828531616.jpg"
                        alt="Portfolio Image"
                        className="mx-auto lg:m-0 rounded-2xl shadow-xl lg:w-[40%] relative lg:bottom-40"
                    />
                    <div
                        style={{ color: theme['--text-secondary'] }}
                        className="lg:w-[45%] mt-4   space-y-7 px-3 font-montserrat">
                        <p className="text-xl text-left leading-9 justify-center items-center">
                            Je suis une créatrice passionnée du web et du mobile. Mon objectif est de réaliser vos aspirations digitales avec des solutions innovantes.
                        </p>
                        <p className="text-xl text-left leading-9  justify-center items-center ">
                        À travers chaque projet, je m efforce de créer des expériences en ligne qui non seulement captivent votre audience, mais qui reflètent également votre identité unique.                         </p>
                        <div className='flex gap-8 lg:flex-row flex-col'>
                            <div className="flex lg:float-left float-right justify-center items-center ">
                                <Link id="cv" href="/about" target="" className="text-lg px-6 py-3 rounded-xl">
                                    En savoir plus
                                </Link>
                            </div>
                            <div
                                className=" flex lg:float-left float-right justify-center items-center">
                                <Link
                                    href="/CV de lungwangu bikumba.pdf"
                                    download
                                    className="text-lg text-center px-6 py-3 rounded-xl"
                                    style={{ color: theme['--text'], backgroundColor: theme['--bg-brown'] }}
                                >
                                    <FontAwesomeIcon icon={faDownload} color={theme['--text']} className="text-2xl justify-center items-center " />
                                    Télécharger CV
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div
                id="tie"
                style={{ backgroundColor: theme['--bg-gray'] }}
                className="flex h-[65vh] lg:h-96 rounded-3xl md:h-[50vh] w-full  lg:w-[90%] mx-auto bg-slate-600 relative lg:bottom-80 md:bottom-[50vh] bottom-[65vh] left-0 z-0 "
            ></div> */}
        </section>
    );
};

export default Accueil;
