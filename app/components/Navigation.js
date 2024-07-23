import Link from 'next/link'
import React, { useState } from "react";
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
    const { theme } = useTheme();
    const [navOpen, setNavOpen] = useState(false);
    
  
    const links = [
        { id: 1, title: "Accueil", href: "/" },
        { id: 2, title: "Projets", href: "/projets" },
        { id: 3, title: "Prestations", href: "/prestations" },
        { id: 4, title: "À Propos", href: "/about" },
    
      ];
      const handleToggleNav = () => {
        setNavOpen(!navOpen);
        toggleNav();
      };
      const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
  return (
    <nav>
        {navOpen && (
        <ul className="flex flex-col justify-center items-center fixed top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-40">
          {links.map(({ id, title, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link href={href} onClick={handleToggleNav}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navigation