import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-[#F4F8FC] via-[#E6F0FA] to-[#F8FAFC]">
            {/* Static soft ambient glows — no animation, no blur repaints */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-400/20 via-blue-300/15 to-indigo-300/10 blur-[120px]" />
            <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-blue-400/15 via-sky-300/20 to-teal-200/10 blur-[140px]" />
            <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-sky-200/25 via-indigo-300/10 to-blue-400/15 blur-[150px]" />

            {/* Subtle Grid Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03]" 
                style={{ 
                    backgroundImage: `radial-gradient(#0284C7 1px, transparent 1px)`, 
                    backgroundSize: '32px 32px' 
                }} 
            />
        </div>
    );
};

export default AnimatedBackground;
