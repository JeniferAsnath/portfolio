import React from 'react';
import { useTheme } from '../context/ThemeContext';

const knowledgeItems = [
    {
        title: 'Développement Web',
        description: 'Création de sites web dynamiques et interactifs en utilisant HTML, CSS, JavaScript, et frameworks modernes comme React et Next.js.',
        bgColor: '#FFEBEE',
    },
    {
        title: 'Développement Mobile',
        description: 'Conception et développement d\'applications mobiles pour iOS et Android.',
        bgColor: '#E8F5E9', 
    },
    {
        title: 'Bases de Données',
        description: 'Conception et gestion de bases de données relationnelles et non relationnelles, telles que PostgreSQL et MongoDB.',
        bgColor: '#E3F2FD', 
    },
    {
        title: 'UX/UI Design',
        description: 'Compréhension des principes de design centrés sur l\'utilisateur pour créer des interfaces intuitives et esthétiques, avec des outils comme Figma.',
        bgColor: '#FFF3E0',
    },
    {
        title: 'SEO',
        description: 'Optimisation des sites web pour les moteurs de recherche afin d\'améliorer la visibilité et le classement.',
        bgColor: '#F3E5F5', 
    },
    {
        title: 'Gestion de Contenu',
        description: 'Utilisation de CMS comme WordPress pour la création et la gestion de contenus web.',
        bgColor: '#E0F2F1', 
    },
    {
        title: 'Analyse de Données',
        description: 'Utilisation d\'outils d\'analyse pour interpréter les données web et mobiles afin d\'informer les décisions stratégiques.',
        bgColor: '#FFFDE7', 
    },
    {
        title: 'Sécurité Informatique',
        description: 'Compréhension des principes de sécurité pour protéger les données et les systèmes contre les menaces en ligne.',
        bgColor: '#EDE7F6', 
    },
    {
        title: 'Méthodologies Agiles',
        description: 'Application des méthodologies de gestion de projet comme Scrum pour assurer une livraison efficace et itérative des projets.',
        bgColor: '#E0F7FA', 
    },
];

const Knowledge = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <section className="container mx-auto">
            <p className='lg:w-[80%] mx-auto lg:text-xl py-10 text-center font-montserrat'>
                Mon parcours diversifié m&apos;a permis d&apos;acquérir une vaste gamme de compétences en développement web. Aujourd&apos;hui, je me concentre sur le développement web full-stack, et voici un aperçu des technologies que j&apos;utilise régulièrement.
            </p>

            <div className="grid grid-cols-1 sm:flex-wrap sm:flex sm:justify-center lg:flex lg:flex-wrap lg:justify-center gap-6">
                {knowledgeItems.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg shadow-md"
                        style={{ backgroundColor: item.bgColor }}
                    >
                        <h3
                            style={{ color: theme['--text-secondary'] }}
                            className="text-xl text-center"
                        >
                            {item.title}
                        </h3>
                        {/* <p className="text-center">{item.description}</p> */}
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Knowledge;
