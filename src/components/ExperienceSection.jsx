import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ChevronUp, ExternalLink, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';

const experiences = [
    {
        period: 'Sep 2025 – May 2026',
        role: 'Full Stack Software Engineer',
        company: 'AB InBev',
        badge: 'Current Role',
        location: 'Bangalore, India',
        summary: 'Orchestrating microservices architecture and high-throughput data platforms processing billions in financial data.',
        highlights: [
            'Orchestrated the transition to a microservices-based architecture for a globally live platform handling billions in financial data.',
            'Leveraged Azure App Services, multiple databases, and Databricks for scalable, high-performance data ingestion.',
            'Led full-stack training workshops for 15+ developers across Mexico and Central America.',
            'Monitored tool performance using Datadog and Azure App Insights, reducing incident tickets by 35%.'
        ],
        skills: ['Python', 'Azure', 'Microservices', 'Databricks', 'Datadog', 'REST APIs']
    },
    {
        period: 'Aug 2023 – Aug 2025',
        role: 'Jr. Full Stack Developer',
        company: 'AB InBev',
        badge: '2 Years',
        location: 'Bangalore, India',
        summary: 'Engineered an in-house Account Reconciliation tool replacing third-party software, saving $600K annually.',
        highlights: [
            'Developed in-house Account Reconciliation tool replacing BlackLine, saving $600K annually.',
            'Built data ingestion pipelines via Azure Data Factory (ADF) to integrate multiple ERP systems seamlessly.',
            'Engineered real-time KPI dashboard using Recharts, decreasing report generation time from 2 hours to 10 minutes.',
            'Championed effort to reduce false positives from APIIRO and Snyk scans, optimizing application security posture.'
        ],
        skills: ['React', 'Azure Data Factory', 'SQL Server', 'Recharts', 'Snyk', 'Apiiro']
    },
    {
        period: 'Jan 2023 – Jul 2023',
        role: 'Full Stack Engineering Intern',
        company: 'AB InBev',
        badge: 'Internship',
        location: 'Bangalore, India',
        summary: 'Built automated NPS application with sentiment analysis, boosting promoter conversion by 4%.',
        highlights: [
            'Developed and deployed full-stack NPS web application using React, Flask, and SQL Server.',
            'Integrated with Azure Function Apps for automated background workflows.',
            'Implemented sentiment analysis using Hugging Face NLP models to identify detractors and drive actionable insights.',
            'Improved promoter conversion rates by 4%.'
        ],
        skills: ['React', 'Flask', 'Azure Functions', 'Hugging Face NLP', 'SQL Server']
    },
    {
        period: '2019 – 2023',
        role: 'B.Tech in Computer Science',
        company: 'Vellore Institute of Technology (VIT)',
        badge: 'Graduated (8.71 CGPA)',
        location: 'Vellore, Tamil Nadu',
        summary: 'Bachelor of Technology degree with strong fundamentals in Data Structures, OS, and Database Systems.',
        highlights: [
            'Graduated with 8.71 CGPA out of 10.',
            'Specialized in Computer Science & Engineering with hands-on projects in Machine Learning and Web Technologies.'
        ],
        skills: ['Data Structures', 'Database Systems', 'Machine Learning', 'Java', 'Python']
    },
];

const ExperienceSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="py-12 px-4 max-w-5xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
                    <div>
                        <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                            <Briefcase size={14} /> Career Journey
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                            Work Experience
                        </h2>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full self-start md:self-auto border border-slate-700/60">
                        3+ Years Industry Experience
                    </span>
                </div>

                <div className="space-y-4">
                    {experiences.map((item, index) => {
                        const isExpanded = expandedIndex === index;
                        const isEducation = item.company.includes('VIT') || item.company.includes('Vellore');

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className={`rounded-xl border transition-all duration-300 overflow-hidden ${isExpanded
                                    ? 'bg-slate-900/90 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700/80'
                                    }`}
                            >
                                {/* Item Bar */}
                                <div
                                    onClick={() => toggleExpand(index)}
                                    className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                                >
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className={`p-2.5 rounded-xl text-white mt-0.5 shrink-0 ${isEducation ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                                            }`}>
                                            {isEducation ? <GraduationCap size={20} /> : <Building2 size={20} />}
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                                                    {item.role}
                                                </h3>
                                                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                                                    {item.badge}
                                                </span>
                                            </div>
                                            <div className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                                                <span>{item.company}</span>
                                                <span className="text-slate-600">•</span>
                                                <span className="text-slate-400 text-xs font-normal">{item.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
                                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                                            <Calendar size={13} className="text-indigo-400" />
                                            <span>{item.period}</span>
                                        </div>
                                        <button className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors">
                                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-5 pb-5 pt-1 border-t border-slate-800/80 bg-slate-950/40"
                                        >
                                            <p className="text-slate-300 text-sm mb-4 leading-relaxed font-normal">
                                                {item.summary}
                                            </p>

                                            <div className="space-y-2 mb-5">
                                                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                                                    Key Impact & Responsibilities:
                                                </div>
                                                <ul className="space-y-2 text-slate-300 text-xs md:text-sm">
                                                    {item.highlights.map((bullet, i) => (
                                                        <li key={i} className="flex items-start gap-2.5">
                                                            <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/50">
                                                {item.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2.5 py-1 rounded bg-slate-800/60 text-slate-300 font-mono text-[11px] border border-slate-700/50"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </GlassCard>
        </section>
    );
};

export default ExperienceSection;
