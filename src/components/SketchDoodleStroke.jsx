import React from 'react';
import { motion } from 'framer-motion';

// Hand-drawn animated SVG pencil underline
export const SketchUnderline = ({ className = "w-48 text-amber-500/80 mt-1" }) => {
    return (
        <svg className={`h-3 ${className}`} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                d="M 4 8 C 40 4, 80 11, 120 6 C 150 2, 180 9, 196 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.path
                d="M 10 10 C 50 7, 90 11, 130 8 C 160 5, 175 9, 190 7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            />
        </svg>
    );
};

// Hand-drawn animated SVG doodle circle around badges/text
export const SketchCircle = ({ children, className = "" }) => {
    return (
        <div className={`relative inline-block ${className}`}>
            {children}
            <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none text-amber-500/60" viewBox="0 0 100 50" preserveAspectRatio="none">
                <motion.path
                    d="M 10 25 C 8 8, 45 4, 85 8 C 96 18, 94 38, 80 44 C 40 48, 8 42, 12 20 C 15 8, 50 5, 88 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
};

// Hand-drawn animated card border outline
export const SketchCardBorder = ({ children, className = "" }) => {
    return (
        <div className={`relative group ${className}`}>
            {children}
            <svg className="absolute inset-0 w-full h-full pointer-events-none text-amber-500/40 group-hover:text-amber-400/80 transition-colors" preserveAspectRatio="none">
                <motion.rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeDasharray="4 2 8 2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </svg>
        </div>
    );
};

// Pencil Hatch Shading Progress Bar
export const PencilProgressBar = ({ level = '85%', delay = 0.2 }) => {
    return (
        <div className="h-3 bg-[#1C1916] rounded-sm overflow-hidden border border-amber-900/40 relative p-0.5">
            {/* Background hatch lines pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(212,168,83,0.5) 0, rgba(212,168,83,0.5) 1px, transparent 0, transparent 4px)`
                }}
            />
            {/* Animated Pencil Shading Fill */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                transition={{ duration: 1.2, delay, ease: "easeOut" }}
                className="h-full rounded-xs relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500"
            >
                {/* Pencil texture hatch overlay on fill */}
                <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 0, transparent 3px)`
                    }}
                />
            </motion.div>
        </div>
    );
};
