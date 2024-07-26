import React from 'react';
import Section from './Section';
import AppleAndroidIcon from '../icon/AppleAndroidIcon';
import NextIcon from '../icon/NextIcon';
import ExpressIcon from '../icon/ExpressIcon';
import PostgreSQL from '../icon/PostgresSQL';
import WordPressIcon from '../icon/WordPressIcon';
import FigmaIcon from '../icon/FigmaIcon';
import ReactIcon from '../icon/ReactIcon';
import NodeIcon from '../icon/NodeIcon';
import Image from 'next/image';


const technologies = [
  {
    icon: "/postgresql.svg",
    title: 'PostgreSQL',
    description: 'Gestion et optimisation de vos bases de données relationnelles pour une performance accrue.'
  },
  {
    icon: "/icons8-express-js.svg",
    title: 'Express.js',
    description: 'Développement de backend performant pour gérer efficacement vos bases de données et API.'
  },
  {
    icon: "/react-2.svg",
    title: 'React',
    description: 'Création d\'interfaces utilisateur dynamiques et réactives pour vos applications web.'
  },
  {
    icon: "/next-js.svg",
    title: 'Next.js',
    description: 'Développement de sites web performants et optimisés avec le framework Next.js.'
  },
  {
    icon: "/apple-android.svg",
    title: 'iOS & Android',
    description: 'Développement d\'applications mobiles performantes pour les appareils Apple et Android.'
  },
  {
    icon: "/icons8-figma.svg",
    title: 'Figma',
    description: 'Conception et prototypage de designs modernes et intuitifs pour vos projets web et mobiles.'
  },
  {
    icon: "/wordpress-icon.svg",
    title: 'WordPress',
    description: 'Développement de sites web professionnels et de blogs personnalisés selon vos besoins.'
  },
  {
    icon: "/nodejs-icon.svg",
    title: 'Node.js',
    description: 'Développement de backend performant pour gérer efficacement vos bases de données et API.'
  },

];

const Expertise = () => {
  return (
    <Section >
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-center">
          {technologies.map((tech, index) => (
            <div  key={index} className="w-full space-y-3  sm:w-1/2 lg:w-1/3 p-2">
              <div id='desc'  className="flex lg:h-[18vh] h-[23vh] text-center p-6 border-gray-200 gap-4 rounded-lg transition duration-300 font-montserrat">
                <div >
                  <Image src={tech.icon} width={80} height={80} alt={`${tech.title} Logo`} />
                </div>
                <div >
                  <h3 className="text-xl text-left font-semibold mb-2">{tech.title}</h3>
                  <p className="mb-4 text-left text-base">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Expertise;
