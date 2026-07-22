import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ChevronUp, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';
import { SketchUnderline } from './SketchDoodleStroke';

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
        summary: 'Bachelor of Technology with strong fundamentals in Data Structures, OS, and Database Systems.',
        highlights: [
            'Graduated with 8.71 CGPA out of 10.',
            'Specialized in Computer Science & Engineering with hands-on projects in Machine Learning and Web Technologies.'
        ],
        skills: ['Data Structures', 'Database Systems', 'Machine Learning', 'Java', 'Python']
    },
];

const ExperienceSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <section id="experience" className="py-12 px-4 max-w-5xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-amber-800/25">
                    <div>
                        <div className="flex items-center gap-2 text-amber-500/70 font-mono text-xs uppercase tracking-widest mb-1">
                            <Briefcase size={13} /> Career Journey
                        </div>
                        <h2 className="font-sketch text-4xl md:text-5xl font-bold text-amber-100">Work Experience</h2>
                        <SketchUnderline className="w-48 text-amber-400" />
                    </div>
                    <span className="sketch-pill px-3 py-1.5 text-xs font-mono text-amber-300/70 self-start md:self-auto">
                        3+ Years Industry Experience
                    </span>
                </div>

                <div className="space-y-3">
                    {experiences.map((item, index) => {
                        const isExpanded = expandedIndex === index;
                        const isEducation = item.company.includes('VIT') || item.company.includes('Vellore');

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className={`rounded-sm border transition-all duration-300 overflow-hidden ${
                                    isExpanded
                                        ? 'bg-[#1C1916]/90 border-amber-600/50 shadow-lg shadow-amber-900/20'
                                        : 'bg-[#14120E]/60 border-amber-800/25 hover:border-amber-700/40'
                                }`}
                            >
                                <div onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                    className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none">
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className={`p-2.5 rounded-sm mt-0.5 shrink-0 border ${
                                            isEducation ? 'bg-amber-900/20 text-amber-300 border-amber-700/40' : 'bg-amber-900/20 text-amber-400 border-amber-700/40'
                                        }`}>
                                            {isEducation ? <GraduationCap size={19} /> : <Building2 size={19} />}
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                                <h3 className="font-sketch text-xl md:text-2xl font-bold text-amber-100">{item.role}</h3>
                                                <span className="sketch-pill text-[10px] font-mono font-semibold px-2 py-0.5 text-amber-400/80">{item.badge}</span>
                                            </div>
                                            <div className="text-sm text-[#B0A890] flex items-center gap-2">
                                                <span className="font-medium">{item.company}</span>
                                                <span className="text-amber-800">•</span>
                                                <span className="text-xs">{item.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-amber-800/20">
                                        <div className="flex items-center gap-1.5 text-xs font-mono text-amber-600/70">
                                            <Calendar size={12} />
                                            <span>{item.period}</span>
                                        </div>
                                        <button className="p-1 text-amber-600/60 hover:text-amber-400 rounded-sm transition-colors">
                                            {isExpanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
                                        </button>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-5 pb-5 pt-1 border-t border-amber-800/20 bg-[#14120E]/30"
                                        >
                                            <p className="text-[#B0A890] text-sm mb-4 leading-relaxed">{item.summary}</p>
                                            <div className="space-y-2 mb-4">
                                                <div className="text-[10px] font-mono text-amber-500/70 uppercase tracking-widest font-semibold">Key Impact:</div>
                                                <ul className="space-y-2">
                                                    {item.highlights.map((bullet, i) => (
                                                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#C8BFA8]">
                                                            <CheckCircle2 size={14} className="text-amber-500/70 mt-0.5 shrink-0" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-amber-800/15">
                                                {item.skills.map((skill, i) => (
                                                    <span key={i} className="sketch-pill px-2.5 py-0.5 text-amber-200/70 font-mono text-[11px]">{skill}</span>
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
