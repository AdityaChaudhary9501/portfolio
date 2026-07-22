import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, BookOpen } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="mt-20 border-t border-amber-800/25 bg-[#0E0C09]/80 backdrop-blur-md relative z-10 py-12 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-sm bg-[#1C1916] border border-amber-700/40 flex items-center justify-center">
                            <BookOpen size={15} className="text-amber-400" />
                        </div>
                        <span className="font-sketch font-bold text-xl text-amber-200">Aditya Chaudhary</span>
                    </div>
                    <p className="text-[#908070] text-xs font-mono max-w-sm">
                        Full Stack Software Engineer · Building high-performance microservices, data ingestion systems & secure web applications.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {[
                        { href: 'https://github.com/AdityaChaudhary9501', icon: Github, label: 'GitHub' },
                        { href: 'https://linkedin.com/in/aditya-chaudhary-71306b190', icon: Linkedin, label: 'LinkedIn' },
                        { href: 'mailto:adityachaudhary9501@gmail.com', icon: Mail, label: 'Email' },
                    ].map(({ href, icon: Icon, label }) => (
                        <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-sm bg-[#1C1916] border border-amber-800/30 text-amber-500/60 hover:text-amber-300 hover:border-amber-700/50 transition-all"
                            title={label}>
                            <Icon size={17} />
                        </a>
                    ))}
                    <button onClick={scrollToTop}
                        className="p-2.5 rounded-sm bg-amber-400/15 text-amber-400 border border-amber-700/40 hover:bg-amber-400 hover:text-amber-950 transition-all ml-1"
                        title="Back to Top">
                        <ArrowUp size={17} />
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-amber-800/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#706050] gap-2">
                <p>© {new Date().getFullYear()} Aditya Chaudhary. Built with React & Tailwind CSS.</p>
                <p className="text-amber-700/60 font-sketch font-semibold text-sm">Crafted with ✏️ and ☕</p>
            </div>
        </footer>
    );
};

export default Footer;
