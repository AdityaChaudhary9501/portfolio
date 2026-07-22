import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, Database, Brain, Smartphone, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';
import { SketchUnderline, SketchCardBorder } from './SketchDoodleStroke';

const projects = [
    {
        title: 'LLM SQL Optimiser',
        category: 'AI & Database Tooling',
        badge: 'Optimization',
        icon: Database,
        description: 'Automated SQL query refactoring tool powered by Large Language Models (GPT-4/CodeLlama). Parses query Abstract Syntax Trees (AST), measures execution metrics, and provides automated indexing recommendations.',
        tech: ['Python', 'LLMs (GPT-4)', 'SQL', 'AST Parsing'],
        github: 'https://github.com/AdityaChaudhary9501/LLM-SQL-OPTIMIZER',
    },
    {
        title: 'Restaurant Recommendation Engine',
        category: 'Data Science & Machine Learning',
        badge: 'Recommendation System',
        icon: Brain,
        description: 'Analyzed 9,552 Zomato restaurant records to identify key rating factors (budget, locality, cuisine). Built a collaborative filtering ML recommendation algorithm matching users with personalized venues.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'Data Viz'],
        github: 'https://github.com/AdityaChaudhary9501/Restaurant-Recommendation-and-Vizualisation-on-Zomato',
    },
    {
        title: 'Hostel Mess Manager App',
        category: 'Mobile & Cloud Infrastructure',
        badge: 'Sustainability Utility',
        icon: Smartphone,
        description: 'Full-stack Android application using Firebase real-time database. Connects student food preference selections with caterer inventory portals to systematically reduce daily campus food waste.',
        tech: ['Android', 'Java', 'Firebase', 'Realtime DB'],
        github: 'https://github.com/AdityaChaudhary9501/Mess-Manager',
    },
    {
        title: 'FIFA World Cup Predictor',
        category: 'NLP & Deep Learning',
        badge: '81% Prediction Accuracy',
        icon: Sparkles,
        description: 'Deep Learning prediction model integrating historical team performance metrics with sentiment analysis derived from 700,000+ Twitter posts to forecast match results accurately.',
        tech: ['Python', 'TensorFlow', 'NLP', 'Twitter API'],
        github: 'https://github.com/AdityaChaudhary9501/Fifa-World-Cup-Predictor-with-Twitter-Sentiment-Analysis',
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-12 px-4 max-w-5xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-amber-800/25">
                    <div>
                        <div className="flex items-center gap-2 text-amber-500/70 font-mono text-xs uppercase tracking-widest mb-1">
                            <FolderGit2 size={13} /> Personal Builds
                        </div>
                        <h2 className="font-sketch text-4xl md:text-5xl font-bold text-amber-100">Featured Projects</h2>
                        <SketchUnderline className="w-48 text-amber-400" />
                    </div>
                    <a href="https://github.com/AdityaChaudhary9501" target="_blank" rel="noopener noreferrer"
                        className="sketch-pill inline-flex items-center gap-2 text-xs font-sketch font-semibold text-amber-300/80 hover:text-amber-200 px-3.5 py-2 transition-all self-start md:self-auto">
                        <Github size={14} /> View All Repos
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        return (
                            <SketchCardBorder key={project.title}>
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -3 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="bg-[#14120E]/80 border border-amber-800/25 rounded-sm p-5 flex flex-col justify-between hover:border-amber-600/45 transition-all group h-full"
                                    style={{ boxShadow: '2px 2px 0 rgba(212,168,83,0.06)' }}
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-2.5">
                                                <div className="p-2 rounded-sm bg-amber-900/25 text-amber-400 border border-amber-700/30">
                                                    <IconComponent size={17} />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-mono text-amber-500/70 uppercase tracking-wider block">{project.category}</span>
                                                    <h3 className="font-sketch text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">{project.title}</h3>
                                                </div>
                                            </div>
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                    className="p-2 text-amber-600/50 hover:text-amber-300 bg-[#1C1916] hover:bg-amber-900/30 border border-amber-800/25 rounded-sm transition-colors">
                                                    <Github size={15} />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-[#B0A890] text-xs md:text-sm leading-relaxed mb-5">{project.description}</p>
                                    </div>

                                    <div className="pt-4 border-t border-amber-800/20 flex items-center justify-between gap-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="sketch-pill px-2 py-0.5 text-amber-200/60 font-mono text-[10px]">{t}</span>
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-sketch font-bold px-2 py-0.5 rounded-sm bg-amber-900/25 text-amber-400 border border-amber-700/30 shrink-0">{project.badge}</span>
                                    </div>
                                </motion.div>
                            </SketchCardBorder>
                        );
                    })}
                </div>
            </GlassCard>
        </section>
    );
};

export default ProjectsSection;
