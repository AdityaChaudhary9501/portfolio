import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Github } from 'lucide-react';
import GlassCard from './GlassCard';

const trainings = [
    {
        title: 'LLM SQL Optimiser',
        type: 'AI / Database Tool',
        stats: 'Optimization',
        description: 'Rewrite SQL queries for better performance using LLMs (GPT-4/CodeLlama). Parses queries to understand structure, evaluates optimized queries by comparing execution time, and generates explanations for indexing.',
        tech: ['Python', 'LLMs', 'SQL', 'AST'],
        github: 'https://github.com/AdityaChaudhary9501/LLM-SQL-OPTIMIZER'
    },
    {
        title: 'Restaurant Recommendation',
        type: 'Data Science / ML',
        stats: 'Recommendation',
        description: 'Analyzed 9552 Zomato records to study factors affecting ratings (location, budget, cuisine). Developed a Machine Learning recommendation algorithm to find similar restaurants based on user preferences.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'Visualization'],
        github: 'https://github.com/AdityaChaudhary9501/Restaurant-Recommendation-and-Vizualisation-on-Zomato'
    },
    {
        title: 'Hostel Mess Manager',
        type: 'Android App',
        stats: 'Utility',
        description: 'Android app using Firebase for authentication and data storage. Features a web portal for caterers to manage inventory and a student interface to indicate food preferences in advance, reducing food wastage.',
        tech: ['Android', 'Java', 'Firebase'],
        github: 'https://github.com/AdityaChaudhary9501/Mess-Manager'
    },
    {
        title: 'FIFA World Cup Predictor',
        type: 'NLP, Sentiment Analysis',
        stats: '81% Accuracy',
        description: 'Devised a machine learning model predicting World Cup winner using Deep Learning and Sentiment Analysis. Incorporated historical match results and sentiment analysis of 700k+ tweets.',
        tech: ['Python', 'Tensorflow', 'NLP'],
        github: 'https://github.com/AdityaChaudhary9501/Fifa-World-Cup-Predictor-with-Twitter-Sentiment-Analysis'
    }
];

const TrainingSection = () => {
    return (
        <div className="py-20 px-4 max-w-4xl mx-auto">
            <GlassCard className="p-8 md:p-12">
                <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-widest flex items-center justify-center gap-4">
                    <Dumbbell className="w-8 h-8" />
                    TRAINING GROUND
                    <Dumbbell className="w-8 h-8" />
                </h2>

                <div className="grid grid-cols-1 gap-8">
                    {trainings.map((training, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/80 border border-gray-700 rounded-lg p-6 hover:border-arsenal-red transition-colors group"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-arsenal-red transition-colors">{training.title}</h3>
                                    <span className="text-arsenal-red text-sm font-mono">{training.type}</span>
                                </div>
                                <div className="mt-2 md:mt-0 flex items-center gap-3">
                                    <div className="bg-arsenal-red/20 text-arsenal-red px-4 py-2 rounded-full font-bold border border-arsenal-red/50">
                                        {training.stats}
                                    </div>
                                    {training.github && (
                                        <a
                                            href={training.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-800 rounded-full text-gray-400 hover:bg-arsenal-red hover:text-white transition-colors"
                                            title="View Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {training.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {training.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default TrainingSection;
