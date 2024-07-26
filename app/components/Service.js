import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Section from './Section';

const Service = () => {
  const services = [
    {
      icon: faLaptopCode,
      title: "Développement web",
      question: "Vous avez besoin d'un site web professionnel pour votre entreprise ?",
      details: [
        "Création de sites web sur mesure",
        "Optimisation SEO",
        "Développement de sites e-commerce",
        "Maintenance et mise à jour"
      ]
    },
    {
      icon: faMobileAlt,
      title: "Développement mobile",
      question: "Vous cherchez à atteindre vos clients sur leurs smartphones ?",
      details: [
        "Applications iOS et Android",
        "Design réactif et intuitif",
        "Intégration d'API",
        "Support et maintenance"
      ]
    },
    {
      icon: faChalkboardTeacher,
      title: "Besoin d'un formateur ?",
      question: "Vous souhaitez apprendre à coder ou à utiliser des outils numériques ?",
      details: [
        "Cours de programmation",
        "Ateliers pratiques",
        "Coaching personnalisé",
        "Support continu"
      ]
    }
  ];

  return (
    <Section >
      <div className="lg:w-full container mx-auto ">
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full  sm:w-1/2 lg:w-1/3 p-4">
              <div id='tech' className="text-center p-6 h-[40vh] shadow-lg rounded-lg transition duration-300 font-montserrat">
                <FontAwesomeIcon icon={service.icon} className="text-white text-3xl relative bottom-16    p-6 mb-4 rounded-full dark:bg-[#1E1E1E] " />
                <h3 className="text-xl font-semibold mb-2 relative bottom-16">{service.title}</h3>
                <p className="mb-4 text-base relative bottom-12 ">{service.question}</p>
                <div className="text-left ">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center mb-2 text-sm relative bottom-8">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Service