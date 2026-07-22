import React from 'react';

const GlassCard = ({ children, className = '' }) => {
    return (
        <div className={`sketch-card bg-[#1C1916]/80 backdrop-blur-sm overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

export default GlassCard;
