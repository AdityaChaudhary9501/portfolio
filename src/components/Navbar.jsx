import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, Terminal, Code2 } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Recommendations', href: '#recommendations' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#about" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-0.5 shadow-lg group-hover:shadow-indigo-500/25 transition-all">
                        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                            <span className="font-mono font-bold text-indigo-400 text-sm tracking-tighter">&lt;AC /&gt;</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">Aditya Chaudhary</span>
                        <span className="text-[10px] font-mono text-slate-400">Software Engineer</span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Social Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="https://github.com/AdityaChaudhary9501"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        title="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/aditya-chaudhary-71306b190"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        title="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="mailto:adityachaudhary9501@gmail.com"
                        className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow-indigo-500/25 transition-all"
                    >
                        <Mail size={14} />
                        <span>Contact</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 py-4 backdrop-blur-xl"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-3 pt-3 mt-2 border-t border-slate-800">
                                <a
                                    href="https://github.com/AdityaChaudhary9501"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-300 bg-slate-800 rounded-lg"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                                <a
                                    href="mailto:adityachaudhary9501@gmail.com"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg"
                                >
                                    <Mail size={16} /> Contact
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
