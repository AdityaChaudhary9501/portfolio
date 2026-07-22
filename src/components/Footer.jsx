import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 pt-8 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-3xl p-6 md:p-8 shadow-xl shadow-sky-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Brand & Status */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-sky-500 text-white font-extrabold text-xs flex items-center justify-center shadow-md shadow-sky-500/20">
                            AC
                        </div>
                        <span className="font-bold text-slate-900 text-base">Aditya Chaudhary</span>
                    </div>

                    <p className="text-slate-500 text-xs font-medium max-w-md">
                        Full Stack Software Engineer building enterprise microservices & high-throughput cloud platforms.
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-xs font-medium text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>All Systems Operational • Bangalore 🇮🇳</span>
                    </div>
                </div>

                {/* Social Quick Links & Scroll Top */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-full border border-sky-100">
                        <a 
                            href="https://github.com/AdityaChaudhary9501" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 text-slate-600 hover:text-sky-600 hover:bg-white rounded-full transition-all"
                            title="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a 
                            href="https://linkedin.com/in/aditya-chaudhary-71306b190" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 text-slate-600 hover:text-sky-600 hover:bg-white rounded-full transition-all"
                            title="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a 
                            href="mailto:adityachaudhary9501@gmail.com"
                            className="p-2 text-slate-600 hover:text-sky-600 hover:bg-white rounded-full transition-all"
                            title="Email Contact"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg shadow-sky-500/25 hover:scale-105 transition-all"
                        title="Scroll to top"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>

            <div className="text-center mt-6 text-xs text-slate-400 font-medium">
                © {new Date().getFullYear()} Aditya Chaudhary. Crafted with Apple Minimalist UI & React.
            </div>
        </footer>
    );
};

export default Footer;
