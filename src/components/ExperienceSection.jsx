import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building2, MapPin, Sparkles, ChevronRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';
import { SketchUnderline } from './SketchDoodleStroke';

const experiences = [
    {
        id: 'ab-fullstack',
        period: 'Sep 2025 – May 2026',
        role: 'Full Stack Software Engineer',
        company: 'AB InBev',
        badge: 'Current Role',
        location: 'Bangalore, India',
        impact: 'Billions in Financial Data',
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
        id: 'ab-jr',
        period: 'Aug 2023 – Aug 2025',
        role: 'Jr. Full Stack Developer',
        company: 'AB InBev',
        badge: '2 Years',
        location: 'Bangalore, India',
        impact: '$600K/yr Annual Savings',
        summary: 'Engineered an in-house Account Reconciliation tool replacing third-party software (BlackLine), saving $600K annually.',
        highlights: [
            'Developed in-house Account Reconciliation tool replacing BlackLine, saving $600K annually.',
            'Built data ingestion pipelines via Azure Data Factory (ADF) to integrate multiple ERP systems seamlessly.',
            'Engineered real-time KPI dashboard using Recharts, decreasing report generation time from 2 hours to 10 minutes.',
            'Championed effort to reduce false positives from APIIRO and Snyk scans, optimizing application security posture.'
        ],
        skills: ['React', 'Azure Data Factory', 'SQL Server', 'Recharts', 'Snyk', 'Apiiro']
    },
    {
        id: 'ab-intern',
        period: 'Jan 2023 – Jul 2023',
        role: 'Full Stack Engineering Intern',
        company: 'AB InBev',
        badge: 'Internship',
        location: 'Bangalore, India',
        impact: '+4% Promoter Conversion',
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
        id: 'vit',
        period: '2019 – 2023',
        role: 'B.Tech in Computer Science',
        company: 'Vellore Institute of Technology (VIT)',
        badge: 'Graduated (8.71 CGPA)',
        location: 'Vellore, Tamil Nadu',
        impact: '8.71 / 10 CGPA',
        summary: 'Bachelor of Technology with strong fundamentals in Data Structures, OS, and Database Systems.',
        highlights: [
            'Graduated with 8.71 CGPA out of 10 in Computer Science & Engineering.',
            'Specialized in Computer Science & Engineering with hands-on projects in Machine Learning and Web Technologies.'
        ],
        skills: ['Data Structures', 'Database Systems', 'Machine Learning', 'Java', 'Python']
    },
];

const ExperienceSection = () => {
    const [selectedId, setSelectedId] = useState('ab-fullstack');
    const activeExperience = experiences.find(e => e.id === selectedId) || experiences[0];

    return (
        <section id="experience" className="w-full">
            <GlassCard>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-sky-100">
                    <div>
                        <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs uppercase tracking-wider mb-1">
                            <Briefcase size={14} /> Career Journey
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Work Experience & Leadership</h2>
                        <SketchUnderline className="w-56 text-sky-400" />
                    </div>
                    <span className="px-4 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-full self-start md:self-auto shadow-sm">
                        3+ Years Industry Experience @ AB InBev
                    </span>
                </div>

                {/* Landscape Master-Detail Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left Master List (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-2.5">
                        {experiences.map((exp) => {
                            const isSelected = selectedId === exp.id;
                            const isEdu = exp.id === 'vit';

                            return (
                                <button
                                    key={exp.id}
                                    onClick={() => setSelectedId(exp.id)}
                                    className={`p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group ${
                                        isSelected
                                            ? 'bg-white shadow-lg shadow-sky-500/10 border-2 border-sky-400'
                                            : 'bg-white/50 hover:bg-white border border-slate-200/70 hover:border-sky-200'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                                            isSelected 
                                                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30' 
                                                : 'bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-600'
                                        }`}>
                                            {isEdu ? <GraduationCap size={18} /> : <Building2 size={18} />}
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-sm leading-tight transition-colors ${
                                                isSelected ? 'text-sky-700' : 'text-slate-800 group-hover:text-sky-600'
                                            }`}>
                                                {exp.role}
                                            </h3>
                                            <p className="text-xs text-slate-500 font-medium mt-0.5">{exp.company}</p>
                                            <span className="text-[10px] text-sky-600 font-mono font-medium block mt-1">{exp.period}</span>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform ${isSelected ? 'text-sky-500 translate-x-1' : 'text-slate-300'}`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Detail Card (8 cols) */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeExperience.id}
                                initial={{ opacity: 0.5, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="bg-white/90 border border-sky-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-sky-500/5 relative overflow-hidden"
                            >
                                {/* Light Blue Glow Corner Accent */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-400/10 to-indigo-400/5 rounded-full blur-2xl pointer-events-none" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-3 py-1 bg-sky-100 text-sky-700 font-semibold text-xs rounded-full">
                                                {activeExperience.badge}
                                            </span>
                                            <span className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                                                <MapPin size={12} className="text-sky-500" />
                                                {activeExperience.location}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">{activeExperience.role}</h3>
                                        <p className="text-sm font-semibold text-sky-600">{activeExperience.company} • <span className="font-mono font-normal text-slate-500">{activeExperience.period}</span></p>
                                    </div>

                                    <div className="flex items-center gap-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 px-4 py-2 rounded-2xl">
                                        <TrendingUp size={18} className="text-sky-600" />
                                        <div>
                                            <div className="text-[10px] uppercase font-bold text-slate-400">Impact Highlight</div>
                                            <div className="text-xs font-bold text-sky-700">{activeExperience.impact}</div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                                    {activeExperience.summary}
                                </p>

                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                                    <Sparkles size={14} className="text-sky-500" /> Key Engineering Accomplishments
                                </h4>

                                <div className="space-y-3 mb-6">
                                    {activeExperience.highlights.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                                            <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-xs md:text-sm leading-relaxed font-normal">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-semibold text-slate-400 mr-2">Technologies Used:</span>
                                    {activeExperience.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-medium rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </GlassCard>
        </section>
    );
};

export default ExperienceSection;
