import React from 'react';
import Section from './Section';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://github.com/JeniferAsnath",
    icon: faGithub,
    text: "Jenifer Asnath",
    iconClass: "text-gray-900 hover:text-white mr-4",
    containerClass: "bg-gray-800 p-6 rounded-lg"
  },
  {
    href: "#",
    icon: faWhatsapp,
    text: "Jenifer Asnath",
    iconClass: "text-green-500 hover:text-white mr-4",
    containerClass: "bg-gray-800 p-6 rounded-lg"
  },
  {
    href: "#",
    icon: faInstagram,
    text: "Jenal wang",
    iconClass: "text-purple-600 hover:text-white mr-4",
    containerClass: "bg-gray-800 p-6 rounded-lg"
  },
  {
    href: "#",
    icon: faLinkedin,
    text: "Jenifer Asnath Lungwangu",
    iconClass: "text-blue-700 hover:text-white mr-4",
    containerClass: "bg-gray-800 p-6 rounded-lg"
  }
];

const Contact = () => {
  return (
    <Section>
      <div className="py-10 max-w-screen-lg mx-auto items-center justify-center ">
        <p>
          Vous souhaitez rester connecté(e) et suivre mes dernières actualités ? Rejoignez-moi sur les réseaux sociaux ! Vous trouverez ci-dessous les liens vers mes profils où je partage mes projets, mes inspirations et mes conseils :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
          {socialLinks.map((link, index) => (
            <div key={index} id='link' className={`flex items-center justify-center ${link.containerClass}`}>
              <Link href={link.href} className={link.iconClass}>
                <FontAwesomeIcon icon={link.icon} size="2x" />
              </Link>
              <p className=" font-bold text-lg">{link.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
