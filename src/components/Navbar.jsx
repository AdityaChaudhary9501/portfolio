import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, BookOpen } from 'lucide-react';

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
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#1C1916]/90 backdrop-blur-md border-b border-amber-800/30 py-3 shadow-xl shadow-black/40' : 'bg-transparent py-5'
        }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

                {/* Logo */}
                <a href="#about" className="flex items-center gap-2.5 group">
                    <div className="w-10 h-10 rounded-sm bg-[#1C1916] border-2 border-amber-700/50 flex items-center justify-center shadow-md sketch-card">
                        <BookOpen size={18} className="text-amber-400 group-hover:text-amber-300 transition-colors" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sketch font-bold text-xl text-amber-200 group-hover:text-amber-100 transition-colors leading-tight">Aditya Chaudhary</span>
                        <span className="text-[10px] font-mono text-amber-600/80 tracking-widest uppercase">Software Engineer</span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-0.5 bg-[#1C1916]/70 border border-amber-800/30 rounded-sm px-3 py-1.5 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-3.5 py-1.5 text-xs font-sketch font-semibold text-amber-200/70 hover:text-amber-200 hover:bg-amber-900/20 rounded-sm transition-all tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Social Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <a href="https://github.com/AdityaChaudhary9501" target="_blank" rel="noopener noreferrer"
                        className="p-2 text-amber-400/60 hover:text-amber-300 hover:bg-amber-900/20 rounded-sm transition-colors border border-transparent hover:border-amber-800/30">
                        <Github size={17} />
                    </a>
                    <a href="https://linkedin.com/in/aditya-chaudhary-71306b190" target="_blank" rel="noopener noreferrer"
                        className="p-2 text-amber-400/60 hover:text-amber-300 hover:bg-amber-900/20 rounded-sm transition-colors border border-transparent hover:border-amber-800/30">
                        <Linkedin size={17} />
                    </a>
                    <a href="mailto:adityachaudhary9501@gmail.com"
                        className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-sketch font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 rounded-sm shadow-md transition-all">
                        <Mail size={13} />
                        <span>Contact</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-amber-300 hover:text-amber-100 rounded-sm bg-[#1C1916] border border-amber-800/40">
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#1C1916]/95 border-b border-amber-800/30 px-4 py-4 backdrop-blur-xl"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-3 py-2 font-sketch font-semibold text-amber-200/80 hover:text-amber-200 hover:bg-amber-900/20 rounded-sm transition-colors">
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-2 pt-3 mt-2 border-t border-amber-800/30">
                                <a href="https://github.com/AdityaChaudhary9501" target="_blank" rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-sketch text-amber-200 bg-[#2A2520] rounded-sm border border-amber-800/30">
                                    <Github size={15} /> GitHub
                                </a>
                                <a href="mailto:adityachaudhary9501@gmail.com"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-sketch font-bold text-amber-950 bg-amber-400 rounded-sm">
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
