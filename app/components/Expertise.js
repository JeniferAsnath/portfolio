import React from 'react';
import Section from './Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faWordpress, faFigma, faAndroid, faApple, faJs, faCss3Alt, faHtml5, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const technologies = [
  {
    icon: faDatabase,
    title: 'PostgreSQL',
    description: 'Gestion et optimisation de vos bases de données relationnelles pour une performance accrue.'
  },
  {
    icon: faNodeJs,
    title: 'Express.js',
    description: 'Développement de backend performant pour gérer efficacement vos bases de données et API.'
  },
  {
    icon: faReact,
    title: 'React',
    description: 'Création d\'interfaces utilisateur dynamiques et réactives pour vos applications web.'
  },

  {
    icon: faWordpress,
    title: 'WordPress',
    description: 'Développement de sites web professionnels et de blogs personnalisés selon vos besoins.'
  },
  {
    icon: faFigma,
    title: 'Figma',
    description: 'Conception et prototypage de designs modernes et intuitifs pour vos projets web et mobiles.'
  },
  {
    icon: faApple,
    title: 'iOS',
    description: 'Développement d\'applications mobiles performantes pour les appareils Apple.'
  },
  {
    icon: faAndroid,
    title: 'Android',
    description: 'Développement d\'applications mobiles sur mesure pour les appareils Android.'
  },


];

const Expertise = () => {
  return (
    <Section title="Mon expertise">
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-center">
          {technologies.map((tech, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="text-center p-6 border-gray-200 rounded-lg transition duration-300">
                <FontAwesomeIcon icon={tech.icon} className="text-4xl p-2 mb-4 rounded-full bg-gray-200" />
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="mb-4">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Expertise;
