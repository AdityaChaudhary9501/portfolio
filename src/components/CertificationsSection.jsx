import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, BookOpen, ExternalLink, CheckCircle } from 'lucide-react';
import GlassCard from './GlassCard';

const certifications = [
    {
        title: 'Large Scale Database Systems',
        issuer: 'Johns Hopkins University',
        year: '2025',
        badge: 'Specialization',
        description: 'Advanced architecture, indexing, and query optimization for high-volume relational & distributed data systems.',
        tags: ['Distributed Systems', 'SQL Optimization', 'Database Architecture']
    },
    {
        title: 'Application Security Champion',
        issuer: 'AB InBev Security',
        year: '2024',
        badge: 'Yellow Belt Certified',
        description: 'Mastered OWASP Top 10 vulnerabilities, secure coding principles, threat modeling, and automated SAST/DAST tooling.',
        tags: ['AppSec', 'OWASP Top 10', 'Snyk', 'Apiiro']
    },
    {
        title: 'Supervised Machine Learning',
        issuer: 'Stanford Online',
        year: '2024',
        badge: 'Specialization',
        description: 'Comprehensive study of predictive modeling, linear/logistic regression, decision trees, and neural networks.',
        tags: ['Machine Learning', 'Regression', 'Classification', 'Python']
    },
    {
        title: 'Web Application Technologies',
        issuer: 'University of Michigan',
        year: '2023',
        badge: 'Professional Cert',
        description: 'In-depth exploration of modern web development, MVC architecture, Django frameworks, and HTTP protocols.',
        tags: ['Web Frameworks', 'Django', 'REST Architecture']
    }
];

const CertificationsSection = () => {
    return (
        <section id="certifications" className="py-12 px-4 max-w-5xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
                    <div>
                        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                            <Award size={14} /> Credentials & Learning
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                            Certifications & Honors
                        </h2>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full self-start md:self-auto border border-slate-700/60">
                        Verified Credentials
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 relative flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div>
                                        <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                                            {cert.issuer} • {cert.year}
                                        </span>
                                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {cert.title}
                                        </h3>
                                    </div>
                                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                                        <Award size={18} />
                                    </div>
                                </div>

                                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                                    {cert.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-800/60">
                                    <div className="flex flex-wrap gap-1.5">
                                        {cert.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[11px] border border-slate-800"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shrink-0">
                                        {cert.badge}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </section>
    );
};

export default CertificationsSection;
