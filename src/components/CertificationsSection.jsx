import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';
import { SketchUnderline } from './SketchDoodleStroke';

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
        <section id="certifications" className="w-full">
            <GlassCard>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-sky-100">
                    <div>
                        <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs uppercase tracking-wider mb-1">
                            <Award size={14} /> Credentials & Certifications
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Academic & Industry Certification</h2>
                        <SketchUnderline className="w-56 text-sky-400" />
                    </div>
                    <span className="px-4 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-full self-start md:self-auto shadow-sm flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-sky-500" /> Verified Credentials
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.title}
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white/90 border border-sky-100 rounded-3xl p-6 flex flex-col justify-between shadow-lg shadow-sky-500/5 hover:shadow-xl hover:border-sky-300 transition-all group"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div>
                                        <span className="text-[11px] font-semibold text-sky-600 uppercase tracking-wider block mb-0.5">
                                            {cert.issuer} • {cert.year}
                                        </span>
                                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-sky-600 transition-colors">
                                            {cert.title}
                                        </h3>
                                    </div>
                                    <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200/60 shadow-sm shrink-0">
                                        <Award size={20} />
                                    </div>
                                </div>
                                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-5 font-normal">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                                <div className="flex flex-wrap gap-1.5">
                                    {cert.tags.map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-full shrink-0">
                                    {cert.badge}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </section>
    );
};

export default CertificationsSection;
