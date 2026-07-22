import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2, Terminal } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="mt-20 border-t border-slate-800/80 bg-[#060911]/80 backdrop-blur-md relative z-10 py-12 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs border border-indigo-500/30">
                            &lt;/&gt;
                        </div>
                        <span className="font-bold text-white tracking-tight text-lg">Aditya Chaudhary</span>
                    </div>
                    <p className="text-slate-400 text-xs font-mono max-w-md">
                        Full Stack Software Engineer • Building high-performance microservices, data ingestion systems & secure web apps.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/AdityaChaudhary9501"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                        title="GitHub Profile"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/adityachaudhary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                        title="LinkedIn Profile"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="mailto:adityachaudhary9501@gmail.com"
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                        title="Email Contact"
                    >
                        <Mail size={18} />
                    </a>
                    <button
                        onClick={scrollToTop}
                        className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all ml-2"
                        title="Back to Top"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
                <p>© {new Date().getFullYear()} Aditya Chaudhary. Built with React & Tailwind CSS.</p>
                <p className="flex items-center gap-1.5 text-slate-400">
                    <Terminal size={12} className="text-cyan-400" />
                    <span>Engineered for performance & scalability</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
