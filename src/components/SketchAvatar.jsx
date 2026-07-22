import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, Eraser, Eye, Sparkles } from 'lucide-react';

const SketchAvatar = ({ imageSrc = "/aditya.jpeg", alt = "Aditya Chaudhary" }) => {
    const [mode, setMode] = useState('sketch'); // 'sketch' | 'photo' | 'erasing'
    const [isHovered, setIsHovered] = useState(false);
    const canvasRef = useRef(null);
    const [eraserDust, setEraserDust] = useState([]);

    // Trigger an eraser rubbing dust effect when hovering
    const handleMouseEnter = () => {
        setIsHovered(true);
        // Generate eraser dust particles
        const particles = Array.from({ length: 14 }).map((_, i) => ({
            id: i,
            x: Math.random() * 140 - 20,
            y: Math.random() * 140 - 20,
            vx: (Math.random() - 0.5) * 4,
            vy: -Math.random() * 3 - 1,
            size: Math.random() * 4 + 2,
            rotation: Math.random() * 360,
        }));
        setEraserDust(particles);
        setTimeout(() => setEraserDust([]), 800);
    };

    return (
        <div className="relative group flex flex-col items-center select-none" onMouseEnter={handleMouseEnter} onMouseLeave={() => setIsHovered(false)}>
            {/* Sketchy Avatar Frame */}
            <div className="relative">
                {/* Hand-drawn sketchy border outline */}
                <div 
                    className="w-36 h-36 md:w-48 md:h-48 p-1.5 bg-[#14120E] sketch-card relative overflow-hidden transition-all duration-500"
                    style={{
                        borderColor: mode === 'sketch' ? 'rgba(212, 168, 83, 0.7)' : 'rgba(126, 179, 204, 0.7)',
                        boxShadow: '4px 4px 0 0 rgba(212, 168, 83, 0.25), -2px -2px 0 0 rgba(212, 168, 83, 0.15)',
                    }}
                >
                    {/* The Image Container */}
                    <div className="w-full h-full relative overflow-hidden rounded-xs bg-[#1C1916]">
                        {/* 1. ORIGINAL PHOTO LAYER */}
                        <img
                            src={imageSrc}
                            alt={alt}
                            className={`w-full h-full object-cover transition-opacity duration-700 ${
                                mode === 'photo' ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                            }`}
                        />

                        {/* 2. HAND-DRAWN PENCIL SKETCH LAYER */}
                        <div 
                            className={`absolute inset-0 transition-opacity duration-700 ${
                                mode === 'sketch' ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {/* Grayscale High-Contrast Pencil Filter */}
                            <img
                                src={imageSrc}
                                alt={alt}
                                className="w-full h-full object-cover filter contrast-[220%] brightness-[105%] grayscale(100%) sepia(20%) hue-rotate(15deg) mix-blend-mode-luminosity"
                            />

                            {/* Pencil Cross-Hatch Sketch Overlay */}
                            <div 
                                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60"
                                style={{
                                    backgroundImage: `repeating-linear-gradient(45deg, rgba(212,168,83,0.3) 0, rgba(212,168,83,0.3) 1px, transparent 0, transparent 4px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.4) 0, rgba(0,0,0,0.4) 1px, transparent 0, transparent 5px)`
                                }}
                            />

                            {/* Paper Grain & Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#14120E]/80 via-transparent to-amber-900/10 pointer-events-none" />
                            
                            {/* Sketch Stamp Tag */}
                            <div className="absolute top-2 right-2 bg-[#14120E]/90 border border-amber-700/60 px-1.5 py-0.5 rounded text-[9px] font-sketch font-bold text-amber-300 shadow">
                                ✏️ Pencil Sketch
                            </div>
                        </div>

                        {/* Interactive Eraser Rubbing Sweep Animation */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ x: '-100%', opacity: 0 }}
                                    animate={{ x: '100%', opacity: [0, 0.8, 0] }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/25 to-transparent pointer-events-none skew-x-12"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Flying Eraser Dust Particles on Hover */}
                {eraserDust.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 1, x: p.x, y: p.y, scale: 1 }}
                        animate={{ opacity: 0, x: p.x + p.vx * 15, y: p.y + p.vy * 15, scale: 0, rotate: p.rotation }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute w-2 h-1 bg-amber-200/80 rounded-full pointer-events-none"
                        style={{ width: p.size, height: p.size * 0.6 }}
                    />
                ))}

                {/* Interactive Pencil vs Photo Mode Switcher */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#1C1916] border border-amber-700/60 p-1 shadow-lg rounded-sm z-20 whitespace-nowrap">
                    <button
                        onClick={() => setMode('sketch')}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-[2px] text-[10px] font-sketch font-bold transition-all ${
                            mode === 'sketch' 
                                ? 'bg-amber-400 text-amber-950 shadow-sm' 
                                : 'text-amber-300/70 hover:text-amber-200'
                        }`}
                        title="View Pencil Sketch View"
                    >
                        <Pencil size={11} />
                        <span>Sketch</span>
                    </button>
                    <button
                        onClick={() => setMode('photo')}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-[2px] text-[10px] font-sketch font-bold transition-all ${
                            mode === 'photo' 
                                ? 'bg-amber-400 text-amber-950 shadow-sm' 
                                : 'text-amber-300/70 hover:text-amber-200'
                        }`}
                        title="View Original Photo View"
                    >
                        <Eye size={11} />
                        <span>Photo</span>
                    </button>
                </div>
            </div>

            {/* Hand-drawn caption */}
            <div className="mt-7 flex items-center gap-1.5 text-amber-500/80 text-xs font-sketch font-semibold">
                <Sparkles size={12} className="text-amber-400" />
                <span>Hover / Click toggle to inspect sketch</span>
            </div>
        </div>
    );
};

export default SketchAvatar;
