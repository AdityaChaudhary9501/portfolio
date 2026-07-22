import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Github, Linkedin, Sparkles, ShieldCheck, Zap, Award, Code2 } from 'lucide-react';
import GlassCard from './GlassCard';
import SketchAvatar from './SketchAvatar';
import { SketchCircle, SketchUnderline } from './SketchDoodleStroke';
import TerminalWidget from './TerminalWidget';

const keyMetrics = [
    { label: 'Experience', value: '3+ YOE', subtext: 'Full Stack @ AB InBev', icon: Zap },
    { label: 'Annual Savings', value: '$600K+', subtext: 'In-house Rec tool', icon: ShieldCheck },
    { label: 'Reliability', value: '-35%', subtext: 'Incident reduction', icon: Code2 },
    { label: 'Academic CGPA', value: '8.71', subtext: 'VIT Vellore B.Tech', icon: Award },
];

const HeroSection = () => {
    return (
        <section id="about" className="w-full">
            <div className="w-full flex justify-center">
                <GlassCard className="p-5 sm:p-7 md:p-8">
                    {/* Apple Light Blue Gradient Glows */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-sky-400/20 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-300/15 to-sky-300/20 rounded-full blur-3xl pointer-events-none" />

                    {/* Main Landscape Grid (Profile Left, Terminal/Code Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">

                        {/* Left Column: Personal Profile & Metrics (7 cols) */}
                        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                            
                            {/* Live Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 bg-sky-50/90 border border-sky-200/80 rounded-full shadow-sm">
                                <Sparkles size={13} className="text-sky-500 animate-spin" style={{ animationDuration: '6s' }} />
                                <span className="text-[11px] font-semibold text-sky-700 tracking-wide uppercase">
                                    Full Stack & Cloud Engineer
                                </span>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-5 mb-4">
                                <SketchAvatar imageSrc="/aditya.jpeg" alt="Aditya Chaudhary" />

                                <div className="flex flex-col items-center lg:items-start">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                        Aditya <span className="apple-text-gradient">Chaudhary</span>
                                    </h1>

                                    <SketchUnderline className="w-48 text-sky-400 mb-2" />

                                    <div className="flex items-center gap-2 text-slate-600 text-xs font-medium bg-slate-100/70 border border-slate-200/80 px-3 py-0.5 rounded-full">
                                        <MapPin size={12} className="text-sky-500" />
                                        <span>Bangalore, India 🇮🇳</span>
                                        <span className="text-slate-300">•</span>
                                        <span className="text-sky-600 font-semibold">Ex-AB InBev</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 max-w-2xl font-normal">
                                Software Engineer specializing in high-throughput microservices, enterprise financial platforms, and cloud data pipelines. Proven track record saving{' '}
                                <SketchCircle>
                                    <span className="text-sky-700 font-bold px-1.5 py-0.5 bg-sky-100/80 rounded-md">$600K+ annually</span>
                                </SketchCircle>{' '}
                                and handling billions in financial data with microservices architecture.
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
                                <a 
                                    href="#experience"
                                    className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-full shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 hover:scale-105 flex items-center gap-1.5 text-xs transition-all"
                                >
                                    <span>Explore Experience</span>
                                    <ArrowUpRight size={14} />
                                </a>
                                <a 
                                    href="https://github.com/AdityaChaudhary9501" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-2 font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-full text-xs flex items-center gap-1.5 transition-all hover:scale-105"
                                >
                                    <Github size={14} />
                                    <span>GitHub</span>
                                </a>
                                <a 
                                    href="https://linkedin.com/in/aditya-chaudhary-71306b190" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-2 font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-full text-xs flex items-center gap-1.5 transition-all hover:scale-105"
                                >
                                    <Linkedin size={14} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>

                            {/* Impact Metrics Grid */}
                            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-sky-100">
                                {keyMetrics.map((metric, idx) => {
                                    const Icon = metric.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ y: -2 }}
                                            className="bg-white/80 border border-sky-100 rounded-2xl p-2.5 text-center shadow-sm hover:shadow-md hover:border-sky-300 transition-all"
                                        >
                                            <div className="flex items-center justify-center gap-1 text-sky-600 mb-0.5">
                                                <Icon size={12} />
                                                <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">{metric.label}</span>
                                            </div>
                                            <div className="text-base sm:text-lg font-bold apple-text-gradient">{metric.value}</div>
                                            <div className="text-slate-500 text-[10px] mt-0.5 font-medium">{metric.subtext}</div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Interactive macOS Terminal Widget (5 cols) */}
                        <div className="lg:col-span-5 w-full">
                            <TerminalWidget />
                        </div>

                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default HeroSection;
