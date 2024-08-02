import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Expertise from './components/Expertise';
import Service from './components/Service';
import Footer from './components/Footer';
import Promesse from './components/Promesse';
import Contact from './components/Contact';
import SideBar from './components/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Accueil from './components/Accueil';



export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex w-full justify-end items-center m-auto ">
        <div className=" relative lg:bottom-32 lg:h-screen lg:my-auto lg:w-[90%]  ">
          <Accueil />
        </div>
      </main>
    </ThemeProvider>
  );
}
