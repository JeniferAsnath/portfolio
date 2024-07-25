import React from 'react'
import Image from 'next/image';
import Section from './Section'

const Promesse = () => {
    return (
        <Section title={"Ma promesse"}>
            <div className="flex flex-col w-full md:flex-row lg:w-[80%] justify-center items-center m-auto py-8 px-6">
                <Image
                    direction="left"
                    src="/handshake_10729200.png"
                    width={250}
                    height={200}
                    alt=''
                    className="md:w-1/3 p-10 w-1/2 flex-2 h-auto float-right  md:h-auto"
                />
                <p className="md:w-1/2 flex-1 justify-end items-end self-end m-auto2 p-10 w-full text-lg text-center md:text-left lg:p-10  lg:text-left  h-80">
                    Mon engagement en tant que créatrice web et mobile est de
                    transcender vos aspirations digitales en des réalisations
                    mémorables. Chaque projet que je touche est imprégné de mon
                    dévouement à créer des expériences en ligne qui non seulement
                    captivent, mais qui aussi reflètent fidèlement votre identité.
                    Préparez-vous à propulser votre présence digitale vers de nouveaux
                    sommets, ensemble, dès aujourdhui !
                </p>
            </div>
        </Section>)
}

export default Promesse