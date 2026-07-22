import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Database, Cloud, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
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
        <section id="skills" className="w-full">
            <GlassCard>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-sky-100">
                    <div>
                        <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs uppercase tracking-wider mb-1">
                            <Cpu size={14} /> Technical Stack
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Skills & Control Center</h2>
                        <SketchUnderline className="w-52 text-sky-400" />
                    </div>

                    {/* Apple Style Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-full border border-sky-100 self-start md:self-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                                    selectedTab === tab
                                        ? 'bg-white text-sky-700 shadow-md shadow-sky-500/10 border border-sky-100'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2-Column Widget Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((category) => {
                            const CategoryIcon = category.icon;
                            return (
                                <motion.div
                                    key={category.title}
                                    layout
                                    transition={{ duration: 0.2 }}
                                    className="bg-white/90 border border-sky-100 rounded-3xl p-6 shadow-lg shadow-sky-500/5 hover:shadow-xl hover:border-sky-300 transition-all group"
                                >
                                    <div className="flex items-center gap-3.5 mb-4">
                                        <div className="p-3 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200/60 shadow-sm group-hover:scale-110 transition-transform">
                                            <CategoryIcon size={22} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg leading-tight">{category.title}</h3>
                                            <p className="text-xs text-slate-500 font-medium">{category.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-2">
                                        {category.skills.map((skill) => (
                                            <div key={skill.name} className="space-y-1.5">
                                                <div className="flex justify-between items-center text-xs">
                                                    <span className="font-semibold text-slate-800">{skill.name}</span>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] text-slate-400 font-mono">{skill.exp}</span>
                                                        <span className="px-2 py-0.5 bg-sky-100 text-sky-700 font-bold rounded-md text-[11px]">
                                                            {skill.level}
                                                        </span>
                                                    </div>
                                                </div>
                                                <PencilProgressBar level={skill.level} />
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
