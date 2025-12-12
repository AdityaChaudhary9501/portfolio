
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import GlassCard from './GlassCard';

const projects = [
    {
        title: 'Large Scale DB Systems',
        category: 'John Hopkins Univ.',
        trophy: 'Silver',
        description: 'Specialization in scalable data systems and architecture. (Coursera 2025)',
        tech: ['Database', 'System Design'],
        link: '#',
        github: '#'
    },
    {
        title: 'App Security Champion',
        category: 'Abinbev',
        trophy: 'Gold',
        description: 'Yellow Belt Certification. Mastered OWASP best practices and threat modeling.',
        tech: ['Security', 'OWASP'],
        link: '#',
        github: '#'
    },
    {
        title: 'Supervised ML',
        category: 'Stanford Online',
        trophy: 'Silver',
        description: 'Comprehensive course on Regression and Classification algorithms.',
        tech: ['ML', 'Regression'],
        link: '#',
        github: '#'
    },
    {
        title: 'Web App Technologies',
        category: 'Univ. of Michigan',
        trophy: 'Gold',
        description: 'Deep dive into Django and modern web technologies.',
        tech: ['Django', 'Web'],
        link: '#',
        github: '#'
    },
    {
        title: 'FIFA World Cup Predictor',
        category: 'VIT Vellore',
        trophy: 'Gold',
        description: 'Predicted World Cup winner with 81% accuracy using Deep Learning.',
        tech: ['Python', 'Tensorflow'],
        link: '#',
        github: '#'
    }
];

const TrophyCabinet = () => {
    return (
        <div className="py-20 px-4 max-w-6xl mx-auto">
            <GlassCard className="p-8 md:p-12">
                <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-widest">TROPHY CABINET</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Trophy size={100} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase bg-arsenal-gold/20 text-arsenal-gold`}>
                                        {project.category}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm h-12">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default TrophyCabinet;
