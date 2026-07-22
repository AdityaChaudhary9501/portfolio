import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
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
        <section id="certifications" className="py-12 px-4 max-w-5xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-amber-800/25">
                    <div>
                        <div className="flex items-center gap-2 text-amber-500/70 font-mono text-xs uppercase tracking-widest mb-1">
                            <Award size={13} /> Credentials & Learning
                        </div>
                        <h2 className="font-sketch text-4xl md:text-5xl font-bold text-amber-100">Certifications</h2>
                        <SketchUnderline className="w-40 text-amber-400" />
                    </div>
                    <span className="sketch-pill px-3 py-1.5 text-xs font-mono text-amber-300/70 self-start md:self-auto">Verified Credentials</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {certifications.map((cert, index) => (
                        <motion.div key={cert.title}
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -2 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="bg-[#14120E]/70 border border-amber-800/25 rounded-sm p-5 flex flex-col justify-between hover:border-amber-600/40 transition-all group"
                            style={{ boxShadow: '2px 2px 0 rgba(212,168,83,0.06)' }}
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div>
                                        <span className="text-[10px] font-mono text-amber-500/70 uppercase tracking-wider block mb-0.5">
                                            {cert.issuer} · {cert.year}
                                        </span>
                                        <h3 className="font-sketch text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">{cert.title}</h3>
                                    </div>
                                    <div className="p-2 rounded-sm bg-amber-900/25 text-amber-400 border border-amber-700/30 shrink-0">
                                        <Award size={17} />
                                    </div>
                                </div>
                                <p className="text-[#B0A890] text-xs md:text-sm leading-relaxed mb-5">{cert.description}</p>
                            </div>
                            <div className="pt-4 border-t border-amber-800/20 flex items-center justify-between gap-2">
                                <div className="flex flex-wrap gap-1.5">
                                    {cert.tags.map((tag, i) => (
                                        <span key={i} className="sketch-pill px-2 py-0.5 text-amber-200/60 font-mono text-[10px]">{tag}</span>
                                    ))}
                                </div>
                                <span className="text-[10px] font-sketch font-bold px-2 py-0.5 bg-amber-900/25 text-amber-400 border border-amber-700/30 rounded-sm shrink-0">{cert.badge}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </section>
    );
};

export default CertificationsSection;
