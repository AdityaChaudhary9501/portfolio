import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, Sparkles, Clock, Globe } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Recommendations', href: '#recommendations', id: 'recommendations' },
];

const Navbar = ({ activeSection = 'about', setActiveSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        const updateClock = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateClock();
        const timer = setInterval(updateClock, 30000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const handleNavClick = (id) => {
        if (setActiveSection) {
            setActiveSection(id);
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-5'
        }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-full px-4 py-2.5 shadow-xl shadow-sky-500/10 flex items-center justify-between">
                    
                    {/* Apple Logo & Profile Pill */}
                    <a 
                        href="#about" 
                        onClick={() => handleNavClick('about', '#about')}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                            AC
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                                Aditya Chaudhary
                            </span>
                            <span className="text-[10px] font-medium text-sky-600 tracking-wide flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Software Engineer
                            </span>
                        </div>
                    </a>

                    {/* Desktop Dynamic Dock Navigation Tabs */}
                    <nav className="hidden md:flex items-center gap-1.5 bg-slate-200/60 backdrop-blur-md p-1.5 rounded-full border border-slate-300/50 shadow-inner">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <button
                                    key={link.name}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                                    className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-all rounded-full whitespace-nowrap ${
                                        isActive
                                            ? 'text-sky-700 font-bold'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-white rounded-full shadow-md shadow-sky-500/20 border border-white"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Clock & Action Controls */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full text-slate-600 text-xs font-mono">
                            <Clock size={12} className="text-sky-500" />
                            <span>{currentTime || '21:55'}</span>
                            <span className="text-slate-400">IST</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <a 
                                href="https://github.com/AdityaChaudhary9501" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors"
                                title="GitHub Profile"
                            >
                                <Github size={17} />
                            </a>
                            <a 
                                href="https://linkedin.com/in/aditya-chaudhary-71306b190" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors"
                                title="LinkedIn Profile"
                            >
                                <Linkedin size={17} />
                            </a>
                            <a 
                                href="mailto:adityachaudhary9501@gmail.com"
                                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-full shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 hover:scale-105 transition-all"
                            >
                                <Mail size={13} />
                                <span>Contact</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-700 hover:text-sky-600 rounded-full bg-slate-100 border border-slate-200"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden max-w-6xl mx-auto px-4 mt-2"
                    >
                        <div className="bg-white/95 backdrop-blur-2xl border border-sky-100 rounded-3xl p-5 shadow-2xl shadow-sky-500/15 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href}
                                    onClick={() => handleNavClick(link.id, link.href)}
                                    className={`px-4 py-2.5 font-medium rounded-2xl transition-colors ${
                                        activeSection === link.id 
                                            ? 'bg-sky-50 text-sky-600 font-semibold border border-sky-100' 
                                            : 'text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-2 pt-3 mt-2 border-t border-slate-100">
                                <a 
                                    href="https://github.com/AdityaChaudhary9501" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full"
                                >
                                    <Github size={15} /> GitHub
                                </a>
                                <a 
                                    href="mailto:adityachaudhary9501@gmail.com"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-sky-500 rounded-full shadow-md shadow-sky-500/20"
                                >
                                    <Mail size={15} /> Contact
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
