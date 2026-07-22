import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Github, Database, Brain, Smartphone, Sparkles, ExternalLink, X, ArrowUpRight } from 'lucide-react';
import GlassCard from './GlassCard';
import { SketchUnderline } from './SketchDoodleStroke';

const projects = [
    {
        id: 'llm-sql',
        title: 'LLM SQL Optimiser',
        category: 'AI & Database Tooling',
        badge: 'Query Optimization',
        icon: Database,
        description: 'Automated SQL query refactoring tool powered by Large Language Models (GPT-4/CodeLlama). Parses query Abstract Syntax Trees (AST), measures execution metrics, and provides automated indexing recommendations.',
        details: 'Parses raw SQL queries into AST nodes, evaluates cost metrics against query plans, and invokes OpenAI/Llama endpoints to return optimized SQL with index creation statements.',
        tech: ['Python', 'LLMs (GPT-4)', 'SQL', 'AST Parsing'],
        github: 'https://github.com/AdityaChaudhary9501/LLM-SQL-OPTIMIZER',
    },
    {
        id: 'zomato-rec',
        title: 'Restaurant Recommendation Engine',
        category: 'Data Science & Machine Learning',
        badge: 'Recommendation ML',
        icon: Brain,
        description: 'Analyzed 9,552 Zomato restaurant records to identify key rating factors (budget, locality, cuisine). Built a collaborative filtering ML recommendation algorithm matching users with personalized venues.',
        details: 'Exploratory analysis over 9,500+ records in Bangalore. Integrated TF-IDF text vectorization and cosine similarity matrix matching for venue discovery.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'Data Viz'],
        github: 'https://github.com/AdityaChaudhary9501/Restaurant-Recommendation-and-Vizualisation-on-Zomato',
    },
    {
        id: 'mess-manager',
        title: 'Hostel Mess Manager App',
        category: 'Mobile & Cloud Infrastructure',
        badge: 'Sustainability Utility',
        icon: Smartphone,
        description: 'Full-stack Android application using Firebase real-time database. Connects student food preference selections with caterer inventory portals to systematically reduce daily campus food waste.',
        details: 'Used across student mess halls. Leveraged Firebase Realtime DB listeners to send real-time meal counts to caterer inventory dashboards.',
        tech: ['Android', 'Java', 'Firebase', 'Realtime DB'],
        github: 'https://github.com/AdityaChaudhary9501/Mess-Manager',
    },
    {
        id: 'world-cup',
        title: 'FIFA World Cup Predictor',
        category: 'NLP & Deep Learning',
        badge: '81% Accuracy',
        icon: Sparkles,
        description: 'Deep Learning prediction model integrating historical team performance metrics with sentiment analysis derived from 700,000+ Twitter posts to forecast match results accurately.',
        details: 'Combined LSTM sequence models on historical match stats with sentiment polling of over 700k live tweets during the 2022 World Cup.',
        tech: ['Python', 'TensorFlow', 'NLP', 'Twitter API'],
        github: 'https://github.com/AdityaChaudhary9501/Fifa-World-Cup-Predictor-with-Twitter-Sentiment-Analysis',
    }
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="w-full">
            <GlassCard>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-sky-100">
                    <div>
                        <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs uppercase tracking-wider mb-1">
                            <FolderGit2 size={14} /> Personal Builds
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Featured Projects & Repos</h2>
                        <SketchUnderline className="w-56 text-sky-400" />
                    </div>
                    <a 
                        href="https://github.com/AdityaChaudhary9501" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 text-sky-700 font-semibold text-xs rounded-full hover:bg-sky-100 transition-all self-start md:self-auto shadow-sm"
                    >
                        <Github size={15} /> View GitHub Repositories
                    </a>
                </div>

                {/* 2-Column macOS Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => {
                        const IconComponent = project.icon;
                        return (
                            <motion.div
                                key={project.title}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white/90 border border-sky-100 rounded-3xl p-6 flex flex-col justify-between shadow-lg shadow-sky-500/5 hover:shadow-xl hover:border-sky-300 transition-all group relative overflow-hidden"
                            >
                                {/* macOS Window Traffic Dots Header */}
                                <div>
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                                            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                                            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                                            <span className="text-[10px] font-mono text-slate-400 ml-2">{project.category}</span>
                                        </div>

                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors"
                                                title="View GitHub Repository"
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                    </div>

                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="p-3 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200/60 shadow-sm shrink-0">
                                            <IconComponent size={20} />
                                        </div>
                                        <div>
                                            <span className="px-2.5 py-0.5 bg-sky-100 text-sky-700 text-[10px] font-bold rounded-full inline-block mb-1">
                                                {project.badge}
                                            </span>
                                            <h3 className="font-bold text-slate-900 text-xl group-hover:text-sky-600 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-5 font-normal">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-md">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold rounded-full shadow-md shadow-sky-500/20 flex items-center gap-1 transition-all shrink-0"
                                        >
                                            <span>Inspect</span>
                                            <ArrowUpRight size={13} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </GlassCard>

            {/* Apple Light Blue Inspect Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white border border-sky-100 rounded-3xl p-6 md:p-8 max-w-xl w-full shadow-2xl shadow-sky-500/20 relative"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
                            >
                                <X size={18} />
                            </button>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-sky-100 text-sky-700 font-semibold text-xs rounded-full">
                                    {selectedProject.badge}
                                </span>
                                <span className="text-xs text-slate-400 font-mono">{selectedProject.category}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{selectedProject.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">{selectedProject.description}</p>
                            
                            <div className="p-4 bg-sky-50/80 rounded-2xl border border-sky-100 mb-6">
                                <h4 className="text-xs font-bold uppercase text-sky-800 tracking-wider mb-1">Architecture Note</h4>
                                <p className="text-xs text-slate-700 leading-relaxed">{selectedProject.details}</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-1.5">
                                    {selectedProject.tech.map((t, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-sky-500 text-white font-semibold text-xs rounded-full flex items-center gap-1.5 shadow-md shadow-sky-500/25 hover:bg-sky-600 transition-all"
                                >
                                    <Github size={14} />
                                    <span>Repository</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;
