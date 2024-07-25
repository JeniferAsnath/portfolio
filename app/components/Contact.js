import React from 'react'
import Section from './Section';
import Link from 'next/link';
import {
  faGithub,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <Section title={"Rejoignez moi!"}>
    <div className="py-10 max-w-screen-lg mx-auto items-center justify-center ">
      <p>
        Vous souhaitez rester connecté(e) et suivre mes dernières actualités
        ? Rejoignez-moi sur les réseaux sociaux ! Vous trouverez ci-dessous
        les liens vers mes profils où je partage mes projets, mes
        inspirations et mes conseils :
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg">
          <Link
            href="https://github.com/JeniferAsnath"
            className="text-gray-300 hover:text-white mr-4"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          <p className="text-gray-300 font-bold text-lg">Jenifer Asnath</p>
        </div>
        <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg">
          <Link href="#" className="text-gray-300 hover:text-white mr-4">
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="text-green-900"
            />
          </Link>
          <p className="text-gray-300 font-bold text-lg">Jenifer Asnath</p>
        </div>
        <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg">
          <Link href="#" className="text-gray-300 hover:text-white mr-4">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="text-purple-900"
            />
          </Link>
          <p className="text-gray-300 font-bold text-lg">Jenal wang</p>
        </div>
        <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg">
          <Link href="#" className="text-gray-300 hover:text-white mr-4">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="text-blue-700  "
            />
          </Link>
          <p className="text-gray-300 font-bold text-lg">
            Jenifer Asnath Lungwangu
          </p>
        </div>
      </div>
    </div>
  </Section>
  )
}

export default Contact