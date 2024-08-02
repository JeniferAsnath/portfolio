'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import WhatIDo from '../components/WhatIDo';
import Skills from '../components/Skills';
import Knowledge from '../components/Knowledge';
import Section from '../components/Section';

// Données des certificats
const certificateData = [
  {
    title: 'Développement web et mobile',
    imgSrc: '/cerificat.png',
    imgAlt: 'Portfolio Image',
    linkHref: '/jenifer Lungwangu.pdf',
    linkText: 'Voir le certificat'
  },
  {
    title: 'Développement web et mobile',
    imgSrc: '/cerificat.png',
    imgAlt: 'Portfolio Image',
    linkHref: '/jenifer Lungwangu.pdf',
    linkText: 'Voir le certificat'
  }
];

const CertificateSection = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-wrap justify-center">
      {certificateData.map((item, index) => (
        <div key={index} className="lg:w-[40%] p-9 font-montserrat">
          <p className="font-bold text-lg py-4">{item.title}</p>
          <div className="items-center justify-center">
            <Image
              height={450}
              width={450}
              src={item.imgSrc}
              alt={item.imgAlt}
              className="items-center justify-center"
            />
            <div
              style={{ backgroundColor: theme['--bg-gray'] }}
              className="lg:p-6 lg:mx-auto p-4 text-center justify-center items-center space-x-2"
            >
              <Link
                href={item.linkHref}
                download
                className="font-bold text-lg text-center"
                style={{ color: theme['--text-secondary'] }}
              >
                {item.linkText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  const { theme } = useTheme();

  return (
    <main className="flex w-full justify-end items-center m-auto">
      <div className="relative lg:top-0 lg:w-[85%]">
        <div className="relative lg:h- lg:my-auto">
          <div className="p-8">
            <h2
              style={{ color: theme['--warning-color'] }}
              className="lg:text-5xl md:text-3xl text-2xl lg:text-left text-center lg:ml-20 font-carter-one mb-16"
            >
              _ À propos de moi
            </h2>
            <div
              style={{ backgroundColor: theme['--bg-gray'] }}
              className="rounded-2xl  lg:h-[65vh]  flex flex-col lg:flex-row-reverse justify-center items-center lg:space-x-8"
            >
              <div className="relative flex flex-col lg:bottom-28 items-center p-3">
                <Image
                  height={450}
                  width={450}
                  src="/_SMN2479-2.jpg"
                  alt="Portfolio Image"
                  className="mx-auto lg:m-0 rounded-full shadow-xl"
                />
                <div className="flex gap-6 p-6 justify-center items-center mx-auto">
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} color={theme['--text-secondary']} className="lg:text-4xl text-pink-500" />
                  </Link>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} color={theme['--text-secondary']} className="lg:text-4xl" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="lg:text-4xl text-blue-500" />
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} color={theme['--text-secondary']} className="lg:text-4xl" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-[55%] space-y-7 font-montserrat lg:py-14 p-6">
                <p
                  style={{ color: theme['--text-secondary'] }}
                  className="lg:text-xl text-left lg:leading-9"
                >
                  Passionnée par le développement web et mobile, je suis dédiée à répondre aux besoins de mes clients en leur offrant des solutions sur mesure pour une présence en ligne optimale.
                </p>
                <p
                  style={{ color: theme['--text-secondary'] }}
                  className="lg:text-xl text-left lg:leading-9"
                >
                  Mon objectif est de créer des solutions efficaces, innovantes et personnalisées, qui non seulement résolvent leurs problèmes, mais dépassent leurs attentes. Que ce soit pour la conception de sites web attrayants ou le développement d&apos;applications mobiles performantes, je mets tout en œuvre pour transformer vos idées en réalité.
                </p>
                <p
                  style={{ color: theme['--text-secondary'] }}
                  className="lg:text-xl text-left lg:leading-9"
                >
                  Ensemble, faisons de vos aspirations digitales une réalité dès aujourd&apos;hui !
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: theme['--bg-brown'] }}
            className="lg:p-6 md:p-5 lg:mx-auto p-3 mx-12 lg:w-96 text-center justify-center items-center space-x-2 rounded-full"
          >
            <FontAwesomeIcon icon={faDownload} color={theme['--text-primary']} className="text-2xl justify-center items-center" />
            <Link
              href="/CV de lungwangu bikumba.pdf"
              download
              className="font-bold text-lg"
              style={{ color: theme['--text-primary'] }}
            >
              Télécharger CV
            </Link>
          </div>
        </div>
        <Section className="relative items-center justify-center my-auto">
          <p
            style={{ color: theme['--warning-color'] }}
            className="lg:text-5xl md:text-3xl text-2xl text-center mx-8 font-carter-one lg:mb-28"
          >
            _ Ce que je peux faire pour vous
          </p>
          <p className="text-center font-montserrat lg:text-2xl mb-12 lg:px-28 px-6">
            Découvrez comment je peux contribuer à votre succès numérique avec mes compétences en développement web et mobile.
          </p>
          <div className="my-32 relative">
            <WhatIDo />
          </div>
        </Section>
        <Section className="items-center justify-center my-auto">
          <p
            style={{ color: theme['--warning-color'] }}
            className="lg:text-5xl md:text-3xl text-3xl text-center font-carter-one lg:mb-28"
          >
            _ Ce que j&apos;aime faire
          </p>
          {/* <p className="text-center font-montserrat lg:text-2xl text-lg mb-12 lg:px-16 px-6">
            Voici un aperçu des activités et technologies que je préfère dans mon travail quotidien.
          </p> */}
          <div className="lg:my-16 p-6">
            <Skills />
          </div>
        </Section>
        <Section>
          <p
            style={{ color: theme['--warning-color'] }}
            className="text-center  lg:text-5xl md:text-3xl text-3xl  font-carter-one lg:mb-8"
          >
            _ Ce que je sais faire
          </p>
          <div className="lg:my-16 p-6">
            <Knowledge />
          </div>
        </Section>
        <Section>
          <p
            style={{ color: theme['--warning-color'] }}
            className="lg:text-5xl md:text-3xl text-3xl text-center font-carter-one lg:mb-32"
          >
            _ Certificats
          </p>
          {/* <p className="text-center text-lg mb-12 lg:px-16 px-6">
            Voici quelques-uns de mes certificats attestant de mes compétences et de mon expertise.
          </p> */}
          <CertificateSection />
        </Section>
        <div className="mt-16">
          <div>
            <p className="text-center font-montserrat p-2">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
