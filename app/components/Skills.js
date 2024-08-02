import React from 'react';
// import Section from './Section';
import Progress from './ProgressBar';

const technologies = [
  {
    icon: "/postgresql.svg",
    title: 'PostgreSQL',
    progress: 90, // Exemple de pourcentage
  },
  {
    icon: "/icons8-express-js.svg",
    title: 'Express.js',
    progress: 85, // Exemple de pourcentage
  },
  {
    icon: "/react-2.svg",
    title: 'React',
    progress: 95, // Exemple de pourcentage
  },
  {
    icon: "/next-js.svg",
    title: 'Next.js',
    progress: 80, // Exemple de pourcentage
  },
  {
    icon: "/apple-android.svg",
    title: 'iOS & Android',
    progress: 75, // Exemple de pourcentage
  },
  {
    icon: "/icons8-figma.svg",
    title: 'Figma',
    progress: 70, // Exemple de pourcentage
  },
  {
    icon: "/wordpress-icon.svg",
    title: 'WordPress',
    progress: 65, // Exemple de pourcentage
  },
  {
    icon: "/nodejs-icon.svg",
    title: 'Node.js',
    progress: 80, // Exemple de pourcentage
  },
];

const Skills = () => {
  return (
    <section>
      <div className="container mx-auto py-12">
        <div className="flex flex-wrap justify-center items-center lg:gap-8 gap-3">
          {technologies.map((tech, index) => (
            <Progress key={index} value={tech.progress} title={tech.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
