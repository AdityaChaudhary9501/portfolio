import React from 'react';

const GlassCard = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div
            className={`apple-glass rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-sky-500/10 border border-white/90 w-full relative overflow-hidden ${
                hoverEffect ? 'apple-glass-hover' : ''
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default GlassCard;
