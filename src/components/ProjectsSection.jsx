import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Sparkles, Code2, Database, Brain, Smartphone } from 'lucide-react';
import GlassCard from './GlassCard';

const projects = [
    {
        title: 'LLM SQL Optimiser',
        category: 'AI & Database Tooling',
        badge: 'Optimization',
        icon: Database,
        description: 'Automated SQL query refactoring tool powered by Large Language Models (GPT-4/CodeLlama). Parses query Abstract Syntax Trees (AST), measures execution metrics, and provides automated indexing recommendations.',
        tech: ['Python', 'LLMs (GPT-4)', 'SQL', 'AST Parsing'],
        github: 'https://github.com/AdityaChaudhary9501/LLM-SQL-OPTIMIZER',
        featured: true
    },
    {
        title: 'Restaurant Recommendation Engine',
        category: 'Data Science & Machine Learning',
        badge: 'Recommendation System',
        icon: Brain,
        description: 'Analyzed 9,552 Zomato restaurant records to identify key rating factors (budget, locality, cuisine). Built a collaborative filtering ML recommendation algorithm matching users with personalized venues.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'Data Viz'],
        github: 'https://github.com/AdityaChaudhary9501/Restaurant-Recommendation-and-Vizualisation-on-Zomato',
        featured: false
    },
    {
        title: 'Hostel Mess Manager App',
        category: 'Mobile & Cloud Infrastructure',
        badge: 'Sustainability Utility',
        icon: Smartphone,
        description: 'Full-stack Android application using Firebase real-time database. Connects student advance food preference selections with caterer inventory portals to systematically reduce daily campus food waste.',
        tech: ['Android', 'Java', 'Firebase', 'Realtime DB'],
        github: 'https://github.com/AdityaChaudhary9501/Mess-Manager',
        featured: false
    },
    {
        title: 'FIFA World Cup Predictor',
        category: 'NLP & Deep Learning',
        badge: '81% Prediction Accuracy',
        icon: Sparkles,
        description: 'Deep Learning prediction model integrating historical team performance metrics with sentiment analysis derived from 700,000+ Twitter posts to forecast match results accurately.',
        tech: ['Python', 'TensorFlow', 'NLP', 'Twitter API'],
        github: 'https://github.com/AdityaChaudhary9501/Fifa-World-Cup-Predictor-with-Twitter-Sentiment-Analysis',
        featured: true
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-12 px-4 max-w-5xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
                    <div>
                        <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                            <FolderGit2 size={14} /> Open Source & Personal Builds
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                            Featured Engineering Projects
                        </h2>
                    </div>
                    <a
                        href="https://github.com/AdityaChaudhary9501"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3.5 py-2 rounded-xl self-start md:self-auto border border-slate-700/60 transition-all"
                    >
                        <Github size={14} />
                        <span>View All Repositories</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 group"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2.5">
                                            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                                <IconComponent size={18} />
                                            </div>
                                            <div>
                                                <span className="text-[11px] font-mono text-indigo-400 font-semibold uppercase tracking-wider block">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
                                                title="View GitHub Repository"
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                    </div>

                                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-800/60">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[11px] border border-slate-800"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0">
                                            {project.badge}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </GlassCard>
        </section>
    );
};

export default ProjectsSection;
