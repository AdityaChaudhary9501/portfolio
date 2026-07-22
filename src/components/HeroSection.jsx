import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import GlassCard from './GlassCard';

const keyMetrics = [
    { label: 'Experience', value: '3+ YOE', subtext: 'Full Stack @ AB InBev' },
    { label: 'Cost Savings', value: '$600K+', subtext: 'Annual tool savings' },
    { label: 'Reliability', value: '-35%', subtext: 'Incident reduction' },
    { label: 'Academic CGPA', value: '8.71', subtext: 'VIT Vellore B.Tech' },
];

const mainTechPills = [
    'Python & Flask', 'React & Tailwind', 'Azure & Databricks',
    'SQL Server', 'Microservices', 'LLMs & Hugging Face', 'Snyk & Security'
];

const HeroSection = () => {
    return (
        <section id="about" className="pt-28 pb-12 px-4 max-w-5xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <GlassCard className="p-6 md:p-10 relative overflow-hidden">
                    {/* Background glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center md:flex-row md:items-start gap-8">

                        {/* Avatar Column */}
                        <div className="flex flex-col items-center shrink-0">
                            <div className="relative">
                                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-emerald-400 shadow-2xl glow-blue">
                                    <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden">
                                        <img
                                            src="/aditya.jpeg"
                                            alt="Aditya Chaudhary"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Online Badge */}
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 px-2.5 py-0.5 rounded-full shadow-lg whitespace-nowrap">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                    <span className="text-[10px] font-mono font-medium text-slate-200">Open for Roles</span>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                                <MapPin size={13} className="text-cyan-400" />
                                <span>Bangalore, India 🇮🇳</span>
                            </div>
                        </div>

                        {/* Bio Info Column */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
                                <Terminal size={13} />
                                <span>Full Stack & Cloud Engineer</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                                Aditya Chaudhary
                            </h1>

                            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-normal max-w-2xl">
                                Software Engineer specializing in high-throughput microservices, enterprise financial platforms, and data pipelines. Proven track record saving <span className="text-indigo-400 font-semibold">$600K+ annually</span> and handling billions in financial data.
                            </p>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mb-8">
                                {mainTechPills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-[11px] font-medium hover:border-indigo-500/40 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                <a
                                    href="#experience"
                                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all hover:scale-105"
                                >
                                    <span>Explore Experience</span>
                                    <ArrowUpRight size={16} />
                                </a>
                                <a
                                    href="https://github.com/AdityaChaudhary9501"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105"
                                >
                                    <Github size={16} />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/aditya-chaudhary-71306b190"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105"
                                >
                                    <Linkedin size={16} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Impact Metrics Grid */}
                    <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {keyMetrics.map((metric, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-950/60 border border-slate-800/70 rounded-xl p-4 text-center transition-all hover:border-indigo-500/40 hover:bg-slate-900/60"
                            >
                                <div className="text-slate-400 text-[11px] font-mono uppercase tracking-wider mb-1">
                                    {metric.label}
                                </div>
                                <div className="text-2xl md:text-3xl font-extrabold gradient-text">
                                    {metric.value}
                                </div>
                                <div className="text-slate-400 text-[11px] mt-1">
                                    {metric.subtext}
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>
        </section>
    );
};

export default HeroSection;
