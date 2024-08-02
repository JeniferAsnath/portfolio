import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Expertise from './components/Expertise';
import Service from './components/Service';
import Footer from './components/Footer';
import Promesse from './components/Promesse';
import Contact from './components/Contact';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex-1 items-center justify-between mx-auto ">
        <nav className="flex lg:justify-evenly justify-between w-full mx-auto">
          <Navigation />
        </nav>
        <section className="p-8 lg:h-[85vh]   lg:mb-20 text-2xl lg:bottom-10 lg:relative">
          <div className="p-8 md:w-[70%] md:mb-8 lg:w-[65%] m-auto">
            <h1 className="lg:text-4xl md:text-4xl md:w-[100%] text-3xl lg:w-96 text-center lg:relative lg:top-40 font-carter-one">
              Bienvenus sur mon portfolio
            </h1>
          </div>
          <div className="flex z-10 justify-center items-center">
            <div className="lg:flex lg:flex-row-reverse lg:justify-center md:justify-evenly items-center m-auto z-10 flex-col gap-20  ">
              <Image
                height={350}
                width={350}
                src="/Snapchat-828531616.jpg"
                alt="Portfolio Image"
                className="mx-auto lg:m-0 rounded-2xl shadow-xl lg:w-96"
              />
              <div className="lg:w-[35%] relative lg:top-32 left-0 lg:p-0 lg:m-0 md:w-[80%] md:m-auto md:p-12 font-montserrat">
                <p className="text-lg text-left p-4 justify-center items-center ">
                  Je suis Jenifer Asnath, créatrice passionnée du web et du mobile. Mon objectif est de réaliser vos aspirations digitales avec des solutions innovantes.
                </p>
                <p className="text-lg text-left p-4 justify-center items-center mb-3 ">
                  À travers chaque projet, je crée des expériences en ligne qui captivent votre audience.
                </p>
                <div className='flex float-right gap-6'>
                  <Link id='cv' href="" target="" className="text-lg  px-6 py-2 ">
                  Voir le CV 
                  </Link>
                  <Link id='cont' href="" target="" className="text-lg  px-6  py-2 ">
                     Me contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="tie" className="flex h-[55vh] md:h-[45vh] lg:h-96 lg:w-[70%] mx-auto bg-slate-600 relative lg:bottom-80 md:bottom-[45vh] bottom-[55vh] left-0 z-0"></div>
        </section>
        <div>
          <div className='lg:h-[85vh] ' >
            <h2 className={` text-3xl p-4 text-center font-carter-one`}> Mon expertise
            </h2>
            <div ><Expertise /></div>
          </div>
          <div className='  ' >
            <h2 className={` text-3xl p-4 text-center font-carter-one`}>Mes services
            </h2>
            <div className='lg:my-16'><Service /></div>
          </div>
          <div className='  ' >
            <h2 className={` text-3xl p-4 text-center font-carter-one`}>Ma promesse
            </h2>
            <div id='pro' className='lg:my-24'>
              <Promesse />
            </div>
          </div>
          <div className='  ' >
            <h2 className={` text-3xl p-4 text-center font-carter-one`}>Rejoignez moi!
            </h2>
            <div className=''><Contact /></div>
          </div>

        </div>
        <nav>
          <Footer />
        </nav>
      </main>
    </ThemeProvider>
  );
}
