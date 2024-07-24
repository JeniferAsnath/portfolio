import Image from "next/image";
import Link from 'next/link'
import { ThemeProvider } from './context/ThemeContext';
import Navigation from "./components/Navigation";
import { Carter_One, Montserrat } from 'next/font/google';
import Expertise from "./components/Expertise";
import Section from "./components/Section";
import Service from "./components/Service";

const carterOne = Carter_One({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <ThemeProvider>
      <main className=" flex-1 items-center justify-between mx-auto ">
        <nav className="flex lg:justify-evenly justify-between w-full mx-auto ">
          <Navigation />
        </nav>
        <section className="p-8 h-screen lg:mb-20 text-2xl lg:bottom-10 lg:relative">
          <div className=" p-6 md:w-[70%] md:mb-8 lg:w-[65%] m-auto ">
            <p className={`${carterOne.className} lg:text-4xl md:text-4xl md:w-[100%] text-3xl lg:w-72 text-center lg:relative lg:top-40   `}>Bienvenus sur mon portfolio</p>
          </div>
          <div className="flex z-10 justify-center items-center  ">
            <div className="lg:flex lg:flex-row-reverse lg:justify-around md:justify-evenly items-center m-auto z-10 flex-col   ">
              <Image
                height={250}
                width={250}
                src="/Snapchat-828531616.jpg"
                alt="Portfolio Image"
                className="mx-auto lg:m-0   rounded-2xl shadow-xl lg:w-96"
              />
              <div className=" lg:w-[35%] relative lg:top-32 left-0 lg:p-4 lg:m-0 md:w-[80%] md:m-auto md:p-12 ">
                <p className="  text-lg text-left p-4 justify-center items-center">Je suis Jenifer Asnath, créatrice passionnée du web et du mobile. Mon objectif est de réaliser vos aspirations digitales avec des solutions innovantes.</p>
                <p className="  text-lg text-left p-4 justify-center items-center">À travers chaque projet, je crée des expériences en ligne qui captivent votre audience.</p>
                <Link
                  href=""
                  target=""
                  className="text-xl float-right p-6 text-sky-700"
                // rel="noreferrer"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
          <div id="tie" className="flex h-[55vh] md:h-[45vh] lg:h-96 lg:w-[80%] mx-auto bg-slate-600 bo relative lg:bottom-80 md:bottom-[45vh] bottom-[55vh] left-0 z-0">
          </div>
        </section>
        <Expertise/>
        <Service/>
      </main>

    </ThemeProvider>
  );
}
