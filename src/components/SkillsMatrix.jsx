import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Database, Cloud, Terminal } from 'lucide-react';
import GlassCard from './GlassCard';
import { SketchUnderline, PencilProgressBar } from './SketchDoodleStroke';

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
    const filtered = selectedTab === 'All' ? skillCategories : skillCategories.filter(c => c.id === selectedTab);

    return (
        <section id="skills" className="py-12 px-4 max-w-5xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 pb-6 border-b border-amber-800/25">
                    <div>
                        <div className="flex items-center gap-2 text-amber-500/70 font-mono text-xs uppercase tracking-widest mb-1">
                            <Cpu size={13} /> Technical Stack
                        </div>
                        <h2 className="font-sketch text-4xl md:text-5xl font-bold text-amber-100">Skills & Expertise</h2>
                        <SketchUnderline className="w-44 text-amber-400" />
                    </div>

                    {/* Filter tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 bg-[#14120E]/60 p-1.5 rounded-sm border border-amber-800/25 self-start">
                        {tabs.map((tab) => (
                            <button key={tab} onClick={() => setSelectedTab(tab)}
                                className={`px-3 py-1.5 rounded-sm text-xs font-sketch font-semibold whitespace-nowrap transition-all ${
                                    selectedTab === tab
                                        ? 'bg-amber-400 text-amber-950 shadow-sm'
                                        : 'text-amber-400/60 hover:text-amber-300 hover:bg-amber-900/20'
                                }`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((category, idx) => {
                            const CategoryIcon = category.icon;
                            return (
                                <motion.div key={category.title} layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="bg-[#14120E]/70 border border-amber-800/25 rounded-sm p-5 hover:border-amber-600/40 transition-all"
                                    style={{ boxShadow: '2px 2px 0 rgba(212,168,83,0.06)' }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 rounded-sm bg-amber-900/25 text-amber-400 border border-amber-700/30">
                                            <CategoryIcon size={19} />
                                        </div>
                                        <div>
                                            <h3 className="font-sketch text-xl font-bold text-amber-100">{category.title}</h3>
                                            <p className="text-[#9A9080] text-xs">{category.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3.5 mt-4 pt-3 border-t border-amber-800/20">
                                        {category.skills.map((skill, sIdx) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between items-center text-xs mb-1.5">
                                                    <span className="text-[#D0C8B0] font-mono">{skill.name}</span>
                                                    <span className="text-amber-600/70 font-mono text-[10px] bg-[#1C1916] px-2 py-0.5 rounded-sm border border-amber-800/20">{skill.exp}</span>
                                                </div>
                                                {/* Pencil Hatch Shading Progress Bar */}
                                                <PencilProgressBar level={skill.level} delay={sIdx * 0.15} />
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
