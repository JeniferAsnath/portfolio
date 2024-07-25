import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-dark py-8 h-[35%]  ">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-evenly justify-around  px-4">
        <div className="flex-3 items-center md:text-left md:ml-20 mb-4 md:mb-0">
          <Logo />
        </div>
        <div className="grid grid-cols-2 gap-6  flex-wrap justify-center items-center md:justify-start  px-4 cursor-pointer ">
          <Link href="#" className=" hover:text-white mr-4 mb-2 md:mb-0">Accueil</Link>
          <Link href="#" className=" hover:text-white mr-4 mb-2 md:mb-0">Projets</Link>
          <Link href="#" className=" hover:text-white mr-4 mb-2 md:mb-0">Prestations</Link>
          <Link href="#" className=" hover:text-white mr-4 mb-2 md:mb-0">Qui suis-je?</Link>
          <Link href="#" className=" hover:text-white mr-4 mb-2 md:mb-0">Contact</Link>
        </div>
        <div className="mt-4 md:mt-0 ">
          {/* Ajoutez vos liens vers les réseaux sociaux ici */}
          <Link href="#" className=" hover:text-white mr-4"><FontAwesomeIcon icon={faGithub} /></Link>
          <Link href="#" className=" hover:text-white mr-4"><FontAwesomeIcon icon={faWhatsapp} /></Link>
          <Link href="#" className=" hover:text-white mr-4"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link href="#" className=" hover:text-white"><FontAwesomeIcon icon={faLinkedin} /></Link>
        </div>
      </div>
      <div className="text-center mt-12 ">
        <p className="">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
