'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ContactModal from '../components/ContactModal';

const Page = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const phoneNumber = '+243821308009';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire ici
    console.log('Form submitted:', form);
  };

  return (
    <main className="flex w-full justify-end items-center m-auto">
      <div className="relative lg:top-0 lg:w-[75%]">
        <div className="relative lg:h-screen lg:my-auto">
           <h2
              style={{ color: theme['--warning-color'] }}
              className="lg:text-5xl md:text-3xl text-3xl text-center font-carter-one lg:mb-24 lg:w-[80%]">
              _ Restons en contact
            </h2>
          <div className="flex lg:flex flex-col">
            {/* Div de 35% */}
            <div className="lg:w-[82%] p-8 font-montserrat space-y-6">
             
              <p className="font-montserrat font-bold text-2xl">Ne soyez pas timide!</p>
              <p>
                Je suis toujours ravi(e) de discuter de nouveaux projets, de collaborations ou de répondre à vos questions. N&apos;hésitez pas à me contacter par email, par appel ou via le formulaire de contact ci-dessous.
              </p>
              <div className="flex flex-col gap-4 py-6 mx-auto">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                  color={theme['--bg-brown']}
                  icon={faEnvelope} className="text-2xl" />
                  <span>Mail</span>
                </div>
                <Link href="mailto:ajlungwangu@gmail.com" className="text-blue-500 hover:underline pl-10">jeniferasnath@gmail.com</Link>
                <div className="flex items-center gap-2 " >
                  <FontAwesomeIcon 
                  color={theme['--bg-brown']}
                  icon={faPhone} className="text-2xl" />
                  <span>Téléphone</span>
                </div>
                <span onClick={() => setIsModalOpen(true)} className="text-blue-500 hover:underline pl-10 cursor-pointer">{phoneNumber}</span>
                <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} phoneNumber={phoneNumber} />
              </div>
              <div className="flex gap-6 mx-auto float-right">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} color={theme['--text-secondary']} className="lg:text-3xl text-slate-400" />
                </Link>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} color={theme['--text-secondary']} className="lg:text-3xl text-slate-400" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="lg:text-3xl text-slate-400" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} color={theme['--text-secondary']} className="lg:text-3xl text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Div de 60% */}
            <div className="lg:mt-4 mx-5 p-4 border border-zinc-800 rounded-2xl font-montserrat space-y-6 lg:w-[80%] ">
              <h2 className="text-2xl font-bold p-4">Envoyez-moi un message</h2>
              <form onSubmit={handleSubmit} className="space-y-8 p-4  ">
                <div className="flex lg:flex-row flex-col gap-6 ">
                  {/* <label htmlFor="name" className="block text-sm font-medium">Nom</label> */}
                  <input
                    style={{ backgroundColor: theme['--bg-gray'] }}
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="mt-1 p-4  block w-full border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    required
                  />
               
                  {/* <label htmlFor="email" className="block text-sm font-medium">Email</label> */}
                  <input
                    style={{ backgroundColor: theme['--bg-gray'] }}
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Votre email"
                    className="mt-1 block w-full border-gray-300 rounded-full p-4 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    required
                  />
                
                  {/* <label htmlFor="email" className="block text-sm font-medium">Email</label> */}
                  <input
                    style={{ backgroundColor: theme['--bg-gray'] }}
                    type="text"
                    id="object"
                    name="objet"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Votre objet"
                    className="mt-1 block w-full border-gray-300 rounded-full p-4 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  {/* <label htmlFor="message" className="block text-sm font-medium">Message</label> */}
                  <textarea
                    style={{ backgroundColor: theme['--bg-gray'] }}
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Votre message"
                    className="mt-1 block w-full p-3 border-gray-300 rounded-2xl shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    rows="5"
                    required
                  />
                </div>
                <button
                  style={{ backgroundColor: theme['--bg-brown'] }}
                  type="submit"
                  className="lg:float-left float-right text-white  py-2 rounded-full px-8 hover:bg-blue-600"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="relative lg:top-80 top-40  lg:float-left text-center " >
          <div>
            <p className=" font-montserrat p-2">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
