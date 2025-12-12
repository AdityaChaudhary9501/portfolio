import React from 'react';

const GlassCard = ({ children, className = '' }) => {
    return (
        <div className={`bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-xl overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

export default GlassCard;
