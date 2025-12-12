
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const skills = [
    { name: 'Python, Flask, Rest APIs', stat: 'BE', value: 92, display: '2+', color: 'bg-arsenal-gold' },
    { name: 'React, JavaScript, Tailwind', stat: 'FE', value: 90, display: '2+', color: 'bg-arsenal-red' },
    { name: 'SQL, Databricks, SSMS', stat: 'DB', value: 88, display: '2+', color: 'bg-white' },
    { name: 'Azure (Functions, ADF)', stat: 'CLD', value: 87, display: '2+', color: 'bg-white' },
    { name: 'Tensorflow, Hugging Face', stat: 'AI', value: 84, display: '2+', color: 'bg-arsenal-red' },
    { name: 'Snyk, Apiiro', stat: 'SEC', value: 85, display: '2+', color: 'bg-arsenal-gold' },
];

const StatsSection = () => {
    return (
        <div className="py-20 px-4 max-w-4xl mx-auto">
            <GlassCard className="p-8 md:p-12">
                <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-widest">PLAYER STATS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/50 p-4 rounded-lg border border-gray-700"
                        >
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <span className="text-2xl font-bold text-gray-300 mr-2">{skill.stat}</span>
                                    <span className="text-sm text-gray-400 uppercase tracking-wide">({skill.name})</span>
                                </div>
                                <span className="text-3xl font-bold text-arsenal-red">{skill.display}</span>
                            </div>

                            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.value}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className={`h-full ${skill.color}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default StatsSection;
