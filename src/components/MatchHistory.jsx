import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GlassCard from './GlassCard';

const matches = [
    {
        date: 'Sep 2025 - Present',
        opponent: 'Abinbev',
        result: 'Full Stack Dev',
        score: 'W',
        summary: 'Orchestrated transition to microservices, handling billions in data.',
        details: [
            'Orchestrated the transition to a microservices-based architecture for a globally live platform handling billions in financial data.',
            'Leveraged Azure App Services, multiple databases, and Databricks for scalable, high-performance data ingestion.',
            'Led full-stack training workshops for 15+ developers across Mexico and Central America.',
            'Monitored tool performance using Datadog and Azure App Insights, reducing incident tickets by 35%.'
        ]
    },
    {
        date: 'Aug 2023 - Aug 2025',
        opponent: 'Abinbev',
        result: 'Jr. Full Stack Dev',
        score: 'W',
        summary: 'Built Account Reconciliation tool saving $600K.',
        details: [
            'Developed in-house Account Reconciliation tool replacing BlackLine, saving $600K annually.',
            'Built data ingestion pipelines via Azure Data Factory (ADF) to integrate multiple ERP systems.',
            'Engineered real-time KPI dashboard using Recharts, decreasing report generation time from 2 hours to 10 minutes.',
            'Championed effort to reduce false positives from APIIRO and Snyk scans, optimizing security monitoring.'
        ]
    },
    {
        date: 'Jan 2023 - Jul 2023',
        opponent: 'Abinbev',
        result: 'Full Stack Intern',
        score: 'W',
        summary: 'Deployed NPS app & improved conversion by 4%.',
        details: [
            'Developed and deployed full-stack NPS web application using React, Flask, and SQL Server.',
            'Integrated with Azure Function Apps for automated workflows.',
            'Implemented sentiment analysis using Hugging Face NLP models to identify detractors and drive actionable insights.',
            'Improved promoter conversion rates by 4%.'
        ]
    },
    {
        date: '2019 - 2023',
        opponent: 'VIT, Vellore',
        result: 'B.Tech Graduate',
        score: 'W',
        summary: 'Bachelor of Technology in Computer Science.',
        details: [
            'Graduated with 8.71 CGPA.',
            'Vellore Institute of Technology, Vellore, Tamil Nadu, India.'
        ]
    },
];

const MatchHistory = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="py-20 px-4 max-w-4xl mx-auto">
            <GlassCard className="p-8 md:p-12">
                <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-widest">CAREER</h2>

                <div className="space-y-4">
                    {matches.map((match, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/80 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
                        >
                            <div
                                onClick={() => toggleExpand(index)}
                                className="p-4 flex flex-col md:flex-row items-center justify-between cursor-pointer hover:bg-gray-800/50 transition-colors"
                            >
                                <div className="flex items-center gap-4 w-full md:w-1/3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${match.score === 'W' ? 'bg-arsenal-red text-white' : 'bg-gray-500'}`}>
                                        {match.score}
                                    </div>
                                    <div className="text-gray-400 font-mono text-sm">{match.date}</div>
                                </div>

                                <div className="flex-1 text-center md:text-left my-2 md:my-0">
                                    <div className="text-xl font-bold text-white">{match.opponent}</div>
                                    <div className="text-arsenal-red">{match.result}</div>
                                </div>

                                <div className="w-full md:w-1/3 text-gray-400 text-sm md:text-right flex items-center justify-end gap-2">
                                    <span className="hidden md:inline">{match.summary}</span>
                                    {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-4 pb-4 bg-black/20"
                                    >
                                        <div className="pt-4 border-t border-gray-700/50">
                                            <h4 className="text-arsenal-red font-bold mb-2 text-sm uppercase tracking-wider">Match Report</h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                                                {match.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default MatchHistory;
