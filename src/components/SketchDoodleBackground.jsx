import React from 'react';

const SketchDoodleBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Static floating glass pill accents — no Framer Motion, no backdrop-blur repaints */}
            <div className="absolute top-24 left-10 w-24 h-24 rounded-full bg-white/30 border border-white/60 shadow-lg shadow-sky-500/5 hidden xl:block" />
            <div className="absolute top-1/2 left-6 w-16 h-40 rounded-3xl bg-blue-100/20 border border-white/50 hidden lg:block" />
        </div>
    );
};

export default SketchDoodleBackground;
