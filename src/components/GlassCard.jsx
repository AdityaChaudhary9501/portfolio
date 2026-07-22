import React from 'react';

const GlassCard = ({ children, className = '' }) => {
    return (
        <div className={`bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${className}`}>
            {children}
        </div>
    );
};

export default GlassCard;
