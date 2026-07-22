import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Database, Cloud, ShieldCheck, Terminal, Filter } from 'lucide-react';
import GlassCard from './GlassCard';

const tabs = ['All', 'Backend & Microservices', 'Frontend & UI', 'Cloud & DevOps', 'Databases & AI'];

const skillCategories = [
    {
        id: 'Backend & Microservices',
        title: 'Backend & Microservices',
        icon: Terminal,
        description: 'Building high-throughput APIs and enterprise microservices',
        skills: [
            { name: 'Python & Flask', level: '95%', exp: '3+ YOE' },
            { name: 'RESTful Web Services', level: '92%', exp: '3+ YOE' },
            { name: 'Microservices Architecture', level: '88%', exp: 'Current Focus' },
            { name: 'Java & OOP Principles', level: '85%', exp: '4+ YOE' },
        ]
    },
    {
        id: 'Frontend & UI',
        title: 'Frontend & UI Frameworks',
        icon: Code2,
        description: 'Crafting responsive dashboards and intuitive web apps',
        skills: [
            { name: 'React.js & Hooks', level: '90%', exp: '3+ YOE' },
            { name: 'JavaScript & Modern ES6+', level: '92%', exp: '3+ YOE' },
            { name: 'Tailwind CSS & UI Styling', level: '88%', exp: '3+ YOE' },
            { name: 'Recharts & Data Viz', level: '85%', exp: '3+ YOE' },
        ]
    },
    {
        id: 'Cloud & DevOps',
        title: 'Cloud & Infrastructure',
        icon: Cloud,
        description: 'Automating pipelines and cloud resources on Azure',
        skills: [
            { name: 'Azure App Services & Functions', level: '88%', exp: '3+ YOE' },
            { name: 'Azure Data Factory (ADF)', level: '86%', exp: '3+ YOE' },
            { name: 'Databricks Data Ingestion', level: '85%', exp: 'Recent' },
            { name: 'Datadog & Azure App Insights', level: '88%', exp: '3+ YOE' },
        ]
    },
    {
        id: 'Databases & AI',
        title: 'Databases & AI / Security',
        icon: Database,
        description: 'Managing structured databases, AI models, and app security',
        skills: [
            { name: 'SQL Server & SSMS', level: '90%', exp: '3+ YOE' },
            { name: 'App Security (Snyk / Apiiro)', level: '85%', exp: 'Yellow Belt' },
            { name: 'LLMs & Hugging Face NLP', level: '82%', exp: '1+ YOE' },
            { name: 'TensorFlow & ML Models', level: '80%', exp: 'Projects' },
        ]
    }
];

const SkillsMatrix = () => {
    const [selectedTab, setSelectedTab] = useState('All');

    const filteredCategories = selectedTab === 'All'
        ? skillCategories
        : skillCategories.filter(cat => cat.id === selectedTab);

    return (
        <section id="skills" className="py-12 px-4 max-w-6xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
                    <div>
                        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                            <Cpu size={14} /> Technical Stack
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                            Skills & Expertise Matrix
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${selectedTab === tab
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredCategories.map((category, idx) => {
                            const CategoryIcon = category.icon;
                            return (
                                <motion.div
                                    key={category.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-5 hover:border-indigo-500/40 transition-all shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                            <CategoryIcon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white tracking-tight">
                                                {category.title}
                                            </h3>
                                            <p className="text-slate-400 text-xs">{category.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3.5 mt-4 pt-3 border-t border-slate-800/60">
                                        {category.skills.map((skill) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                                                    <span className="text-slate-200 font-mono">{skill.name}</span>
                                                    <span className="text-slate-400 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                                                        {skill.exp}
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: skill.level }}
                                                        transition={{ duration: 1, delay: 0.2 }}
                                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </GlassCard>
        </section>
    );
};

export default SkillsMatrix;
