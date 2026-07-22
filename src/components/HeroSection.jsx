import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Github, Linkedin, Pencil } from 'lucide-react';
import GlassCard from './GlassCard';
import SketchAvatar from './SketchAvatar';
import { SketchUnderline, SketchCircle, SketchCardBorder } from './SketchDoodleStroke';

const keyMetrics = [
    { label: 'Experience', value: '3+ YOE', subtext: 'Full Stack @ AB InBev' },
    { label: 'Cost Savings', value: '$600K+', subtext: 'Annual tool savings' },
    { label: 'Reliability', value: '-35%', subtext: 'Incident reduction' },
    { label: 'Academic CGPA', value: '8.71', subtext: 'VIT Vellore B.Tech' },
];

const HeroSection = () => {
    return (
        <section id="about" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center py-6 px-4 max-w-5xl mx-auto w-full my-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full my-auto"
            >
                <GlassCard className="p-5 md:p-8 relative overflow-hidden">
                    {/* Warm background glows */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-amber-700/8 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-900/8 rounded-full blur-3xl pointer-events-none" />

                    {/* Hand-drawn doodle corner accents */}
                    <div className="absolute top-4 right-6 font-sketch text-amber-500/25 text-5xl leading-none select-none rotate-6">✦</div>
                    <div className="absolute bottom-6 left-8 font-sketch text-amber-500/20 text-4xl leading-none select-none -rotate-12">✧</div>

                    <div className="relative z-10 flex flex-col items-center md:flex-row md:items-start gap-6 lg:gap-10">

                        {/* Hand-Drawn Pencil Sketch Avatar Column */}
                        <div className="flex flex-col items-center shrink-0">
                            <SketchAvatar imageSrc="/aditya.jpeg" alt="Aditya Chaudhary" />
                            <div className="mt-2 flex items-center gap-1.5 text-amber-500/70 text-xs font-mono">
                                <MapPin size={12} className="text-amber-500/80" />
                                <span>Bangalore, India 🇮🇳</span>
                            </div>
                        </div>

                        {/* Info Column */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                            {/* Label */}
                            <div className="inline-flex items-center gap-2 px-3 py-0.5 mb-2 bg-amber-900/20 border border-amber-700/40 rounded-sm">
                                <Pencil size={12} className="text-amber-400" />
                                <span className="text-xs font-mono text-amber-300/80 tracking-wider uppercase">Full Stack & Cloud Engineer</span>
                            </div>

                            <h1 className="font-sketch text-4xl md:text-5xl font-bold text-amber-100 mb-1 leading-tight">
                                Aditya Chaudhary
                            </h1>

                            {/* Animated SVG Hand-Drawn Pencil Underline */}
                            <SketchUnderline className="w-52 text-amber-400 mb-4" />

                            <p className="text-[#C8BFA8] text-xs md:text-sm leading-relaxed mb-5 font-normal max-w-xl">
                                Software Engineer specializing in high-throughput microservices, enterprise financial platforms, and data pipelines. Proven track record saving{' '}
                                <SketchCircle>
                                    <span className="text-amber-300 font-semibold font-sketch text-base px-1">$600K+ annually</span>
                                </SketchCircle>{' '}
                                and handling billions in financial data.
                            </p>

                            {/* Action CTAs */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                                <a href="#experience"
                                    className="px-4 py-2 font-sketch font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 text-xs shadow-md hover:shadow-amber-400/20 flex items-center gap-1.5 transition-all hover:-translate-y-0.5 rounded-sm">
                                    <span>Explore Experience</span>
                                    <ArrowUpRight size={14} />
                                </a>
                                <a href="https://github.com/AdityaChaudhary9501" target="_blank" rel="noopener noreferrer"
                                    className="px-3.5 py-2 font-sketch font-bold text-amber-200 bg-[#2A2520] hover:bg-[#332E28] border border-amber-800/40 text-xs flex items-center gap-1.5 transition-all hover:-translate-y-0.5 rounded-sm">
                                    <Github size={14} /><span>GitHub</span>
                                </a>
                                <a href="https://linkedin.com/in/aditya-chaudhary-71306b190" target="_blank" rel="noopener noreferrer"
                                    className="px-3.5 py-2 font-sketch font-bold text-amber-200 bg-[#2A2520] hover:bg-[#332E28] border border-amber-800/40 text-xs flex items-center gap-1.5 transition-all hover:-translate-y-0.5 rounded-sm">
                                    <Linkedin size={14} /><span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Impact Metrics Grid */}
                    <div className="mt-6 pt-5 border-t border-amber-800/25 grid grid-cols-2 md:grid-cols-4 gap-3">
                        {keyMetrics.map((metric, idx) => (
                            <SketchCardBorder key={idx}>
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    className="bg-[#14120E]/80 border border-amber-800/25 rounded-sm p-3 text-center hover:border-amber-600/40 transition-all h-full"
                                    style={{ boxShadow: '2px 2px 0 rgba(212,168,83,0.08)' }}
                                >
                                    <div className="text-amber-600/70 text-[10px] font-mono uppercase tracking-widest mb-0.5">{metric.label}</div>
                                    <div className="font-sketch text-2xl md:text-3xl font-bold amber-text">{metric.value}</div>
                                    <div className="text-[#A09880] text-[10px] mt-0.5">{metric.subtext}</div>
                                </motion.div>
                            </SketchCardBorder>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>
        </section>
    );
};

export default HeroSection;
